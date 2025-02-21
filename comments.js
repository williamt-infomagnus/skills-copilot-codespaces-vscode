// Create server
const express = require('express');
const app = express();
const port = 3000;

// Import routes
const comments = require('./routes/comments');

// Use routes
app.use('/comments', comments);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});