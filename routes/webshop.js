var express = require('express');
var router = express.Router();
var ShoppingCart = require('../models/shoppingcart.js');
var Item = require('../models/item.js');
var Account = require('../models/account.js');
var itemController = require('../controllers/item.js');
var accountController = require('../controllers/account.js');

//API
router.get('/api/items/', itemController.getItems);
router.get('/api/shoppingcart/get/', accountController.getShoppingCart);
router.post('/api/shoppingcart/post/', accountController.addToShoppingCart);


router.get('/', function(req, res){
	res.render('webshop', { user : req.user, title : 'Webwinkel | Pieter Willockx'});
});

router.get('/cart', function(req, res){
	Account.findById(req.user._id, function(err, user){
		if(err){
			res.send(err);
		} else{
			var shoppingCart = user.shoppingCart;
			var result = [];
			for(var i = 0; i < shoppingCart.length; i++){
				Item.findById(shoppingCart[i], function(err, item){
					if(err){
						throw new Error('Kon item niet vinden.');
					} else{
						result.push(item);
					}
				});
			}
			res.render('shoppingcart', { user : req.user, title : 'Winkelmandje | Pieter Willockx', items : result });
		}
	});
});

module.exports = router;