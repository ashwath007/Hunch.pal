const express 		= require('express');
const router  		= express.Router();
const {dashboardDashboard} 	= require('../controllers/dashboardDashboard'); 
const {isAuth}    	= require('../controllers/home');
//Hunch_Resumewreth



router.get("/user/:token/dashboard",isAuth,dashboardDashboard);

///hunch/pal/user/a6f2a85f-aade-4784-88fb-b3ffac520fa8vh16NIZZY/dashboard

module.exports = router;
