var express = require("express");
var router = express.Router();
var Skills = require("../models/skills");

module.exports = {
  skills,
};

function skills(req, res) {
  res.render("skills", {
    skill: Skill.getAll(),
  });
}
