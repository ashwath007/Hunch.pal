const mongoose    =  require('mongoose');





//STATE MANAGEMENT SCHEMA
const stateSchema = new mongoose.Schema({
	isSignIn : {
		type:Boolean
	},
	isSignOut: {
		type:Boolean
	}
});


module.exports    = mongoose.model("State",stateSchema);