var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bucketsSchema = new Schema({
	'WebSiteURL' : String,
	'UserName' : String,
	'FechaVisita' : String
});

module.exports = mongoose.model('buckets', bucketsSchema);
