const express = require("express");

const router = express.Router();

// @GET
// api/auth
router.get("/", (req, res) => res.send("i am auth route"));

module.exports = router;
