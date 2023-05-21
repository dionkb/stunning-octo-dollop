// Pull requires model into play
const { User } = require('../models');

// Providing basic objects to simulate user data
const userData = [
    {
        username: 'John Smith',
        email: 'jsmith@email.com',
        password: 'Password123',
    },
    {
        username: 'Jane Doe',
        email: 'jdoe@email.com',
        password: 'Secret!3',
    },
    {
        username: 'Stephen Hendry',
        email: 'cuetips@email.com',
        password: 'MaxBreak147',
    },
    {
        username: 'Pablo Chong',
        email: 'pchong@email.com',
        password: 'Nooosooosoo12',
    },
];

// Creates the function that will be used when seeding
const seedUsers = () => User.bulkCreate(userData);

// Exports the module
module.exports = seedUsers; 