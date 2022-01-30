const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('link', {
    link_Url: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    fk_id_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id_Usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_Url" },
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
