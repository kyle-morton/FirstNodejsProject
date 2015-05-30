//Method 2 w/ Express

// load the express package and create our app
var express = require('express'),
 app = express();
var path = require('path');

// defining root route! send back html 
//if instead of '/' we used '/app' then the route
// would be localhost:1337/app/
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// start the server (express app listens on port 1337)
app.listen(1337);
console.log('1337 is the magic port!');


//add routes for admin section!!!
/*
*  1) create inst of express.Router()
*  2) assign routes to it
*  3) add the new routes to overall application
*/

// create routes for the admin section

// get an instance of the router
var adminRouter = express.Router();

adminRouter.use(function(req, res, next) {
	console.log(req.method, req.url);

	//continue on and go to route
	next();

});


// admin main page. the dashboard (http://localhost:1337/adm
adminRouter.get('/', function(req, res) {
	res.send('I am the dashboard!');
});

// users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
	res.send('I show all the users!');
});

// route with parameters 
//(http://localhost:1337/admin/users/:name)
adminRouter.get('/users/:name', function(req, res) {
	res.send('hello ' + req.params.name + '!');
});


//Middleware validation on param :name


// route middleware to validate :name
adminRouter.param('name', function(req, res, next, name) {
	// do validation on name here
	// blah blah validation
	// log something so we know its working
	console.log('doing name validations on ' + name);
	// once validation is done save the new item in the req
	req.name = name;
	// go to the next thing
	next();
});

// route with parameters (http://localhost:1337/admin/hello/:name)
adminRouter.get('/hello/:name', function(req, res) {
	res.send('hello ' + req.name + '!');
});


// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
	res.send('I show all the posts!');
});

//Apply the routes to our application
//Access localhost:1337/admin/....
app.use('/admin', adminRouter);

//Showing usage of app.route()

app.route('/login')

	// show the form (GET http://localhost:1337/login)
	.get(function(req, res) {
		res.send('this is the login form');
	})
	// process the form (POST http://localhost:1337/login)
	.post(function(req, res) {
		console.log('processing');
		res.send('processing the login form!');
	});
