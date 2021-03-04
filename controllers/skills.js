var skills = require("../models/skills");

let getSkills = (req, res) => {
  res.render("skills", {
    skills: skills.getAll(),
  });
};

let show = (req, res) => {
  id = req.params.id;

  res.render("000", {
    skill: skills.getOne(id),
  });
};

let giveForm = (req, res) => {
  console.log("Server recived a massage");
  res.render("form.ejs");
};

let submit = (req, res) => {
  console.log(req.body);
  console.log(skills.skills);
  skills.addOne(req.body);
  res.redirect("/skills");
};

let deleteSkill = (req, res) => {
  skills.deleteSkill(req.params.id);
  console.log("The server recived the " + req.params.id);
  res.redirect("/skills");
};
module.exports = {
  getSkills,
  show,
  giveForm,
  submit,
  deleteSkill,
};
