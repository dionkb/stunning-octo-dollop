// Calling packages that will be required to run application
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Calling various config/setup files from repo to use stored code
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// Initializing express and config the port
const app = express();
const PORT = process.env.PORT || 3001;

// Configuration for the sequelize session TODO: Fill me in!
const sess = {
  secret: '',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Allowing express to use the session config settings
app.use(session(sess));

// Allows 'helpers' to be created and used via handlebars documentation
const hbs = exphbs.create({ helpers });

// Sets the default engine to be handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Basic middleware to allow different data forms to be run through express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Allowing use of routes folder where pathways are set up
app.use(routes);

// Calls sequelize, syncs models to database, then opens the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
