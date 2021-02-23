

exports.myJob = (req,res) => {
	console.log(req.cookies.TOKEN);
	res.render("myjob.ejs");
}