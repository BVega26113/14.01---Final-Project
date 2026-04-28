var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
  // This tells the server to send the index.html file from your public folder
  res.sendFile(path.join(__dirname, '../public/MAIN_workspace/index.html'));
});

router.get('/comments', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/MAIN_workspace/comments.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

module.exports = router;