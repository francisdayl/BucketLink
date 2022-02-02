const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id_Cliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CantidadReportes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Fondo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fk_id_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id_Usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_Cliente" },
        ]
      },
      {
        name: "fk_id_Usuario",
        using: "BTREE",
        fields: [
          { name: "fk_id_Usuario" },
        ]
      },
    ]
  });
};
