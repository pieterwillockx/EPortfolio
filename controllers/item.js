var Item = require('../models/item.js');

exports.getItems = function(req, res){
	Item.find(function (err, items){
		if (err){
			res.send(err);
		} else {
			res.json({ data : items });
		}
	});
};

exports.getItemById = function(req, res){
	Item.find({ _id : req.params.id }, function(err, items){
		if(err){
			res.send(err);
		} else {
			res.json({ data : items[0] });
		}
	});
};

