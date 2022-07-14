var express = require("express");
const passport = require("passport");
const User = require("../models/users");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/failure", function (req, res, next) {
  res.send("not sucess");
});

router.get("/sucess", function (req, res) {
  console.log(req.session);
  res.send("sucess");
});

router.get("/auth/github", passport.authenticate("github"));
// callback resposible for the response from the server of the user

router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/failure" }),
  (req, res) => {
    res.redirect("/sucess");
  }
);
module.exports = router;