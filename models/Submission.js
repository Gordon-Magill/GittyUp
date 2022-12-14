const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Submission extends Model {}

Submission.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT("long"),
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    comments_count:{
      type: DataTypes.INTEGER,
      defaultValue:0,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Submission",
  }
);

module.exports = Submission;
