var env=process.env.NODE_ENV || 'development'
,packageJson=require('../package.json')
,path=require('path')
,express=require('express')
,bodyParser=require('body-parser')
,static=require('serve-static')
console.log("Loading app in"+env+"mode")

global.App={
app:express()
,port:process.env.PORT||3000
,version:packageJson.version
,root:path.join(__dirname,'..')
,appPath:function(path)
{
return this.root + '/'+path
}
,require:function(path)
{
	return require(this.appPath(path))
}
,env:env
,start:function()
{
	if(!this.started)
	{
		this.started=true
		this.app.listen(this.port)
      console.log("Running App Version " + App.version + " on port " + App.port + " in " + App.env + " mode")
	}
}
,route:function(path)
{
	return this.require('app/routes/'+path)
}










}
App.app.use(bodyParser.urlencoded({
    extended: true
}));
App.app.use(bodyParser.json());
App.app.use(bodyParser.text());
App.app.use(bodyParser.raw());
App.app.use(static(App.appPath('public')))
App.app.set('views',App.appPath('app/views'))
App.app.set('view engine','jade');
App.app.set('view-options',{pretty:env=='development'});
//App.app.use(App.middleware('setFlash'))
App.require("config/routes")(App.app)