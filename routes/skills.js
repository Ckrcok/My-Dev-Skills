var express = require("express");
var router = express.Router();
var skills = require("../models/skills");
var skillsCrl = require("../controllers/skills");

/* GET home page. */
router.get("/", skillsCrl.skills);

router.get("/skilss/:id", function (req, res) {
  res.render("/skills/:id", { skill: skills["/skills/:id"] });
});

module.exports = router;
