var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page - This sends your donut landing page */
router.get('/', function(req, res, next) {
  // This tells the server to send the index.html file from your public folder
  res.sendFile(path.join(__dirname, '../public/MAIN_workspace/index.html'));
});

/* GET comments page - You'll need this for Phase 2 later */
router.get('/comments', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/MAIN_workspace/comments.html'));
});

module.exports = router;