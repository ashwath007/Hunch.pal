const User = require('../models/palUser');
const UserCode = require('../models/palUser');

const { check, validationResult } = require("express-validator");
const {Lverify} = require('../email/lverify');
const chalk = require('chalk');
var rn = require('random-number');


var options = {
  min:  -1000
, max:  1000
, integer: true
}

exports.login = (req,res) => {
	// const errors = validationResult(req);
	
	// if(!errors.isEmpty()){
	// 	res.send(errors);
	// }
	console.log(chalk.bold.blue(req.body.lemail));
	try{
	User.findOne({email:req.body.lemail},(err,gott)=>{
		if(err){
			console.log(err);
			//IF DID'T FIND HE/SHE EMAIL , WE NEED TO REDIRECT THEM TO CREATE PAGE
			
		}
		console.log(chalk.red(gott));
		if(gott==null){
					res.redirect("/hunch/create");

		}
		else{
		// res.send("verification page");
						const LOGIN     = rn(options);
						console.log(chalk.yellow(LOGIN));
						
						// UserCode.LOGIN_CODE = LOGIN;
								res.cookie("LOGIN_CODE",LOGIN,{ maxAge: 1 * 60 * 60 * 1000, httpOnly: true });
								Lverify(gott.email,"Hunch.pal Login",LOGIN,gott.USER_ID);
								res.render("loginverification.ejs",{useremail:gott.email});
				}
		});
	}
	catch(ex){
		console.log(ex);
		res.redirect("/hunch/create");
	}
}