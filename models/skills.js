var express = require("express");
var router = express.Router();

let skills = [
  { id: "000", name: "Public Speaking" },
  { id: "001", name: "Negotiation" },
  { id: "002", name: "Teamwork" },
  { id: "003", name: "Gaming" },
  { id: "004", name: "Self Learning" },
  { id: "005", name: "Diving" },
  { id: "006", name: "Range Safety" },
  { id: "007", name: "Reddit" },
  { id: "008", name: "Catching pokemons" },
];

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((obj) => obj.id == id);
}

function deleteSkill(id) {
  const idx = skills.findIndex((skill) => skill.id == id);
  skills.splice(idx, 1);
}

function updateSkill(id, newSkill) {
  const idx = skills.findIndex((skill) => skill.id == parseInt(id));
  skills[idx].name = newSkill.skills;
}

function addOne(skill) {
  skills.push({
    id: Date.now() % 100000,
    name: skill.name,
  });
}

module.exports = { skills, getAll, getOne, addOne, deleteSkill, updateSkill };
