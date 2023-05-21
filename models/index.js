// Pulls the models from their file locations
const User = require('./User');
const BlogPost = require('./BlogPost');

// Ascribes a relationship between the two
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
});
BlogPost.belongsTo(User);

// Exports the module
module.exports = { User, BlogPost };

