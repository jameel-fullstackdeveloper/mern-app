const express = require("express");

const router = express.Router();

// @GET
// api/profile
router.get("/", (req, res) => res.send("i am profile route"));

module.exports = router;
