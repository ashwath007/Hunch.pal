const User = require('../models/palUser');
const State= require('../models/states');
const { check, validationResult } = require("express-validator");
const {Everify} = require('../email/everify');

exports.createAccount = (req,res)=>{
	const errors = validationResult(req);
	
	if(!errors.isEmpty()){
		res.send(errors);
	}
	const USER  = new User(req.body);
	const STATE = new State();
	USER.save((err,saved)=>{
		if(err){
			res.send(err);
		}
		else{
			//STORING USER STATE
			STATE.isSignIn = 0;
			STATE.isSignOut= 0;
			STATE.save((err,gottt)=>{
				if(err){
					console.log(err);
				}
				else{
					console.log(gottt);
					console.log("Done ");
					console.log(saved);
					console.log(req.cookies.USER_ID);
					console.log(req.cookies.G_ID);
					USER.USER_ID = req.cookies.USER_ID;
					USER.G_ID = req.cookies.G_ID;
					USER.USER_STATES = gottt._id;
					USER.Ecode = req.cookies.USER_ID.slice(0,3)+req.cookies.G_ID.slice(0,2);
					USER.save((err,done)=>{
								if(err){
									res.send(err)
								   }
								else{
									console.log(done);
									Everify(saved.email,"Welcome to Hunch.Inc pal Verification",done.Ecode,saved.USER_ID);
									res.render("emailVerification.ejs",{username:USER.name});

								}
			});
				}
			});
			
		}
	});
	
}

