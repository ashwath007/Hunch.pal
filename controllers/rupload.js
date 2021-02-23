
const User    =  require('../models/palUser');
const State    =  require('../models/states');
const fillOne = require('../models/dashboardResumefillOne');//Hunch_Resume/models/dashboardResumefillOne
const fillTwo = require('../models/dashboardResumefillTwo');
const fillThree = require('../models/dashboardResumefillThree');



exports.upload  =  (req,res)=>{
	console.log(req.params.token);
	User.findOne({TOKEN:req.params.token},(err,gots)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log(gots);
			//Here User is going to upload resume 
			res.render("userResumeUpload.ejs",{token:req.params.token});//Hunch_Resume/views/
		}
	});
}