const router = require('express').Router();

const {registerUser, userLogin } = require('../controllers/userController');
const verifyEmail = require('../controllers/verifyEmail');

const authMiddleware = require("../helpers/authMiddleware");
const roleMiddleware = require("../helpers/roleMiddleware");
const blogController = require("../controllers/BlogController");


//for all user
router.post('/register', registerUser);
router.post('/login', userLogin);
router.get('/verify-email', verifyEmail);

//for orgs
router.get('/blogpost',authMiddleware,roleMiddleware("org"), blogController);

// app.get(
//   "/admin",
//   authMiddleware,
//   roleMiddleware("admin"),
//   adminController
// );


module.exports = router;