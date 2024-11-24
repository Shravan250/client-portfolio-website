let popupShown = false;

const popupMiddleware = (req, res, next) => {
  if (!popupShown) {
    popupShown = true;
    res.json({ showPopup: true });
  } else {
    next();
  }
};

module.exports = popupMiddleware;
