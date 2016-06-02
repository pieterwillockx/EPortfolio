var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('ervaring', { user : req.user, title: "Ervaring | Pieter Willockx" });
});

module.exports = router;