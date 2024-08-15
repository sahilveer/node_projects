const express = require('express');
const ejs = require('ejs');
//linking the page route with app.js
const router = require('./routes/pages');

const app = express();
const PORT = 3000;

//implementing routes using using middleware
app.use(router);

app.listen(PORT, () => {
    console.log('Server stard on port ${PORT}');
});