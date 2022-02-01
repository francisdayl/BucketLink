var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bucket = new Schema({
	'id_Cliente' : String,
	'cantidad_Reportes' : Number,
	'color_Fondo' : String,
	'color_Letra' : String,
	'visitas' : Number,
	'image' : String
});

module.exports = mongoose.model('buckets', bucket);
