const express = require('express');

const authController = require('../controller/authController');

const router = express.Router();


router.get('/signup',authController.signup_get);

router.post('/signup',authController.signup_post);

router.get('/login',authController.login_get);

router.post('/login',authController.login_post);

// router.get('/signup',()=>{});




module.exports = router;