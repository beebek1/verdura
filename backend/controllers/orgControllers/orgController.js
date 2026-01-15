const { sequelize } = require("../../db/database");
const { OrgInfo, Register, CreateBlog, CreateCampaigns } = require("../../models/associations");

const getOrganizationDetails = async(req, res) =>{
    try{
        const{ id } = req.user

        if(!id){
            return res.status(200).json({
                success:false,
                message: "cannot extract the id from the req.user"
            })
        }

        const organization = await Register.findOne({
            where :{user_id : id},
            attributes: ['username','email', 'createdAt'],
            include : 
                {
                    model : OrgInfo,
                    required : false,
                    attributes : {
                        exclude : [
                            'org_id', 
                            'user_id', 
                            'PAN_no', 
                            'updatedAt',
                        ], 
                    },
                    include : {
                        model : CreateCampaigns,
                        where :{ status : "ACTIVE"},
                        attributes : {exclude : ['org_id', 'updatedAt', 'createdAt']},
                        required : false
                    }
                },
        });

        if(!organization){
            return res.status(500).json({
                success: false,
                message: "no organization data found "
            })
        }

        return res.status(201).json({
            success : true,
            organization
        })


    }catch(err){
        return res.status(500).json({
            success: false,
            message: "something went wrong",
            error : err.message
        })
    }
}

module.exports = getOrganizationDetails;