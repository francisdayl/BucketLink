var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var linksSchema = new Schema({
	'WebSiteURL' : String,
	'WebSiteNombre' : String,
	'idCliente' : String,
	'Imagen' : String,
	'ColorFondo' : String,
	'ColorLetra' : String,
	'Visitas' : Number
});

module.exports = mongoose.model('links', linksSchema);
