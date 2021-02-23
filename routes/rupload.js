const express 	  = require('express');
const router  	  = express.Router();
const {isAuth}    = require('../controllers/home');
const {upload}    = require('../controllers/rupload');

router.get("/resume/:token/upload",isAuth,upload)


module.exports = router;