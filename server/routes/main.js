const express = require("express");
const router = express.Router();

//Routers
router.get("", (req, res) => {
  const locals = {
    title: "NodeJS Blog Web",
    description: "Simple Blog Web make by NodeJS, Express & MongoDB.",
  };

  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
