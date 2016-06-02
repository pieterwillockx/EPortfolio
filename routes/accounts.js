var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account.js');

//GET register view
router.get('/register', function(req, res) {
    res.render('register', { });
});

//CREATE account
router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
        	console.log("We had an error... " + err);
            return res.render('register', { info: "Deze gebruikersnaam bestaat al. Kies een andere." });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

//POST login details => Eigenlijk GET account, maar via passport
router.post('/login', function(req, res) {
	console.log("Attempting to log in... ");

	passport.authenticate('local')(req, res, function () {
		res.redirect('/');
	});
});

//UPDATE account details

//log account uit
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
