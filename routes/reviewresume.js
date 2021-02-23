const express = require('express');
const router  = express.Router();
const {reviewResume} = require('../controllers/reviewresume');//Hunch_Resume/controllers/reviewresume.js


router.get("/user/:token/:ind",reviewResume);

//   /user/7957be68-7c92-413b-bb6c-fc81876c9dcdCYYGX3NxU/uploadresume/5f1e9d316556df29bea5ca90/uploads/userresume/UvTRbXlD/courses.docx/review


module.exports = router;