const express = require('express');
const bcrypt = require('bcrypt');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();
//localhost:9000/api/auth/register
router.post('/register',asyncHandler(insert));
router.post('/login',asyncHandler(getUserByEmailAndPassword));

async function insert(req,res,next){
    const user = req.body;
   console.log(`registering user`,user);
   const savedUser = await userController.insert(user); 
   res.json(savedUser);
}

async function getUserByEmailAndPassword(req,res,next){
    const user = req.body;
    console.log('seraching user for',user);

    const savedUser = await userController.getUserByEmailIdAndPassword(user.email,user.password);
    res.json(savedUser);
}


module.exports = router;