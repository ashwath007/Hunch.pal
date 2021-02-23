const express = require('express');
const router  = express.Router();
const {login}   = require('../controllers/login');
const { check, validationResult } = require("express-validator");

router.post("/login",[
	 check("email", "email is required").isEmail()
],login);

module.exports = router;
