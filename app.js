const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log('middleware');
    // res.send('<h1>first middleware</h1>');
    next();
});
app.use((req, res, next) => {
    console.log('Another middleware');
});

app.listen(3000);