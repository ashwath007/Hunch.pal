const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

	
			
				
const resumeFillOneSchema = new mongoose.Schema({
	FirstName: {
		type:String,
		require:true,
		trim:true,
		maxlength: 32
	},
	LastName: {
		type:String,
		trim:true,
		maxlength:23
	},
	Email: {
		type:String,
		require:true
	},
	Phone: {
		type:String,
		require:true,
		trim:true
	},
	TotalWorkExp: {
		type:String
	}
},{timestamps: true});


module.exports = mongoose.model("Fillone",resumeFillOneSchema);
