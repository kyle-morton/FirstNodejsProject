// get an instance of the router
var basicRouter = express.Router();

basicRouter.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});