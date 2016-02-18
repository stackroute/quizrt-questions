// var express = require('express');
// var path = require('path');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index');
//   res.sendFile(path.join(__dirname, '../views/index.html'));
// });
//
// module.exports = router;
var express = require('express');
var router = express.Router();
var path = require('path');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	/* GET login page. */
	router.get('/', function(req, res) {
		// console.log(pr);
			// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });

	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/',
		failureFlash : true
	}));

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/signup',
		failureFlash : true
	}));

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		// res.render('home', { user: req.user });
    res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}
