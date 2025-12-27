const router = require('express').Router();

const blogPost = require("../controllers/BlogController");

router.post('/blogPost', blogPost)

module.exports = router;
