var Account = require('../models/account.js');

exports.addToShoppingCart = function(req, res){
	Account.findById(req.body.userId, function(err, user){
		if(!user){
			res.send('Kon gebruiker niet vinden.');
		}
		else{
			user.shoppingCart.push(req.body.itemId);
			user.modified = new Date();

			user.save(function(err){
				if(err)
					console.log(err);
				else
					console.log('Item met id ' + req.body.itemId + ' toegevoegd aan winkelmand van user.');
			});
		}
	});
};

exports.getShoppingCart = function(req, res){
	Account.findById(req.params.userId, function(err, user){
		if(err){
			res.send(err);
		}
		if(!user){
			res.send('Kon gebruiker niet vinden.');
		} else{
			res.json({ data : user.shoppingCart });
		}
	});
};