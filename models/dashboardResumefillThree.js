const mongoose = require('mongoose');



const resumeFillThree = new mongoose.Schema({
	HighestQualification: {
			type:String,
			trim:true
	},
	Course: {
		type:String,
		trim:true
	},
	Specialization: {
		type: String,
		trim:true
	},
	University: {
		type: String,
		trim:true
	},
	CourseType:{
		type:String,
		trim:true
	},
	PassingYear: {
		type:String,
		trim:true
	},
	Medium: {
		type:String
		},
	Percentage:{
		type:String	
	},
	
	
	//Secound Highest Qualification
	SecoundHighestQualification: {
			type:String,
			trim:true
	},
	SecoundCourse: {
		type:String,
		trim:true
	},
	SecoundSpecialization: {
		type: String,
		trim:true
	},
	SecoundUniversity: {
		type: String,
		trim:true
	},
	SecoundCourseType:{
		type:String,
		trim:true
	},
	SecoundPassingYear: {
		type:String,
		trim:true
	},
	SecoundMedium: {
		type:String
		},
	SecoundPercentage:{
		type:String	
	},
	
	
	ThirdHighestQualification: {
			type:String,
			trim:true
	},
	ThirdCourse: {
		type:String,
		trim:true
	},
	ThirdSpecialization: {
		type: String,
		trim:true
	},
	ThirdUniversity: {
		type: String,
		trim:true
	},
	ThirdCourseType:{
		type:String,
		trim:true
	},
	ThirdPassingYear: {
		type:String,
		trim:true
	},
	ThirdMedium: {
		type:String
		},
	ThirdPercentage:{
		type:String	
	},
	
	
	FourthHighestQualification: {
			type:String,
			trim:true
	},
	FourthCourse: {
		type:String,
		trim:true
	},
	FourthSpecialization: {
		type: String,
		trim:true
	},
	FourthUniversity: {
		type: String,
		trim:true
	},
	FourthCourseType:{
		type:String,
		trim:true
	},
	FourthPassingYear: {
		type:String,
		trim:true
	},
	FourthMedium: {
		type:String
		},
	FourthPercentage:{
		type:String	
	},
},{ timestamps: true} );


module.exports = mongoose.model("Fillthree",resumeFillThree);