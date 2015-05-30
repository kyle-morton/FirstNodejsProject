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

// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
	res.send('I show all the posts!');
});