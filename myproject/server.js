//Load EXPRESS module.
var express = require('express');

//Create EXPRESS application handler.
var app = express();

/************************************************
***		Make EXPRESS module globally  		  ***
*** 	available, instead of loading the  	  ***
***		module in extra files when needed. 	  ***
*** 										  ***
***		This modularity enhances performance  ***
*** 	and stability across development. 	  ***
*** 										  ***
***		Standard code practice:               ***
*** 	"DO NOT REPEAT YOURSELF"              ***
*************************************************/

global.app = express;



/**********************************************
*** 	Load HTTP module from NODEJS and  	***
***		create the HTTP SERVER.  			***
***********************************************/

var server = require('http').createServer( app );

//Load SOCKETIO channel for REALTIME Communication.
var socketio = require('socket.io')(server);


//Load the PATH module for specifying string path.
var path = require('path');


app.set( 'view engine' , 'ejs' );

app.set('views', path.join( __dirname + '/public/' ) );

app.set('routes', path.join( __dirname + '/routes/' ) );

//Define the static folder path to work with.
app.use( express.static( __dirname + '/public/' ) );
app.use( express.static( __dirname + '/public/assets/' ) );
app.use( express.static( __dirname + '/public/assets/vendors/' ) );
app.use( express.static( __dirname +  '/node_modules/' ) );


var loginRoute 				= require( app.get('routes') + 'login-route.js');

var prospectiveRoute 		= require( app.get('routes') + 'prospective-route.js');

var pageNotFoundRoute 		= require( app.get('routes') + 'page-not-found-route.js');



/**************************************************************
***	 Defining the Route for individual request from the 	***
***				CLIENT to the SERVER. 						***
***************************************************************/
app.use( '/', loginRoute );

app.use( '/prospective', prospectiveRoute );

app.use( '*', pageNotFoundRoute );





var port = process.env.PORT || 3000;

socketio.on('connection', function( socket ){
	console.log( 'Socket connection successful.' );
});

server.listen( port, function(){
	console.log( 'Running on port: ',port,' visit http://localhost:',port );
});