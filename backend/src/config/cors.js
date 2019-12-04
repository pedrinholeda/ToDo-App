module.exports = function(req, res, next) {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Methods",
    "GET, POST, OPTION, PUT, PATCH, DELETE"
  );
  res.header(
    "Acess-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};
