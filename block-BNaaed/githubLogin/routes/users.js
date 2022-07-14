var express = require("express");
const { session } = require("passport");
const User = require("../models/users");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// logout the User
router.get("/logout", (req, res) => {
  req.session.destroy();
});

module.exports = router;