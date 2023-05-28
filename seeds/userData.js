// Pull required model into play
const { User } = require('../models');

// Providing basic objects to simulate user data
const userData = [
    {
        "username": "fmulliss0",
        "email": "rnozzolii0@last.fm",
        "password": "ow7VN6y7"
    }, {
        "username": "phares1",
        "email": "egilroy1@reuters.com",
        "password": "bTqAMQRipnXA"
    }, {
        "username": "gtuffrey2",
        "email": "dmollene2@earthlink.net",
        "password": "j6fCChB6"
    }, {
        "username": "edandy3",
        "email": "cglusby3@ucla.edu",
        "password": "eRnfEi"
    }, {
        "username": "bblonfield4",
        "email": "nglynn4@opera.com",
        "password": "oz1nwxK"
    }, {
        "username": "amadeley5",
        "email": "lreiners5@gnu.org",
        "password": "V9D0YC2WB"
    }, {
        "username": "rclinkard6",
        "email": "edelhanty6@hubpages.com",
        "password": "eIt2za2nX"
    }, {
        "username": "kceschi7",
        "email": "waddis7@mail.ru",
        "password": "hzWD9p0"
    }, {
        "username": "vmaclise8",
        "email": "djendrich8@ifeng.com",
        "password": "47Y1hT"
    }, {
        "username": "dphant9",
        "email": "msinderson9@nhs.uk",
        "password": "IA2a9U"
    }, {
        "username": "alundona",
        "email": "pguitea@google.es",
        "password": "ZLhW5in"
    }, {
        "username": "jrisboroughb",
        "email": "aturmallb@yandex.ru",
        "password": "APIavgkQHSN"
    }, {
        "username": "sdimsdalec",
        "email": "awarlawc@sciencedaily.com",
        "password": "wessMeM5"
    }, {
        "username": "slaymand",
        "email": "ysomersettd@1und1.de",
        "password": "hjxJwNuO0"
    }, {
        "username": "jdeftye",
        "email": "abartote@ebay.co.uk",
        "password": "Go1G0hCwzSy"
    }, {
        "username": "lcicconef",
        "email": "ascanderetf@cargocollective.com",
        "password": "B2lVAxrdc8Jy"
    }, {
        "username": "smonroeg",
        "email": "sguildg@hao123.com",
        "password": "eUqRxrCrRKCU"
    }, {
        "username": "khillamh",
        "email": "sdjurisich@furl.net",
        "password": "g1umJoTT"
    }, {
        "username": "zseidi",
        "email": "lgetchi@opera.com",
        "password": "1Hqs7xG3xzl8"
    }, {
        "username": "njossej",
        "email": "rbearmanj@xinhuanet.com",
        "password": "RvHb8Y8"
    }, {
        "username": "dswalek",
        "email": "eklimusk@about.com",
        "password": "UVCKPfqJ9t"
    }, {
        "username": "rbottomleyl",
        "email": "adenkell@tiny.cc",
        "password": "8YIRKF"
    }, {
        "username": "rpaulackm",
        "email": "mbroym@scientificamerican.com",
        "password": "TSBa8TJ7vf"
    }, {
        "username": "bredmann",
        "email": "jguildfordn@hhs.gov",
        "password": "KDx4wBf20Do"
    }, {
        "username": "hdeveyo",
        "email": "pyeliashevo@craigslist.org",
        "password": "VJW7wTaYipBT"
    }
];

// Creates the function that will be used when seeding
const seedUsers = () => User.bulkCreate(userData);

// Exports the module
module.exports = seedUsers; 