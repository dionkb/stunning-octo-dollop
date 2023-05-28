// Pull required model into play
const { Comment } = require('../models');

// Providing basic objects to simulate user data
const commentData = [
    {
        "body_text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "user_id": 6,
        "blogpost_id": 7
    }, {
        "body_text": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "user_id": 20,
        "blogpost_id": 25
    }, {
        "body_text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "user_id": 19,
        "blogpost_id": 14
    }, {
        "body_text": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "user_id": 9,
        "blogpost_id": 24
    }, {
        "body_text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "user_id": 5,
        "blogpost_id": 8
    }, {
        "body_text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "user_id": 9,
        "blogpost_id": 16
    }, {
        "body_text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "user_id": 1,
        "blogpost_id": 18
    }, {
        "body_text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "user_id": 15,
        "blogpost_id": 1
    }, {
        "body_text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "user_id": 14,
        "blogpost_id": 16
    }, {
        "body_text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "user_id": 21,
        "blogpost_id": 19
    }, {
        "body_text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "user_id": 23,
        "blogpost_id": 9
    }, {
        "body_text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "user_id": 7,
        "blogpost_id": 4
    }, {
        "body_text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "user_id": 23,
        "blogpost_id": 24
    }, {
        "body_text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "user_id": 12,
        "blogpost_id": 10
    }, {
        "body_text": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "user_id": 5,
        "blogpost_id": 16
    }, {
        "body_text": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "user_id": 8,
        "blogpost_id": 4
    }, {
        "body_text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "user_id": 19,
        "blogpost_id": 3
    }, {
        "body_text": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "user_id": 19,
        "blogpost_id": 21
    }, {
        "body_text": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "user_id": 13,
        "blogpost_id": 19
    }, {
        "body_text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "user_id": 17,
        "blogpost_id": 25
    }, {
        "body_text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "user_id": 25,
        "blogpost_id": 13
    }, {
        "body_text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "user_id": 12,
        "blogpost_id": 17
    }, {
        "body_text": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "user_id": 8,
        "blogpost_id": 5
    }, {
        "body_text": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "user_id": 4,
        "blogpost_id": 14
    }, {
        "body_text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "user_id": 19,
        "blogpost_id": 24
    }
];

// Creates the function that will be used when seeding
const seedComments = () => Comment.bulkCreate(commentData);

// Exports the module
module.exports = seedComments; 