const router = require('express').Router();

const {registerUser, userLogin, deleteUser, forgotPassword} = require('../controllers/authController');
const {verifyEmail} = require('../helpers/verifyEmail');

const authMiddleware = require("../helpers/authMiddleware");
const roleMiddleware = require("../helpers/roleMiddleware");
const {campaignPost, blogPost} = require("../controllers/orgController");
const resetPassword = require("../helpers/resetPassword");


//for all user
router.post('/register', registerUser);
router.post('/login', userLogin);
router.get('/verify-email', verifyEmail);
router.delete('/delete', authMiddleware, deleteUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

//for orgs
router.post('/blogpost',authMiddleware,roleMiddleware("org"), blogPost);
router.post('/campaignpost',authMiddleware,roleMiddleware("org"), campaignPost);


module.exports = router;