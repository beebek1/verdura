const router = require("express").Router();

const authMiddleware = require("../helpers/authMiddleware");
const roleMiddleware = require("../helpers/roleMiddleware");
const {campaignPost, blogPost} = require("../controllers/orgController");

//post request
router.post('/blogpost',authMiddleware,roleMiddleware("org"), blogPost);
router.post('/campaignpost',authMiddleware,roleMiddleware("org"), campaignPost);