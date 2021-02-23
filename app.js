const express = require('express');
const app = express();
var formidable = require('formidable');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cors = require('cors');
const fs = require('fs');
const Path = require('path');
const { v4: uuidv4 } = require('uuid');//
const mongoose = require('mongoose');
var fileExtension = require('file-extension');
var dir = require('node-dir');
const chalk = require('chalk');
var randomize = require('randomatic');
var cookieParser = require('cookie-parser');
//FILE TYPE
const FileType = require('file-type');
var detect = require('detect-file-type'); //FILE TYPE
require('dotenv').config();

var mammoth = require("mammoth");
const shortid = require('shortid');
var session = require('express-session')
var randtoken = require('rand-token');

// const port = 3000 || process.env.PORT;

const path = require('path');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(cookieParser());


//ALL ROUTES
const createRoutes      = require('./routes/create');
const createAccount     = require('./routes/createAccount');
const emailCode         = require('./routes/emailverify');
const login             = require('./routes/login');
const signout           = require('./routes/signout');
const loginCode         = require('./routes/loginCode');

//HOME PAGE ROUTES
const home              = require('./routes/home');
const upload            = require('./routes/rupload');
// 2.Resume
const dashboardCreateResume = require('./routes/createresume');
const dashboardCreateResumeFillOne = require('./routes/dashboardResumefillOne');//Hunch_Resume/
const deshboardCreateResumeFillTwo = require('./routes/dashboardResumefillTwo');
const dashboardCreateResumeFillThree = require('./routes/dashboardResumefillThree');
//2.1Resume PG
const dashboardCreateResumeFillThreePG = require('./routes/dashboardResumefillThreePG');
//1.Dashboard
const dashboardDashboard	= require('./routes/dashboardDashboard');
//See resume
const seeMyResume           = require('./routes/seeMyResume');//Hunch_Resume/routes/seeMyResume.js
//User uploads the resume router
//const uploadMyResume        = require('./routes/resumeUpload');  //Hunch_Resume/routes/resumeUpload
//Profile Page 
const dashboardDashboardProfile = require('./routes/profile');//Hunch_Resume/routes/profile.js
//Resume Review
const resumereview           = require('./routes/reviewresume');//Hunch_Resume/routes/reviewresume
//My Job 
const myJob = require('./routes/myjob');

//User database
const User = require('./models/palUser');

//DATABASE
mongoose.connect("mongodb+srv://hunchpal:hunchpal@cluster0.pqdz1.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log(chalk.green.bold("DONE"));
});
//




app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
	  secure: true,
	  httpOnly:true,  
  }
}))

app.get("/",(req,res)=>{
	
	//CHECKING IF HE/SHE IS NEW OR NOT
	
	const USER_ID = uuidv4();
	const G_ID = shortid.generate();
	res.cookie("USER_ID",USER_ID);
	res.cookie("G_ID",G_ID);
	res.cookie("EVer",0);
	res.cookie("PVer",0);
	res.cookie("P_complete",0);
	res.cookie("Ecode","");
	if((req.cookies.TOKEN == null) && (req.cookies.TOKEN_ID == null)){
	
	res.cookie("TOKEN","");
	res.cookie("TOKEN_ID","");
		
	}	
		console.log(chalk.bold.yellow(req.cookies.USER_ID+"__"+req.cookies.G_ID+"__"+req.cookies.EVer+"__"+req.cookies.PVer+"__"+req.cookies.P_complete+"__"+req.cookies.Ecode+"__"+req.cookies.TOKEN+"__"+req.cookies.TOKEN_ID));
		res.render("land");
	
	
});



//ACCOUNT CREATION AND LOGIN BLOCK****
app.use("/hunch",createRoutes);
app.use("/hunch/pal",createAccount);
app.use("/hunch/pal",emailCode);
app.use("/hunch/pal",login);
app.use("/hunch/pal",signout);
app.use("/hunch/pal",loginCode);
//************************************

//USER HOME***************************
app.use("/hunch/pal",home);
				//RESUME
				//-->>>UPLOAD
				app.use("/hunch/pal",upload);

														// HOME
														// 1.DASHBOARD
														// 2.RESUME
														// 3.PROFILE
														// 4.SETTINGS
														// 5.SIGN OUT
//1.Dashboard
app.use("/hunch/pal",dashboardDashboard);
//2.Resume
app.use("/hunch/pal",dashboardCreateResume);///<%=token%>/creatersume

//Resume Filling 
app.use("/hunch/pal/resume",dashboardCreateResumeFillOne);
app.use("/hunch/pal/resume",deshboardCreateResumeFillTwo);
app.use("/hunch/pal/resume",dashboardCreateResumeFillThree);
//PG
app.use("/hunch/pal/resume",dashboardCreateResumeFillThreePG);
//************************************
app.use("/hunch/pal",seeMyResume);

//Resume resumeUpload
// app.use("/hunch/pal",uploadMyResume);
//Profile Page
app.use("/hunch/pal",dashboardDashboardProfile);
//User Reviews his/her resume
app.use("/hunch/pal",resumereview);
//My job routes
app.use("/hunch/pal",myJob);

//
app.get("/login",(req,res)=>{
	res.render("loginpage");
});



app.get("/upload",(req,res)=>{
	res.render("home",{user_name:"User name"});
});

//pricing
app.get("/hunch/pal/pricing",(req,res)=>{
	res.render("pricing.ejs");
});



//Here we are uploading the file 

app.post("/hunch/pal/resume/:token/uploadresume/file",(req,res)=>{///hunch/pal/resume/7957be68-7c92-413b-bb6c-fc81876c9dcdCYYGX3NxU/uploadresume/file

	console.log(chalk.red(req.params.token));
	console.log(req.cookies.TOKEN);
	console.log(req.params.token);

	
	//Here we are getting the user data and merge his/her name with filename
	User.findOne({TOKEN:req.cookies.TOKEN},(errors,gotUser)=>{
		if(errors){
			res.send("Error can't find the user");
		}
		else{
			console.log(chalk.bold.yellow(gotUser));
			const EmailHo = gotUser.email.slice(0,4);
			const FileEName = gotUser.name+EmailHo.replace(/ /g, "");
			console.log(chalk.red("----> "+gotUser.name+gotUser.email.slice(0,4)));
				const USER_ID = randomize('Aa', 8);
				var form = new formidable.IncomingForm();
			
			form.parse(req, (error, fields, files)=>{
		console.log(files);
		if(files.size>1048560){
		   res.render("admin",{msg:"Kindly Upload File less than 10MB ",branch:""});
		   }
		else{
			
				
		}
	});

    fs.mkdir('public/uploads/userresume/' + USER_ID, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Directory Created');
        }
    });
	
	
	
    form.on('fileBegin', function(name, file) {
	try{
		console.log(chalk.green.bold(file.type));
        var newfinleName = file.name.replace(/ /g, "");
        file.path = __dirname + '/public/uploads/userresume/'  + USER_ID + "/" + newfinleName;//Hunch_Resume/public/uploads/userresume
        console.log(__dirname);
        console.log(file.path);

        console.log(USER_ID);
	}
		catch(exce){
			res.send("Error Please try again");
		
		}

    });

//dd
   
      form.on('end', () => {
		  setTimeout(()=>{
			 dir.files('public/uploads/userresume/' + USER_ID, 'file', function(err, content) {
                if (err) throw err;
                content.forEach((files) => {
                    console.log('files : ', files); // get content of filesconm
					console.log(chalk.yellow(files));
					console.log(chalk.yellow(files.slice(7)));
						console.log(chalk.yellow(files.slice(12)));
					
					//FILE TYPE 
								console.log(chalk.red(path.extname(files.slice(12))));
								const File_Type_detect = path.extname(files.slice(12));
					//			
								const GG = files.slice(7);
					console.log(chalk.bold.red(GG));
								//let's put the path in palUser badabase
								gotUser.RESUME_UPLOAD_FILE.push(GG);
								const sGG = GG.slice(28);
								gotUser.RESUME_FILE_NAME.push(sGG);
								gotUser.save((eroo,saved)=>{
									if(eroo){
									   console.log(eroo);
									   }
									else{
										console.log(saved);
										res.send("Done uploading");
									}
								});
								
							
			
				})

            },
            function(err, files) {
                if (err) throw err;
                console.log('finished reading files:'); // get filepath 
			
			
            });
			 
		 },4300)
        
    });
		}
	});
	
    

});







app.listen(process.env.PORT || 3000,()=>{
	console.log(chalk.bold.red("Server is started.."));
});
