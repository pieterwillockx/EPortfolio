var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoppingCart = new Schema({
	userId: Schema.ObjectId,
	contents: [Schema.ObjectId]
});

module.exports = mongoose.model('ShoppingCart', ShoppingCart);