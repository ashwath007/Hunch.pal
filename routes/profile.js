const express = require('express');
const router  = express.Router();
const {dashProfile} = require('../controllers/profile');//Hunch_Resume/controllers/profile


router.get("/user/profiledash/:token/profile/userprofilehere",dashProfile);




module.exports = router;