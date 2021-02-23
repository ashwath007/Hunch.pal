
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cookieParser = require('cookie-parser');
const User = require('../models/palUser');
const State = require('../models/states');
const Fillthree = require('../models/dashboardResumefillThree');//Hunch_Resume/models/

const chalk = require('chalk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



exports.seeMyResume = (req,res) => {
	console.log(chalk.red(req.cookies.TOKEN));
	console.log(chalk.red(req.params.token));
	User.findOne({TOKEN:req.params.token},(err,toktok)=>{
		if(err){
			
		}
		else{
			console.log(toktok);
			//All the information to display to resume
			res.render("seeMyResume.ejs");
		}
	});
	
}