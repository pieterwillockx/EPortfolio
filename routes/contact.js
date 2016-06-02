var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('contact', { user : req.user, title: "Contact | Pieter Willockx" });
});

module.exports = router;