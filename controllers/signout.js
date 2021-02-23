const State = require('../models/states');
const User = require('../models/palUser');







exports.signout = (req,res) => {
	const STATE = new State();
	console.log(req.cookies.TOKEN);
	console.log(req.cookies.TOKEN_ID);
	
	User.findOne({TOKEN:req.cookies.TOKEN},function(err,donee){
		if(err){
			console.log(err);
		}
		else{
			console.log(donee);
			STATE.isSignIn  = false; 
			STATE.isSignOut = true;
			STATE.save((err,done)=>{
				donee.USER_STATES = done._id;
				donee.save((e,r)=>{
					if(e){
						console.log(e);
					}
					else{
								res.cookie("TOKEN",'');
								res.cookie("TOKEN_ID",'');
								res.redirect("/");
					}
				});
			});

		}
	});
	
	

}