const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/mobile", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/mobile.html"));
});

module.exports = router;
