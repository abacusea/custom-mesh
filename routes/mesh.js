const express = require("express");
const router = express.Router();

const {
  read,
} = require("../controllers/mesh");

router.get("/mesh", read);

module.exports = router;
