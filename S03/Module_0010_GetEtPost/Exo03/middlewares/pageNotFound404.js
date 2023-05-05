const pageNotFound404 = (req, res, next) => {
  res.status(404);
  res.render("pageNotFound404", {});
};

module.exports = pageNotFound404;
