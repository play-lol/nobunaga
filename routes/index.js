"use strict";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect("/groups");
});

module.exports = router;
