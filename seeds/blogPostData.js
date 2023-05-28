// Pull requires model into play
const { BlogPost } = require('../models');

// Providing basic objects to simulate blog posts
const blogPostData = [
    {
        "title": "God's Puzzle (Kamisama no pazuru)",
        "body_text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "user_id": 9
    }, {
        "title": "Mannequin",
        "body_text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "user_id": 9
    }, {
        "title": "Eyewitness (Janitor, The)",
        "body_text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "user_id": 6
    }, {
        "title": "Boys of Baraka, The",
        "body_text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "user_id": 4
    }, {
        "title": "Feast III: The Happy Finish",
        "body_text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "user_id": 18
    }, {
        "title": "Down to the Sea in Ships",
        "body_text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "user_id": 25
    }, {
        "title": "Ghoulies",
        "body_text": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "user_id": 21
    }, {
        "title": "Seven Years Bad Luck",
        "body_text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "user_id": 8
    }, {
        "title": "We Have a Pope (Habemus Papam)",
        "body_text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "user_id": 7
    }, {
        "title": "The Wedding Ringer",
        "body_text": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "user_id": 23
    }, {
        "title": "Panther",
        "body_text": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "user_id": 4
    }, {
        "title": "Levity",
        "body_text": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "user_id": 22
    }, {
        "title": "Harry + Max",
        "body_text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "user_id": 9
    }, {
        "title": "The Lunchbox",
        "body_text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "user_id": 9
    }, {
        "title": "Smooth Talk",
        "body_text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "user_id": 19
    }, {
        "title": "Higher Ground",
        "body_text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "user_id": 17
    }, {
        "title": "Two Night Stand",
        "body_text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "user_id": 11
    }, {
        "title": "Natural Born Killers",
        "body_text": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "user_id": 14
    }, {
        "title": "Circus of Horrors",
        "body_text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "user_id": 11
    }, {
        "title": "Molly Maguires, The",
        "body_text": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "user_id": 3
    }, {
        "title": "Step Brothers",
        "body_text": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "user_id": 5
    }, {
        "title": "French Connection II",
        "body_text": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "user_id": 25
    }, {
        "title": "Terry Pratchett: Choosing to Die",
        "body_text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "user_id": 23
    }, {
        "title": "Amber Lake ",
        "body_text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "user_id": 5
    }, {
        "title": "Friends of God: A Road Trip with Alexandra Pelosi",
        "body_text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "user_id": 25
    }
];

// Creates the function that will be used when seeding
const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

// Exports the module
module.exports = seedBlogPosts;
