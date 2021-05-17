"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init(
    {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        IsEmpty: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        IsEmpty: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        IsEmpty: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        IsEmpty: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        IsEmpty: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        IsEmpty: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        IsEmpty: false,
      },
      inventoryStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        IsEmpty: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        IsEmpty: false,
      },
    },
    {
      sequelize,
      modelName: "Products",
      // tableName: "Company",
    }
  );
  return Products;
};
