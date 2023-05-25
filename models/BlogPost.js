// Calls the necessary packages to run
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Builds new model based on Sequelize 'Model' data
class BlogPost extends Model {}

// Define the attributes of the BlogPost model
BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
        model: 'user',
        key: 'id',
      },
    },
    // comments: {
    //   type: DataTypes.STRING,  -------------> Will this need to exist? Think more on it
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
  }
);

// Allows this data to be imported elsewhere
module.exports = BlogPost;
