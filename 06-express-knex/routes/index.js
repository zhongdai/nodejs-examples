const express = require("express");
const personController = require("../controller/person");
const router = express.Router();

router.post("/person", personController.createPerson);
router.get("/person", personController.findAll);
router.get("/person/:id", personController.findById);

module.exports = router;
