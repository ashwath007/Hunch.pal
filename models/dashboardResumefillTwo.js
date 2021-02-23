const mongoose = require('mongoose');

const resumeFillTwoSchema = new mongoose.Schema({
	
	Current_Designation:{
		type:String,
		trim:true
	},
	Current_Company: {
		type:String
	},
	Annual_Salary: {
		type:String
	},
	Working_since: {
		type:String
	},
	Month:{
		type:String
	},
		Present:{
		type:String
	},
		Current_Location:{
		type:String
	},
		inside:{
				type:String

	},
		outside:{
		type:String
	},
		Duration:{
		type:String
	},
		Industry:{
		type:String
	},
	Functional_Area:{
		type:String
	},
	Role:{
		type:String
	},
	
	
	
});


module.exports = mongoose.model("Filltwo",resumeFillTwoSchema);
