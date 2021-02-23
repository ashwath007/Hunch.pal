const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const palUserSchema = new mongoose.Schema({
	
	email:{
		type:String,
		require:true,
		trim:true,
		unique: true
	},
	name:{
		type:String,
		require:true,
		trim:true

	},
	USER_ID: {
		type:String,
		trim:true,
		 unique: true
	},
	G_ID: {
		type:String,
		trim:true,
		 unique: true
	},
	Everifyed:{
		type:Boolean
	},
	ResumeStatus:{
		type:String,
		trim:true
	},
	Ecode:{
		type:String,
		trim:true
	},
	TOKEN:{
		type:String,
		trim:true,

	},
	TOKEN_ID:{
		type:String,
		trim:true,
		
	},
	LOGIN_CODE: {
		type:String,
		trim:true
	},
	USER_STATES: {
	 	type: ObjectId,
      	ref: "State"
	},
	RESUME_ONE: {
		type: [ObjectId],
		ref: "Fillone"
	},
	RESUME_ONE_DONE: {
		type:[Boolean]
	},
	RESUME_TWO: {
		type: [ObjectId],
		ref: "Filltwo"
	},
	RESUME_TWO_DONE:{ 
		type:[Boolean]
	},
	RESUME_THREE: {
		type: [ObjectId],
		ref: "Fillthree"
	},
	RESUME_THREE_HIGHER_EDU_STAGE:{
		type:[String]	
	},
	RESUME_THREE_DONE: {
		type:[Boolean]
	},
	RESUME_THREE_PHASE_TWO: {
		type: [ObjectId],
		ref: "Fillthree"
	},
	RESUME_THREE_PHASE_TWO_DONE:{
			type:[Boolean]
	},
	RESUME_COMPLETED: {
		type:[Boolean]
	},
		RESUME_THREE_PHASE_THREE: {
		type: [ObjectId],
		ref: "Fillthree"
	},
	//Resume Upload Array
	RESUME_UPLOAD_FILE: {
		type: [String]
	},
	RESUME_FILE_NAME: {
		type: [String]
	}
	
}, { timestamps: true });

const Users = mongoose.model("User",palUserSchema);





module.exports = Users;