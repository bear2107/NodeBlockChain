module.exports=function(app)
{
	var homeRoute=App.route('homeroute')
	app.get("/",homeRoute.home)
	var last=App.route('last')
	app.get("/last",last.l)

}

