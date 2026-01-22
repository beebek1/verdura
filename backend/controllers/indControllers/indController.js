const { sequelize } = require("../../db/database");
const {Register, CreateCampaigns, IndInfo } = require("../../models/associations");

const getIndividualDetails = async(req, res) =>{
    try{
        const{ id } = req.user

        if(!id){
            return res.status(200).json({
                success:false,
                message: "cannot extract the id from the req.user"
            })
        }

        const individual = await Register.findOne({
            where :{user_id : id},
            attributes: ['username','email', 'createdAt'],
            include : 
                {
                    model : IndInfo,
                    required : false,
                    attributes : {
                        exclude : [
                            'ind_id', 
                            'user_id', 
                            'updatedAt',
                        ], 
                    },
                },
        });

        if(!individual){
            return res.status(500).json({
                success: false,
                message: "no organization data found "
            })
        }

        return res.status(201).json({
            success : true,
            individual
        })


    }catch(err){
        return res.status(500).json({
            success: false,
            message: "something went wrong",
            error : err.message
        })
    }
}

module.exports = getIndividualDetails;