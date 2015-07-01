var router = app.Router();

router.get('/', function( req, res ){

	var template = '<h2>Bad Route</h2>';

	template += '<p>The requested url "'+ req.baseUrl +'" cannot be located on our server.</p>';

	template += '<p>Please ensure you type the right request at the url.</p>';

	template += '<p>OR find it at <a href="https://www.google.com.ng/search?q='+req.baseUrl+'">Google</a>.</p>';

	res.send( template );

});

module.exports = router;
