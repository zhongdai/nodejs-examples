const express = require("express");
const personController = require("../controller/person");
const router = express.Router();

router.post("/", personController.createPerson);
router.get("/", personController.findAll);
router.get("/:id", personController.findById);

module.exports = router;
