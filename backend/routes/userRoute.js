const router = require("express").Router();

const authMiddleware = require("../helpers/authMiddleware");
const roleMiddleware = require("../helpers/roleMiddleware");
const {blogPost, getAllBlog, upvoteBlog,deleteBlog,getBlogById} = require("../controllers/orgControllers/blogController");
const {campaignPost, getAllCampaigns, joinCampaign} = require("../controllers/orgControllers/campaignController");
const {getOrganizationDetails, updateOrgPfp, getOrgRecentActivity, updateOrganizationDetails} = require("../controllers/orgControllers/orgController");
const {getIndividualDetails, updateIndividualDetails, getIndRecentActivity, updatePfp} = require("../controllers/indControllers/indController");

const uploadImage = require('../helpers/multer');
//org request
router.get('/get-org', authMiddleware, roleMiddleware("organization"), getOrganizationDetails);
router.put('/update-org-pfp', authMiddleware, roleMiddleware("organization"), uploadImage, updateOrgPfp);
router.get('/get-org-recent-activity', authMiddleware, roleMiddleware("organization"), getOrgRecentActivity);
router.put('/update-org-profile', authMiddleware, roleMiddleware("organization"), updateOrganizationDetails);

//for getting blogs
router.get('/get-all-blogs',authMiddleware, getAllBlog);
router.delete('/delete-blog/:blog_id', authMiddleware, deleteBlog);
router.put('/update-blog/:blog_id', authMiddleware, roleMiddleware("organization"), getBlogById);
router.patch('/upvote/:blog_id',authMiddleware, roleMiddleware("individual"),upvoteBlog);
router.post('/create-blog',authMiddleware,roleMiddleware("organization"), blogPost);

//for campaigns
router.post('/campaignpost',authMiddleware,roleMiddleware("organization"), campaignPost);
router.patch('/join-campaign/:campaign_id',authMiddleware,roleMiddleware("individual"), joinCampaign);
router.get('/get-all-campaigns', getAllCampaigns);


//for individual
router.get('/get-ind', authMiddleware, roleMiddleware("individual"), getIndividualDetails);
router.put('/update-ind-pfp', authMiddleware, roleMiddleware("individual"), uploadImage, updatePfp);
router.put('/update-ind-profile', authMiddleware, roleMiddleware("individual"), updateIndividualDetails);
router.get('/get-ind-recent-activity', authMiddleware, roleMiddleware("individual"), getIndRecentActivity);

module.exports = router

