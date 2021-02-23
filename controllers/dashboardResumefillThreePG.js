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



exports.FillPG = (req,res)=> {
	THREE_FULL = new Fillthree(req.body);
	console.log(req.params.token);
	console.log(req.body);
	THREE_FULL.save((E,D)=>{
		if(E){
			console.log(E);
		}
		else{
			console.log(D);
			User.findOne({TOKEN:req.params.token},(EE,DD)=>{
				
				if(EE){
								console.log(EE);

				}
				else{
								console.log(DD);
					DD.RESUME_THREE_PHASE_TWO.push(D._id);
					DD.RESUME_COMPLETED.push(1);
					DD.RESUME_THREE_PHASE_TWO_DONE.push(1);
					DD.save((EEE,DDD)=>{
						if(EEE){
							console.log(EEE);
							
						}
						else{
							console.log(DDD);
							//Resume Templates
							//we will redirect to Resume page with card list 
							res.redirect("/hunch/pal/user/"+req.cookies.TOKEN+"/resume");
						}
	
			});
	
}
		
			});
		}
		
			});
}