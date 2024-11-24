const cookieParser = require("cookie-parser");

const cookiesMiddleware = (req, res, next) => {
  if (!req.cookies.cookieConsent) {
    res.cookie("cookieConsent", true, { maxAge: 24 * 60 * 60 * 1000 }); // 1 day
    console.log("Cookie consent added");
  }
  next();
};

module.exports = cookiesMiddleware;
