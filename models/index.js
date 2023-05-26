// COMPLETE: ?
// Pulls the models from their file locations
const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

// Ascribes a relationship between the user and their blog posts
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
});
BlogPost.belongsTo(User);

// Ascribes a relationship between the user and their comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});
Comment.belongsTo(User);

// Ascribes a relationship between the blog posts and their comment replies
BlogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
});
Comment.belongsTo(BlogPost);

// Exports the module
module.exports = { User, BlogPost, Comment };

