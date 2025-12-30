const router = require('express').Router();

const {registerUser, userLogin, deleteUser, forgotPassword} = require('../controllers/authController');
const {verifyEmail} = require('../helpers/verifyEmail');
const resetPassword = require("../helpers/resetPassword");

//for all users

//post request
router.post('/register', registerUser);
router.post('/login', userLogin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

//get request
router.get('/verify-email', verifyEmail);
router.get("/")

//delete request
router.delete('/delete', authMiddleware, deleteUser);


module.exports = router;