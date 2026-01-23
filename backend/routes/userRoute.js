const router = require("express").Router();

const authMiddleware = require("../helpers/authMiddleware");
const roleMiddleware = require("../helpers/roleMiddleware");
const {blogPost, getAllBlog, upvoteBlog} = require("../controllers/orgControllers/blogController");
const {campaignPost, getAllCampaigns, joinCampaign} = require("../controllers/orgControllers/campaignController");
const getOrganizationDetails = require("../controllers/orgControllers/orgController");
const {getIndividualDetails, updateIndividualDetails, getRecentActivity} = require("../controllers/indControllers/indController");

//org request
router.get('/get-org', authMiddleware, roleMiddleware("organization"), getOrganizationDetails);

//for getting blogs
router.get('/get-all-blogs',authMiddleware,roleMiddleware("individual"), getAllBlog);
router.patch('/upvote/:blog_id',authMiddleware, roleMiddleware("individual"),upvoteBlog);
router.post('/create-blog',authMiddleware,roleMiddleware("organization"), blogPost);

//for campaigns
router.post('/campaignpost',authMiddleware,roleMiddleware("organization"), campaignPost);
router.patch('/join-campaign/:campaign_id',authMiddleware,roleMiddleware("individual"), joinCampaign);
router.get('/get-all-campaigns', getAllCampaigns);


//for individual
router.get('/get-ind', authMiddleware, roleMiddleware("individual"), getIndividualDetails);
router.put('/update-ind-profile', authMiddleware, roleMiddleware("individual"), updateIndividualDetails);
router.get('/get-recent-activity', authMiddleware, roleMiddleware("individual"), getRecentActivity);

module.exports = router

