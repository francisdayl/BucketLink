var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var animesSchema = new Schema({
	'ID' : String,
	'Title' : String,
	'Image' : String,
	'Synopsis' : String,
	'Type' : String,
	'Source' : String,
	'Score' : String,
	'URL' : String
});

module.exports = mongoose.model('animes', animesSchema);
