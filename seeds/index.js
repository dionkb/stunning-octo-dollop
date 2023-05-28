// Calling config for login to seqeulize via .env file
const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBlogPosts = require('./blogPostData');
const seedComments = require('./commentData');

// Code to run various seed files to seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedBlogPosts();
  await seedComments();

  process.exit(0);
};

// Initializing seeding
seedAll();
