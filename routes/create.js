const express = require('express');
const router = express.Router();

const User = require('../models/palUser');
const chalk = require('chalk');

router.get("/create",(req,res)=>{
	console.log(chalk.bold.blue(req.cookies.TOKEN_ID));
		console.log(chalk.bold.blue(req.cookies.TOKEN));
	if(req.cookies.TOKEN){
		if(req.cookies.TOKEN_ID)
		//WE ARE CHECKING IF HE/SHE IS A VALID USER
		User.findOne({TOKEN:req.cookies.TOKEN},(err,gots)=>{
			if(err){
				console.log(err);
			}
			else{
				console.log(gots);
			res.render("home",{user_name:gots.name,token:gots.TOKEN});
			}
		});
		
	}
	else{
		console.log(req.cookies.G_ID+"..............."+req.cookies.USER_ID);
		if(req.cookies.USER_ID == null || req.cookies.G_ID ==null ){
			res.redirect("/");
		}
		else{
		console.log("User logged out or new user");
	res.render("createResume.ejs");
		}
		}
	});


module.exports = router;