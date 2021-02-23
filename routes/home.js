const express = require('express');
const router  = express.Router();
const {home,isAuth}    = require('../controllers/home');

router.get("/user/:token/resume",isAuth,home);


module.exports  =  router;