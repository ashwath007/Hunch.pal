const nodemailer = require("nodemailer");
require('dotenv').config();


const Lverify = (to,subject,code,tid) => {

  let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "hunch.inc.india@gmail.com", 
      pass: "hunchhunch", 
    },
  });


let mailOption = {
	from: process.env.EMAIL, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: "Hunch!!!", // plain text body
    html: "<h1>Login by entering </h1><br><br><h3>This code : "+ code + " </h3>", // html body
}
  // send mail with defined transport object
 transporter.sendMail(mailOption,(err,done)=>{
	  if(err){
		  console.log(err);
	  }
	 console.log("Email sent to ");
	 console.log(done);
  });
}


module.exports = {
	Lverify
};