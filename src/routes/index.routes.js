const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.controllers");

router.get("/", indexController.homepage);
router.get("/about", indexController.about);

module.exports = router;
