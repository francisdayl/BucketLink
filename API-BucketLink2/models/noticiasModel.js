var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var noticiasSchema = new Schema({
	'id_noticias' : String,
	'titulo' : String,
	'descripcion' : String,
	'imagen' : String
});

module.exports = mongoose.model('noticias', noticiasSchema);
