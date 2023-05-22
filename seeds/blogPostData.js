// COMPLETE:
// Pull requires model into play
const { BlogPost } = require('../models');

// Providing basic objects to simulate blog posts
const blogPostData = [
    {
        title: 'Response to someone',
        author: 'John Smith',
        post_date: 'April 20, 2021 07:00:00',
        body_text: 'Im responding!',
        user_id: '1',
    },
    {
        title: 'I hate blogs',
        author: 'Jane Doe',
        post_date: 'June 22, 2021 09:00:00',
        body_text: 'Blogs = Suck',
        user_id: '2',
    },
    {
        title: 'Me too!',
        author: 'Stephen Hendry',
        post_date: 'September 23, 2021 08:30:00',
        body_text: 'Also, me three!',
        user_id: '3',
    },
    {
        title: 'What are we doing here?',
        author: 'Pablo Chong',
        post_date: 'December 22, 2020 11:00:00',
        body_text: 'Why do I care?',
        user_id: '4',
    },
];

// Creates the function that will be used when seeding
const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

// Exports the module
module.exports = seedBlogPosts;
