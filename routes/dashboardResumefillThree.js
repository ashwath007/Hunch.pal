const express = require('express');
const router  = express.Router();
const {resumeFillthree} = require('../controllers/dashboardResumefillThree');
 
router.post("/resumefillthree",resumeFillthree);




module.exports = router;