const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Submission extends Model {
  upvote() {
    console.log("\n\n\n Model upvote instance method called \n\n\n")
    console.log('Current point value:', this.points)
    
    this.points = this.points+1
    console.log('New point value:', this.points)
  }

  downvote() {
    this.points--
  }
  
}

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
      type: DataTypes.TEXT('long'),
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Submission',
  }
);

module.exports = Submission;
