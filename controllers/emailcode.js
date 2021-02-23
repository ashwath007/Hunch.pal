const User = require('../models/palUser');
const State = require('../models/states');
// const Token = require('../models/tokens.js');
const { check, validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');



const chalk = require('chalk');



exports.emailcode = (req,res) => {
	console.log(req.cookies.EVer);
	console.log(req.body.code);
	const STATE = new State();
	User.findOne({Ecode:req.body.code},(err,gott)=>{
			if(err){
			   console.log(err);
				res.send(err);  
			}	
			else{
					console.log(chalk.bold.blue(gott.USER_STATES));
					State.findById(gott.USER_STATES,function(err,donee){
						if(err){
							console.log(err);
						}
						else{
							console.log(chalk.blue(gott));
							console.log(">>>>>>>>>>>>>>>>>"+req.cookies.TOKEN);
							
							const CURRENT_STATE1 = donee.isSignIn;
							const CURRENT_STATE2 = donee.isSignOut;
							// if((req.cookies.TOKEN == null) && (req.cookies.TOKEN_ID == null)){
							if((CURRENT_STATE1==false && CURRENT_STATE2==false) ||(CURRENT_STATE1==true && CURRENT_STATE2==false) ){
												console.log(gott);
									res.cookie("EVer",1);
									const TOKEN = gott.USER_ID + gott.G_ID;
									console.log(TOKEN);
									res.cookie("TOKEN",TOKEN,{ maxAge: 8 * 60 * 60 * 1000, httpOnly: true });
									res.cookie("TOKEN_ID",gott._id,{ maxAge: 8 * 60 * 60 * 1000, httpOnly: true });
									console.log(chalk.bgRedBright.white(gott._id));
									// const nToken = new Token(req.body);

								//HERE THE STATE OF USER IS SIGNIN
									const IS_user_SIGNED_IN = 1; 
									STATE.isSignIn = IS_user_SIGNED_IN;
									STATE.isSignOut= 0;
									STATE.save((err,done)=>{
										if(err){
											console.log(err);
										}
										console.log(done);
										gott.TOKEN    		= TOKEN;
										gott.TOKEN_ID 		= gott._id;
										gott.Everifyed		= 1;
										gott.USER_STATES	= done._id;
										gott.save((err,doneTOCKEN)=>{
													if(err){
														console.log(err);
													}
													else{
														console.log(doneTOCKEN);
															res.render("home.ejs",{user_name:gott.name,token:doneTOCKEN.TOKEN});
															
													}
									});
									});
					
							}
							else{
								console.log("HOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
								res.redirect("/");
							}
							}
						// }
					});
					
					
				
					
			}
					
	});
}