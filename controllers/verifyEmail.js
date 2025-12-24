const RegisterUser = require("../models/userModel");

const verifyEmail = async(req, res) => {
    try{
        const {token} = req.query;

        if(!token){
            return res.status(400).json({
                message : "token missing"
            });
        }

        //find user with valid token
        const user = await RegisterUser.findOne({where: {verificationToken: token}});

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

        //verify user
        user.isVerified = true;
        user.verificationToken = null;
        user.verificationTokenExpires = null;

        await user.save();

        return res.status(200).json({
            message: "Email verified successfully"
        })

    }catch(error){
        return res.status(404).json({
            message : "something went wrong",
            error: error.message
        })
    }
}

module.exports = verifyEmail;