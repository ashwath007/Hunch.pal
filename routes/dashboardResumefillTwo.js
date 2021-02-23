const express = require('express');
const router  = express.Router();
const {resumeFillTwo} = require('../controllers/dashboardResumefillTwo');//Hunch_Resume

router.post("/resumefilltwo",resumeFillTwo);
///hunch/pal/resume/resumefillone

module.exports = router;