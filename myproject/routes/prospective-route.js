var router = app.Router();

router.get('/', function(req, res) {

	res.render('master');
	
});

module.exports = router;