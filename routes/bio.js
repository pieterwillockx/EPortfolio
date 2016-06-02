var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('bio', { user : req.user, title: "Bio | Pieter Willockx" });
});

module.exports = router;
