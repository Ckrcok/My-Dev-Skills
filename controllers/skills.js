var skills = require("../models/skills");

let getSkills = (req, res) => {
  res.render("skills", {
    skills: skills.getAll(),
  });
};

let edit = (req, res) => {
  res.render("edit", {
    skill: skills.getOne(req.params.id),
  });
};

let update = (req, res) => {
  console.log(req.body);
  skills.updateSkill(req.params.id, req.body);
  res.redirect("/skills");
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
  skills.addOne(req.body);
  res.redirect("/skills");
};

let deleteSkill = (req, res) => {
  skills.deleteSkill(req.params.id);
  res.redirect("/skills");
};
module.exports = {
  getSkills,
  show,
  giveForm,
  submit,
  deleteSkill,
  edit,
  update,
};
