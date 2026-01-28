const router = require('express').Router();

const {registerUser, userLogin, deleteUser, forgotPassword} = require('../controllers/authController');
const {verifyEmail, verifyToken} = require('../helpers/verifyEmail');
const resetPassword = require("../helpers/resetPassword");
const { blogPost } = require('../controllers/orgControllers/blogController');
const authMiddleware = require("../helpers/authMiddleware");

//for all users

//post request
router.post('/register', registerUser);
router.post('/login', userLogin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/verify-token', verifyToken);
router.post('/verify-email', verifyEmail);

//delete request
router.delete('/delete-user', authMiddleware, deleteUser);

module.exports = router;