var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _link = require("./link");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var link = _link(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  usuario.belongsTo(cliente, { as: "fk_id_Cliente_cliente", foreignKey: "fk_id_Cliente"});
  cliente.hasMany(usuario, { as: "usuarios", foreignKey: "fk_id_Cliente"});
  link.belongsTo(usuario, { as: "fk_id_Usuario_usuario", foreignKey: "fk_id_Usuario"});
  usuario.hasMany(link, { as: "links", foreignKey: "fk_id_Usuario"});

  return {
    cliente,
    link,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
