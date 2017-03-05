module.exports=function(app)
{
	var homeRoute=App.route('homeroute')
	app.get("/",homeRoute.home)
	

}

