const express = require("express");
const { createUser, loginUser, checkUser, logout } = require("../controllers/Auth");
const passport = require("passport");
const router = express.Router();
router
  .get("/checkUser", passport.authenticate("jwt"), checkUser)
  .post("/createUser", createUser)
  .post("/loginUser", passport.authenticate("Local"), loginUser)
  .get("/logoutUser", logout);
exports.router = router;

