const express = require('express');
const path = require('path');
const createError = require('http-errors');
const { dbMiddleware } = require('./bin/db');

const indexRouter = require('./routes/index');

const app = express();

// 1. VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 2. PARSING MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(dbMiddleware);

// 3. ROUTES (Defined BEFORE the error handlers)
app.use('/', indexRouter);

// Combined Comment Submission Route
app.post('/submit-comment', (req, res) => {
    const { username, commentText } = req.body;
    if (!username || !commentText || commentText.trim() === "") {
        return res.status(400).send("Oops! Both name and comment are required.");
    }
    const timestamp = new Date().toLocaleString();
    console.log(`New Comment from ${username} at ${timestamp}: ${commentText}`);
    res.send(`<h1>Thanks, ${username}!</h1><p>Your comment was received.</p><a href="/comments">Go Back</a>`);
});

// API Routes
let comments = []; 

app.get('/api/comments', (req, res) => {
    // 1. Get the page number from the URL (e.g., /api/comments?page=2)
    const page = parseInt(req.query.page) || 1; 
    const limit = 5; // Number of comments per page
    
    // 2. Calculate the start and end indexes
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    // 3. Slice the array based on those indexes
    const paginatedComments = comments.slice(startIndex, endIndex);
    
    // 4. Send back the slice
    res.json(paginatedComments);
});

app.post('/api/comments', (req, res) => {
    const { username, commentText } = req.body;
    if (!username || !commentText) {
        return res.status(400).json({ error: "Missing fields" });
    }
    const newComment = { username, commentText, timestamp: new Date().toLocaleString() };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// 4. ERROR HANDLING (Must be at the very bottom)
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