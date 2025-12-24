const RegisterUser = require("../models/userModel");
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

    // const verificationToken = crypto.randomBytes(32).toString("hex");
    // const verification

    //hashing password 
    const hashedPassword = bcrypt.hashSync(password, 10);

    //passing data to model
    const createUser = await RegisterUser.create({
        username,
        email,
        password : hashedPassword
    });

    return res.status(201).json({
        message: "user registered successfully",
        user:{
            username: createUser.username,
            email: createUser.email
        }
    })
}

const userLogin = async (req, res) =>{


    console.log("iim here ")

    const{email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message: "email or password cannot be empty"
        })
    }

    const user = await RegisterUser.findOne({where: {email : email}})

    //if there is no user
    if(!user){
        return res.status(404).json({
            message: ` no user with this email ${email} exists `
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