const express = require('express');
const router  = express.Router();
const {resumeFillOne} = require('../controllers/dashboardResumefillOne');//Hunch_Resume

router.post("/resumefillone",resumeFillOne);
///hunch/pal/resume/resumefillone

module.exports = router;