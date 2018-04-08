const express = require('express');

const students = require('./students');

const router = express.Router();

router.use(students);


module.exports = router;