const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
    res.send('Hello frim server')
});

app.listen(8080, '127.0.0.1');
console.log('Test');