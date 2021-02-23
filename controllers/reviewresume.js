const User    =  require('../models/palUser');
const State    =  require('../models/states');
const fillOne = require('../models/dashboardResumefillOne');//Hunch_Resume/models/dashboardResumefillOne
const fillTwo = require('../models/dashboardResumefillTwo');
const fillThree = require('../models/dashboardResumefillThree');

const chalk   = require('chalk');

const open = require('open');


exports.reviewResume = (req,res) => {
	console.log(req.params.ind);
	console.log(req.params.token);///hunch/pal/user/7957be68-7c92-413b-bb6c-fc81876c9dcdCYYGX3NxU/8 New
	console.log(req.cookies.TOKEN);
	console.log(req.cookies.TOKEN_ID);
	User.findOne({TOKEN:req.cookies.TOKEN},(err,gotuser)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log(gotuser);
			console.log(chalk.blue.underline.bold(gotuser.RESUME_UPLOAD_FILE));
			console.log(chalk.green.underline.bold(gotuser.RESUME_UPLOAD_FILE[req.params.ind]));
			
			res.render("reviewresume.ejs",{I:req.params.ind,data:gotuser.updatedAt,file:gotuser.RESUME_FILE_NAME[req.params.ind]});
		}
	});

	// console.log(req.params.pathindex); //0 - 8
	//Here we are opening a new page with his/her resume
	//and extract keyword

	//href="/hunch/pal/user/<%=token%>/uploadresumes/<%=code%>/<%=I%>/review"
	
}