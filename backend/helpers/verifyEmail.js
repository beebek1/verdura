const {Register} = require('../models/associations');
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");


//sending email
const sendEmail = async(to, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: `"Verdura" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html
    });
};


//for sending email
const emailSender = async(html, subject, email) => {

    console.log(email + subject )

    await sendEmail(
        email,
        subject,
        html
    )
}

//verifying email
const verifyEmail = async(req, res) => {
    try{
        const {token} = req.body;

        if(!token){
            return res.status(400).json({
                message : "token missing"
            });
        }

        //find user with valid token
        const user = await Register.findOne({where: {verificationToken: token}});

        if(!user){
            return res.status(400).json({
                success : false,
                message: "Invalid token",
            });
        }
        
        //check expiry
        if(user.verificationTokenExpires < new Date()){
            return res.status(400).json({
                success : false,
                message: "Token expired. Retry"
            })
        }
        
        //reset verification tokens
        user.isVerified = true;
        user.verificationToken = null;
        user.verificationTokenExpires = null;

        await user.save();

        return res.status(200).json({
            success : true,
            message: "Email verified successfully"
        })

    }catch(error){
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            error: error.message
        })
    }
}

const verifyToken = async(req, res) =>{
    try{
        const {token} = req.body;

        if(!token){
            return res.status(400).json({
                message : "token missing"
            });
        }

        //find user with valid token
        const user = await Register.findOne({where: {verificationToken: token}});

        if(!user){
            return res.status(400).json({
                message: "Invalid token",
            });
        }
        
        //check expiry
        if(user.verificationTokenExpires < new Date()){
            return res.status(400).json({
                message: "Token expired. Retry"
            })
        }

        return res.status(201).json({
            message : "token verified"
        })

    }catch(error){
        return res.status(500).json({
            message : "something went wrong",
            error: error.message
        })
    }
}
module.exports = {verifyEmail, sendEmail, emailSender, verifyToken};