const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cookieParser = require('cookie-parser');
const User = require('../models/palUser');
const State = require('../models/states');
const Filltwo = require('../models/dashboardResumefillTwo');//Hunch_Resume/models/
const chalk = require('chalk');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



exports.resumeFillTwo = (req,res)=> {
	
	console.log("Yes");
	console.log(req.body);
	const TWO = new Filltwo(req.body);
	TWO.save((err,gotttt)=>{
		if(err){
			console.log(err);
		}
		console.log(chalk.red(gotttt));
		User.findOne({TOKEN:req.cookies.TOKEN},(err,fone)=>{
			if(err){
				console.log(err);
			}
			console.log(fone);
			fone.RESUME_TWO.push(gotttt._id);
			fone.RESUME_TWO_DONE.push(1);
			fone.save((e,D)=>{
				if(e){
									console.log(e);
				}
				console.log(D);
				res.render("dashboardResumefillThree.ejs");
			});
		});
	});
	
}