var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", {data});
  });
});

router.post("/burgers/create", function(req, res){
  burger.create(req.body.burger_name, function(data){
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function() {
    res.redirect("/");
  });
});

module.exports = router;
