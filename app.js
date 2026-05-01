const express = require('express');
const path = require('path');
const createError = require('http-errors');
const { dbMiddleware } = require('./bin/db');
const indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(dbMiddleware);

app.use('/', indexRouter);

app.post('/submit-comment', (req, res) => {
    const { username, commentText } = req.body;
    if (!username || !commentText || commentText.trim() === "") {
        return res.status(400).send("Oops! Both name and comment are required.");
    }
    const timestamp = new Date().toLocaleString();
    console.log(`New Comment from ${username} at ${timestamp}: ${commentText}`);
    res.send(`<h1>Thanks, ${username}!</h1><p>Your comment was received.</p><a href="/comments">Go Back</a>`);
});

let comments = []; 

app.get('/api/comments', (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = 5; 
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const paginatedComments = comments.slice(startIndex, endIndex);
    
    res.json(paginatedComments);
});

app.post('/api/comments', (req, res) => {
    let { username, commentText } = req.body;

    if (!username || !commentText) {
        return res.status(400).json({ error: "Missing fields" });
    }

    username = username.trim();
    commentText = commentText.trim();

    if (username === "" || commentText === "") {
        return res.status(400).json({ error: "Input cannot be empty" });
    }

    if (commentText.length > 500) {
        return res.status(400).json({ error: "Comment too long (max 500 characters)" });
    }

    const newComment = { 
        username, 
        commentText, 
        timestamp: new Date().toISOString() 
    };
    
    comments.push(newComment);
    res.status(201).json(newComment);
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;