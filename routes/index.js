var express = require('express');
var router = express.Router();
var path = require('path');

// Home Route
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/MAIN_workspace/index.html'));
});

// Comments Route
router.get('/comments', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/MAIN_workspace/comments.html'));
});

// Menu Route
router.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/MAIN_workspace/menu.html'));
});

// About Us Route
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/MAIN_workspace/about.html'));
});

module.exports = router;