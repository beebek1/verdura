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

const updateOrgPfp = async (req, res) => {
    try {
        const { id } = req.user;
        const updateData = { user_id: id };

        // 1. Handle Logo
        if (req.files?.thumbnail) {
            updateData.logo_path = `uploads/${req.files.thumbnail[0].filename}`;
        }

        // 2. Handle Registration Document
        if (req.files?.registration_doc) {
            updateData.first_legal_document = `uploads/${req.files.registration_doc[0].filename}`;
        }

        // 3. Handle PAN Document
        if (req.files?.pan_doc) {
            updateData.second_legal_document = `uploads/${req.files.pan_doc[0].filename}`;
        }

        // Check if updateData has more than just the user_id
        if (Object.keys(updateData).length <= 1) {
            return res.status(400).json("No files provided for upload");
        }

        await OrgInfo.upsert(updateData);

        return res.status(201).json({
            message: "Upload successful",
            updatedFields: Object.keys(updateData).filter(k => k !== 'user_id')
        });

    } catch (err) {
        return res.status(500).json({ message: "Server side error", error: err.message });
    }
};

const getOrgRecentActivity = async (req, res) => {
    const { id } = req.user;
    if (!id) {
        return res.status(400).json({
            message: "id not passed"
        });
    }

    try {
        // Fetch OrgInfo for the user
        const org = await OrgInfo.findOne({ where: { user_id: id } });

        if (!org) {
            return res.status(201).json({
                message: "recent activity fetched",
                recentActivities: []
            });
        }

        // Fetch campaigns
        const campaigns = await CreateCampaigns.findAll({
            where: { org_id: org.org_id, status: 'ACTIVE' },
            order: [['createdAt', 'DESC']]
        });

        // Fetch blogs
        const blogs = await CreateBlog.findAll({
            where: { org_id: org.org_id },
            order: [['createdAt', 'DESC']]
        });

        // Combine and sort by createdAt descending
        const combined = [...campaigns, ...blogs].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        return res.status(201).json({
            message: "recent activity fetched",
            recentActivities: combined
        });
    } catch (err) {
        return res.status(500).json({
            message: "internal error",
            error: err.message
        });
    }
};

const updateOrganizationDetails = async (req, res) => {
    try {
        const { id } = req.user; 
        const { orgName, email, bio, country, state, city, street } = req.body;

        const user = await Register.findByPk(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // 2. Combine address parts into a single string for the database
        const fullAddress = `${country || ''} ${state || ''} ${city || ''} ${street || ''}`.trim();

        await Register.update(
            { 
                username: orgName, 
                email: email 
            },
            { where: { user_id: id } }
        );

        // upsert ensures it creates the record if by some chance it doesn't exist
        await OrgInfo.upsert({
                user_id : id,
                description: bio,
                address: fullAddress
            });

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully"
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Failed to update profile",
            error: err.message
        });
    }
};

module.exports = {getOrganizationDetails, updateOrgPfp, getOrgRecentActivity, updateOrganizationDetails};