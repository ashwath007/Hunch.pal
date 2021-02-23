const { check, validationResult } = require("express-validator");
const express = require('express');
const router = express.Router();

const {emailcode} = require('../controllers/emailcode');

router.post("/emailcode",[
	check("code","required code to verify")
],emailcode)





module.exports = router;