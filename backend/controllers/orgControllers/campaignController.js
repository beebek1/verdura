const {CreateCampaigns, OrgInfo} = require("../../models/associations");

const campaignPost = async(req, res) =>{
    const{title, description, category, start_date, end_date} = req.body;

    if(!title || !description ||!start_date ||!end_date ){
        return res.status(400).json({
            message: "fill all the fields"
        });
    }

    await CreateCampaigns.create({
        title,
        description,
        category,
        start_date : new Date(start_date),
        end_date: new Date(end_date),
        org_id : req.user.id
    })

    return res.status(201).json({
        message: "campaigns added"
    })
}

const getAllCampaigns = async(req, res) =>{
    
    try{
        const campaigns = await CreateCampaigns.findAll({
            attributes: ["campaign_id", "title", "description", "volunteer", "status", "category", "start_date", "end_date"],
            include: {
                model:OrgInfo,
                attributes: ["org_id", "description", "logo_path"]
            }
        })

        if(campaigns.length ===0){
            return res.status(404).json({
                success: false,
                message:" no camapaigns found"
            })
        }

        return res.status(201).json({
                message: "campaigns fetched succesfully",
                campaigns
        });

    }catch(error){
        return res.status(400).json({
            message: "somehting went wrong",
            error: error.message
        })
    }
}


module.exports = {campaignPost, getAllCampaigns};    