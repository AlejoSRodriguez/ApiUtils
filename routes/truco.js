const express = require("express");
const { getAll } = require("../controllers/truco.controllers");
const router = express.Router();

router.get('/', getAll)

module.exports = router