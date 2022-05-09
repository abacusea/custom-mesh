const express = require("express");
const router = express.Router();

const {
  serverInfo,
  userInfo,
  listUsers
} = require("../controllers/mesh");

router.get("/mesh/serverInfo", serverInfo);
router.get("/mesh/userInfo", userInfo);
router.get("/mesh/listUsers", listUsers);
// router.get("/mesh/serverInfo", serverInfo);
// router.get("/mesh/serverInfo", serverInfo);
// router.get("/mesh/serverInfo", serverInfo);

module.exports = router;
