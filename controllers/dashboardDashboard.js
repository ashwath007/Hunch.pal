const User = require('../models/palUser');
const State = require('../models/states');
const chalk = require('chalk');


exports.dashboardDashboard = (req,res)=> {
	console.log(req.params.token);
	User.findOne({TOKEN:req.params.token},(err,gott)=>{
		if(err){
		   console.log(err);
		   }
		else{
			console.log(chalk.blue(gott));
			console.log(chalk.blue(gott.USER_STATES));
			State.findById(gott.USER_STATES,(err,done)=>{
				if(err){
					console.log(err);
				}
				console.log(done);
				if(done.isSignIn==true && done.isSignOut ==false){
					res.render("home.ejs",{user_name:gott.name,token:gott.TOKEN});
				}
			});

		}
	});
}