let express = require('express');
let router = express.Router();
let studentsModel = require('../models/students');

/* GET home page. */
router.get('/query', function (req, res, next) {
  let data = studentsModel.getByQuery().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send('error accured:' + err);
  });
});

router.get('/proc', function (req, res, next) {
  let data = studentsModel.getByProc().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send('error accured:' + err);
  });
});
  
module.exports = router;
