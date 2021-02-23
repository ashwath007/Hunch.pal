const User    =  require('../models/palUser');
const State    =  require('../models/states');
const fillOne = require('../models/dashboardResumefillOne');//Hunch_Resume/models/dashboardResumefillOne
const fillTwo = require('../models/dashboardResumefillTwo');
const fillThree = require('../models/dashboardResumefillThree');




exports.dashProfile = (req,res) => {
	
	console.log("***"+req.cookies.TOKEN);
	console.log("req.cookies.TOKEN");
	User.findOne({TOKEN:req.cookies.TOKEN},(err,donee)=>{
		if(err){
			console.log(err);
		}
		console.log(donee);
		res.render("profile.ejs",{token:req.cookies.TOKEN});
	})
}