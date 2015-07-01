var router = app.Router();

router.get('/', function(req, res){
	
	res.render('login');

});

module.exports = router;