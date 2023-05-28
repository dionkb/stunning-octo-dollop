// Setting up middleware to check for loggedIn status before continuing
const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect("/login");
    } else {
      next();
    }
};

// Allows the module to be used elsewhere
module.exports = withAuth;
