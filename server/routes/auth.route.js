const express = require('express');
const bcrypt = require('bcrypt');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');
const authController = require("../controllers/auth.controller");
const passport = require("../middleware/passport");

const router = express.Router();
//localhost:9000/api/auth/register
router.post('/register',asyncHandler(insert),login);
router.post('/login', asyncHandler( getUserByEmailAndPassword), login);
router.get("/findme", passport.authenticate("jwt", { session: false }), login);

async function insert(req, res, next) {
    const user = req.body;
    console.log(`registering user`, user);
    req.user = await userController.insert(user);
    next();
  }
  
  async function getUserByEmailAndPassword(req, res, next) {
    const user = req.body;
    console.log(`searching user for `, user);
  
    const savedUser = await userController.getUserByEmailIdAndPassword(
      user.email,
      user.password
    );
  
    req.user = savedUser;
  
    next();
  }
  
  function login(req, res) {
    const user = req.user;
    const token = authController.generateToken(user);
    res.json({
      user,
      token
    });
  }
  
  module.exports = router;
  