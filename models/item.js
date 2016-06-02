var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
	name : String,
	price : Number
});

module.exports = mongoose.model('Item', Item);