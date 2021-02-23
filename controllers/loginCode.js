
const chalk   = require('chalk'); 
const User    = require('../models/palUser');
const State   = require('../models/states');

exports.loginCode   =   (req,res)=> {
	console.log(req.body.logincode);
	console.log(req.cookies.USER_CODE);
	if(req.body.logincode == req.cookies.LOGIN_CODE){
		User.findOne({email:req.body.useremail},(err,gott)=>{
			if(err){
				console.log(err);
			}
			else{
				//HERE THE USER STATE IS SIGNIN
				console.log(gott);
				const STATE = new State();
				STATE.isSignIn = true;
				STATE.isSignOut= false;
				STATE.save((E,DD)=>{
					if(E){
						console.log(E);
					}
					else{
						console.log(DD);
						gott.USER_STATES = DD._id;
						gott.save((EE,DDD)=>{
							if(EE){
								console.log(EE);
							}
							else{
								console.log(DDD);
								
						res.cookie("USER_ID",gott.USER_ID);
						res.cookie("G_ID",gott.G_ID);
						res.cookie("EVer",gott.Everifyed);
						res.cookie("PVer",0);
						res.cookie("P_complete",0);
						res.cookie("Ecode",gott.Ecode);
						res.cookie("TOKEN",gott.TOKEN,{ maxAge: 8 * 60 * 60 * 1000, httpOnly: true });
						res.cookie("TOKEN_ID",gott._id,{ maxAge: 8 * 60 * 60 * 1000, httpOnly: true });
						res.render("home.ejs",{user_name:gott.name,token:gott.TOKEN});
					
							}
						});}
				});
				
			}
		});
	}
	
}