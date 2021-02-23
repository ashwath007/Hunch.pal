const User    =  require('../models/palUser');
const State    =  require('../models/states');
const fillOne = require('../models/dashboardResumefillOne');//Hunch_Resume/models/dashboardResumefillOne
const fillTwo = require('../models/dashboardResumefillTwo');
const fillThree = require('../models/dashboardResumefillThree');

const chalk   = require('chalk');


var Promise = require('promise');
//MIDDLEWARE
exports.isAuth = (req,res,next)=>{
	const Token = req.params.token;
	console.log(chalk.green(Token));
	User.findOne({TOKEN:Token},(err,goot)=>{
		if(err){
			res.send(err);
		}
		console.log(chalk.bold.blue(goot.USER_STATES));
		if(goot==null){
			console.log(goot.USER_STATES);
			console.log("Wrong TOKEN Redirect to home screen");
			res.redirect("/");
		}
		State.findById(goot.USER_STATES,(err,rr)=>{
			if(err){
				console.log(err);
			}
			else{
				console.log(rr);
				console.log(chalk.bold.yellow(rr.isSignIn));
				console.log(chalk.bold.yellow(rr.isSignOut));
				if(rr.isSignIn==true && rr.isSignOut==false){
					console.log(chalk.yellow("The user's token is authendicated"));
		next();
				}
				else{
					console.log(chalk.bold.red(rr.isSignIn+"       "+rr.isSignOut));
					if(rr.isSignOut==true){
					res.redirect("/");
						
					}
				}
			}
		});
		
	});
	
}


exports.home = (req,res)=>{
	//Here we are creating globl var for list 
	var Resume_ONE_Arry_NameFirst = [];
	var Resume_ONE_Arry_NameLast = [];
	var Resume_TWO_Arry_Job = [];
	let T = 0;
	var Resume_Three_Arry_Time  = [];
	console.log("good");
		User.findOne({TOKEN:req.params.token},(err,goott)=>{
		if(err){
			res.send(err);
		}
			
		console.log(goott);
			console.log(chalk.green(goott.RESUME_ONE));
			if(goott.RESUME_ONE == null){
				res.render("resumepage.ejs",{token:req.params.token,first_name:goott.name,occ:"Complete Profile",data:"",uploadfile:[""]});
			}
			else{
		console.log(goott.USER_STATES);
					console.log(goott.RESUME_ONE);
		console.log(goott.RESUME_ONE_DONE);
		console.log(goott.RESUME_TWO);
		console.log(goott.RESUME_TWO_DONE);
		console.log(goott.RESUME_THREE);
		console.log(goott.RESUME_THREE_HIGHER_EDU_STAGE);
		console.log(goott.RESUME_THREE_DONE);
					console.log(goott.RESUME_THREE_PHASE_TWO);
		console.log(goott.RESUME_THREE_PHASE_TWO_DONE);
		console.log(goott.RESUME_COMPLETED);
		console.log(goott.RESUME_THREE_PHASE_THREE);
		
		console.log(goott.RESUME_ONE.length);

			//case 1:
				// one is completed
			//case 2: 
				// one and two completed
			//case 3:
				//profile completed
		
		 
			 console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+goott.RESUME_ONE.length-1);
			 console.log(goott.RESUME_ONE[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_ONE_DONE[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_TWO[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_TWO_DONE[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_THREE[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_THREE_HIGHER_EDU_STAGE[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_THREE_DONE[goott.RESUME_ONE.length-1]);
					console.log(goott.RESUME_THREE_PHASE_TWO[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_THREE_PHASE_TWO_DONE[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_COMPLETED[goott.RESUME_ONE.length-1]);
		console.log(goott.RESUME_THREE_PHASE_THREE[goott.RESUME_ONE.length-1]);
		console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
			 fillOne.findById(goott.RESUME_ONE[goott.RESUME_ONE.length-1],(err,ONE)=>{
				 if(err){
					 console.log(err);
				 }
				 console.log(ONE);
				 console.log("...........................");
				 console.log(chalk.green.bold(ONE));
				 console.log("...........................");
				console.log();
				 if(ONE==null){
					 console.log("NULL NULL");
					 res.render("resumepage.ejs",{token:req.params.token,first_name:"User name",occ:"Complete Profile",data:"",code:req.cookies.TOKEN_ID,uploadfile:[""]});
				 }
				 else{
				 Resume_ONE_Arry_NameFirst.push(ONE.FirstName);
					 console.log("@@@@@@@@@@@@@@@@@@@@@@@");
				console.log(chalk.bold.green(goott.RESUME_UPLOAD_FILE));
					 					 console.log("@@@@@@@@@@@@@@@@@@@@@@@");

					 // res.render("resumepage.ejs",{token:req.params.token,first_name:goott.name,occ:"Complete Profile",data:""});
				 
				res.render("resumepage.ejs",{token:req.params.token,first_name:ONE.FirstName+" "+ONE.LastName,occ:ONE.Email,data:ONE.updatedAt,uploadfile:goott.RESUME_UPLOAD_FILE,code:req.cookies.TOKEN_ID});
				 }
			 });

			}
			
			console.log("***************************");
			console.log(chalk.red(Resume_ONE_Arry_NameFirst));
	});
	
}