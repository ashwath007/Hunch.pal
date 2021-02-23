const express = require('express');
const router  = express.Router();
const {myJob} = require('../controllers/myjob');
const {isAuth} = require('../controllers/home');

router.get("/user/profiledash/:token/profile/myjob",isAuth,myJob);

module.exports = router;