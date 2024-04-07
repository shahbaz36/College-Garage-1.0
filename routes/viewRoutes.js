const express = require('express');
const viewsController = require('./../controllers/viewsController');
const authController = require('./../controllers/authController');

const router = express.Router();

// router.get('/homepage', authController.isLoggedIn, viewsController.homepage);
// router.get('/login', authController.isLoggedIn, viewsController.login);
// router.get('/aboutus', viewsController.aboutus);
// router.get('/me', authController.protect, authController.isLoggedIn, viewsController.profile);
// router.get('/signup', viewsController.signup);
// router.get('/item', viewsController.item);

router.get('/footer', viewsController.footer);  
router.get('/header', viewsController.header);
router.get('/base', viewsController.base);

module.exports = router; 
