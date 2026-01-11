const router = require("express").Router();

const authMiddleware = require("../helpers/authMiddleware");
const roleMiddleware = require("../helpers/roleMiddleware");
const {blogPost, getAllBlog} = require("../controllers/orgControllers/blogController");
const {campaignPost, getCampaignDetails} = require("../controllers/orgControllers/campaignController");

//org request
router.post('/blogpost',authMiddleware,roleMiddleware("organization"), blogPost);
router.post('/campaignpost',authMiddleware,roleMiddleware("organization"), campaignPost);

//for getting blogs
router.get('/get-all-blogs', getAllBlog);
router.get('/campaigns', getAllBlog);

module.exports = router

