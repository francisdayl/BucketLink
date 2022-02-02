var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  cliente.belongsTo(usuario, { as: "fk_id_Usuario_usuario", foreignKey: "fk_id_Usuario"});
  usuario.hasMany(cliente, { as: "clientes", foreignKey: "fk_id_Usuario"});

  return {
    cliente,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
