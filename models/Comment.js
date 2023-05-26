// Calls the necessary packages to run
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Builds new model based on Sequelize 'Model' data
class Comment extends Model {}

// Define the attributes of the Comment model
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    body_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPost',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

// Allows this data to be imported elsewhere
module.exports = Comment;
