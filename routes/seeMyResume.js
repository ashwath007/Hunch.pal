const express = require('express');
const router  = express.Router();
const {seeMyResume} = require('../controllers/seeMyResume');//Hunch_Resume/controllers/seeMyResume.js

router.get("/user/:token/resume/seemyresume",seeMyResume);

module.exports = router;