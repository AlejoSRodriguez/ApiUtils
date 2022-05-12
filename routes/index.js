const express = require("express");
const router = express.Router();
const truco = require('./truco')

router.use('/truco', truco)

module.exports = router;