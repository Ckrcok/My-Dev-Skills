var express = require("express");
var router = express.Router();
var skillsCrl = require("../controllers/skills");

/* GET home page. */
router.get("/", skillsCrl.getSkills);
router.get("/new", skillsCrl.giveForm);
router.post("/submit", skillsCrl.submit);
router.get("/:id", skillsCrl.show);
router.delete("/:id", skillsCrl.deleteSkill);
router.get("/:id/edit", skillsCrl.edit);
router.put("/:id", skillsCrl.update);

module.exports = router;
