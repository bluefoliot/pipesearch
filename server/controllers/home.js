exports.home = function(req, res) {
  res.sendFile("client/index.html", { root : __dirname});
}
