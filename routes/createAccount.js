const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");

const {createAccount} = require('../controllers/createAccount.js');
// const {emailVerication} = require('../controllers/emailVerify.js');

router.post("/createAccount",[
    check("email", "email is required").isEmail(),

],createAccount);



module.exports = router;