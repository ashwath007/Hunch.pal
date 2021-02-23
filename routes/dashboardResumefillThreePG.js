const express = require('express');
const router  = express.Router();
const {FillPG} = require('../controllers/dashboardResumefillThreePG');



router.post("/resumefillthree/:token/pg",FillPG);
module.exports = router;
