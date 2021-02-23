const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const tokenSchema = new mongoose.Schema({
	TOKEN:{
		type:String,
		trim:true,
		required:true
	},
	TOKEN_ID:{
		type:String,
		trim:true,
		required:true
	},
	Users: {
    type: ObjectId,
    ref: "Users"
  }
});


module.exports = mongoose.model("token",tokenSchema);