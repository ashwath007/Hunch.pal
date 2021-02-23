const express 		= require('express');
const router  		= express.Router();
const {createresume} 	= require('../controllers/createresume');
const {isAuth}    	= require('../controllers/home');
//Hunch_Resume

router.get("/dashboard/:token/createresume",isAuth,createresume);


module.exports = router;
