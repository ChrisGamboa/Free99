const express = require('express');
const port = 4000
const app = express();
const router = require('./router.js');
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

app.use(router, (req, res, next) => {
    next();
});

/* GET endpoint for homepage */
app.get('/', (req, res) => {
    console.log('GET request received!');
    res.send("We are on '/' routers!")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))