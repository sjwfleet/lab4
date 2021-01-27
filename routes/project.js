exports.viewProject = function(req, res) {
	
	var name = req.params.name;
	console.log("The project name is: " + name);
	// Controller
	res.render("project", {
		"projectName": name
	});
};