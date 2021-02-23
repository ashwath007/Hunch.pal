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



exports.resumeFillthree = (req,	res) => {
	console.log("Good work");
	console.log(req.body);
	newFillthree = new Fillthree(req.body);
	newFillthree.save((err,saved)=>{
		if(err){													//Here we are storing the Highest Qualification and based on 																			this we are we are rendering the other qualifications 
			console.log(err);
		}
		else{
			console.log(saved);
			
			if(saved.HighestQualification == "Masters/Post Graduation"){
				
				console.log("User is doing "+saved.HighestQualification);
				User.findOne({TOKEN:req.cookies.TOKEN},(err,founded)=>{
				if(err){
					console.log(err);
				}
				else{
					console.log(founded);
					founded.RESUME_THREE.push(saved._id);
					founded.RESUME_THREE_DONE.push(1);
					founded.RESUME_THREE_HIGHER_EDU_STAGE.push("Masters/Post Graduation");
	// 					<option selected>Graduation/Diploma</option>
	// <option selected>12th</option>
	// <option selected>10th</option>
	// <option selected>Below 10th</option>
					founded.save((err,donedone)=>{
						if(err){
							console.log(err);
						}
						else{
							console.log(donedone);
							res.render("dashboardResumefillThreePG.ejs",{TOKEN:req.cookies.TOKEN});
						}
					});
				
			}
				});
			}
			else if(saved.HighestQualification == "Graduation/Diploma"){
					console.log("User is doing "+saved.HighestQualification);
				
				User.findOne({TOKEN:req.cookies.TOKEN},(err,founded)=>{
				if(err){
					console.log(err);
				}
				else{
					console.log(founded);
					founded.RESUME_THREE.push(saved._id);
					founded.RESUME_THREE_DONE.push(1);
					founded.RESUME_THREE_HIGHER_EDU_STAGE.push("Graduation/Diploma");
	// 					<option selected>Graduation/Diploma</option>
	// <option selected>12th</option>
	// <option selected>10th</option>
	// <option selected>Below 10th</option>
					founded.save((err,donedone)=>{
						if(err){
							console.log(err);
						}
						else{
							console.log(donedone);
							res.render("dashboardResumefillThreeUG.ejs",{TOKEN:req.cookies.TOKEN});
						}
					});
				
				
					}
				});
			}
			else if(saved.HighestQualification == "12th"){
						console.log("User is doing "+saved.HighestQualification);
					}
			
		}
	});
	
}