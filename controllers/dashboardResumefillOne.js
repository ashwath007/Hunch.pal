const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cookieParser = require('cookie-parser');
const User = require('../models/palUser');
const State = require('../models/states');
const Fillone = require('../models/dashboardResumefillOne');//Hunch_Resume/models/
const chalk = require('chalk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

exports.resumeFillOne = (req,res)=> {
	console.log("One");
	console.log(chalk.blue(req.body));
	const ONE = new Fillone(req.body);
	ONE.save((err,goott)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log(goott);
			console.log(req.cookies.TOKEN);
			User.findOne({TOKEN:req.cookies.TOKEN},(err,done)=>{
					if(err){
						console.log(err);
					}
					console.log(done);
					done.RESUME_ONE.push(goott._id);
					done.RESUME_ONE_DONE.push(1);
					
					done.save((err,hot)=>{
						if(err){
							console.log(err);
						}
						else{
							console.log(hot);
							res.render("dashboardResumefillTwo",{exp:goott.TotalWorkExp,userName:goott.FirstName});
						}
					});
			});
		}
	});
	
	
}