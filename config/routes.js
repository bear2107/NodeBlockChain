module.exports=function(app)
{
	var homeRoute=App.route('homeroute')
	app.get("/",homeRoute.home)
	var getstate=App.route('getstate');
	//app.get("/state/:var",getstate.state);
	var transaction=App.route('transact')
	app.get('/transaction',transaction.trans);

}

