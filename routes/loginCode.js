const express 		= require('express');
const router  		= express.Router();
const {loginCode}	= require('../controllers/loginCode');


router.post("/loginCode",[
	
],loginCode);


module.exports = router;