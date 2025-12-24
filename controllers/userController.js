const RegisterUser = require("../models/userModel");
const sendEmail = require("../helpers/sendEmail");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const registerUser = async(req, res) =>{

    const{username, email, password} = req.body;

    if(!username || !email || !password){
        return res.status(400).json({
            message: "please fill all the fields"
        })
    };

    const user = await RegisterUser.findOne({where:{username: username}});
    if(user){
        return res.status(400).json({
            message: `${username} already exists`
        })
    }

    //verification token for verifying
    const verificationToken = crypto.randomBytes(32).toString("hex");

    //token expiry ( 1 hours )
    const verificationTokenExpires = new Date(Date.now() + 1 * 60 * 60 * 1000);

    //hashing password 
    const hashedPassword = bcrypt.hashSync(password, 10);

    //passing data to model
    const createUser = await RegisterUser.create({
        role: "user",
        username,
        email,
        password : hashedPassword,
        verificationToken,
        verificationTokenExpires
    });

    //for sending email
    const verifyLink = `http://localhost:3000/api/user/verify-email?token=${verificationToken}`;

    await sendEmail(
        email,
        "Verify your email",
        `
            <h2>Email Verification</h2>
            <p>Click the link below to verify your email: </p>
            <a href="${verifyLink}"> click Here to verify </a>
        `
    )

    return res.status(201).json({
        message: "user registered successfully",
        user:{
            username: createUser.username,
            email: createUser.email
        }
    });
    }


//for login
const userLogin = async (req, res) =>{

    const{email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message: "email or password cannot be empty"
        })
    }

    const user = await RegisterUser.findOne({where: {email : email, role: "user"}})

    //if there is no user
    if(!user){
        return res.status(404).json({
            message: ` no user with this email ${email} exists `
        })
    }else if(user.isVerified===false){
        return res.status(404).json({
            message: `${email} isn't verified`
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(isMatch){
        return res.status(201).json({
            message : "login successfull"
        })
    }else{
        return res.status(400).json({
            message: "email or password didn't match"
        })
    }
};



module.exports = {registerUser, userLogin};