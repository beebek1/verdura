const router = require("express").Router();

const authMiddleware = require("../helpers/authMiddleware");
const roleMiddleware = require("../helpers/roleMiddleware");
const {blogPost, getAllBlog, upvoteBlog} = require("../controllers/orgControllers/blogController");
const {campaignPost, getAllCampaigns} = require("../controllers/orgControllers/campaignController");
const getOrganizationDetails = require("../controllers/orgControllers/orgController");

//org request
router.get('/get-user', authMiddleware, roleMiddleware("organization"), getOrganizationDetails);
router.post('/create-blog',authMiddleware,roleMiddleware("organization"), blogPost);
router.post('/campaignpost',authMiddleware,roleMiddleware("organization"), campaignPost);

//for getting blogs
router.get('/get-all-blogs',authMiddleware,roleMiddleware("organization"), getAllBlog);
router.get('/get-all-campaigns', getAllCampaigns);
router.patch('/upvote/:blog_id',authMiddleware, roleMiddleware("individual"),upvoteBlog);


module.exports = router

