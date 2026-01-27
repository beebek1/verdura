const {CreateCampaigns, OrgInfo, Register, IndInfo} = require("../../models/associations");

const campaignPost = async(req, res) =>{
    const{title, description, category,volunteer, status,start_date, end_date} = req.body;

    if(!title || !description ||!start_date ||!end_date ){
        return res.status(400).json({
            message: "fill all the fields"
        });
    }

    const org = await OrgInfo.findOne({ where: { user_id: req.user.id } });

    if (!org) {
      return res.status(400).json({ message: "Organization not found for this user" });
    }

    const campaign = await CreateCampaigns.create({
        title,
        description,
        category,
        volunteer: volunteer || 0,
        status: status || "ACTIVE",
        start_date : new Date(start_date),
        end_date: new Date(end_date),
        org_id : org.org_id
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
        });

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



const joinCampaign = async (req, res) => {
    try {
        const { campaign_id } = req.params;
        
        // Find the user specifically
        const user = await Register.findByPk(req.user.id);
        const campaign = await CreateCampaigns.findByPk(campaign_id);

        const Org_id = campaign.org_id;

        if (!campaign) return res.status(404).json({ message: "Campaign not found" });

        // Check if the upvote already exists
        const hasJoined = await user.hasJoinedCampaign(campaign);

        if (hasJoined) {
            // Logic to "Un-upvote"
            await user.removeJoinedCampaign(campaign);
            await campaign.decrement('volunteer');
            await OrgInfo.decrement('total_volunteers', { where :  { org_id : Org_id}})
            await IndInfo.decrement('total_campaigns_joined', { where :  { user_id : user.user_id}})


            return res.status(200).json({ message: "campaign unjoined" });
        }

        // Add the upvote
        await user.addJoinedCampaign(campaign);
        await campaign.increment('volunteer');
        
        await OrgInfo.increment('total_volunteers', { where :  { org_id : Org_id}})
        await IndInfo.increment('total_campaigns_joined', { where :  { user_id : user.user_id}})

        res.status(200).json({ message: "joined successfully" });
    } catch (err) {
        return res.status(500).json({ message: "join failed", error: err.message });
    }
};

const getCampaignById = async(req, res) => {
    try {
        const { campaign_id } = req.params;

        const campaign = await CreateCampaigns.findByPk(campaign_id, {
            attributes: ["campaign_id", "title", "description", "volunteer", "status", "category", "start_date", "end_date"],
            include: {
                model: OrgInfo,
                attributes: ["org_id", "description", "logo_path"]
            }
        });

        if (!campaign) {
            return res.status(404).json({
                success: false,
                message: "Campaign not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Campaign fetched successfully",
            campaign
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
}

const deleteCampaign = async(req, res) => {
    try {
        const { campaign_id } = req.params;

        const campaign = await CreateCampaigns.findByPk(campaign_id);

        if (!campaign) {
            return res.status(404).json({
                success: false,
                message: "Campaign not found"
            });
        }

        // Verify that the campaign belongs to the organization of the logged-in user
        const org = await OrgInfo.findOne({ where: { user_id: req.user.id } });

        if (!org) {
            return res.status(403).json({
                success: false,
                message: "Organization not found for this user"
            });
        }

        if (campaign.org_id !== org.org_id) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this campaign"
            });
        }

        // Delete the campaign
        await campaign.destroy();

        return res.status(200).json({
            success: true,
            message: "Campaign deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete campaign",
            error: error.message
        });
    }
}



module.exports = {campaignPost, getAllCampaigns, joinCampaign, getCampaignById, deleteCampaign};    