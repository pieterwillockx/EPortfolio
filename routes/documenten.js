var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('documenten', { user : req.user, title: "Documenten | Pieter Willockx" });
});

module.exports = router;