let express = require('express');
let bodyParse = require('body-parser');
const router = express.Router();
let mysql = require('mysql');

router.use(bodyParse.urlencoded({
    extended: true
}));

router.use(bodyParse.json());

/* creates DB connection for MySQL */
let connection = mysql.createConnection({
    host: "",
    port: "",
    user: "",
    password: "",
    database: ""
});

/* endpoint for attempting to login */
router.get('/loginrequest', (req, res, next) => {
    console.log('LoginSubmit request received!');
    // connection.query(
    //     /* insert query between literals */
    //     ``, (err, result, fields) => {
    //     if(err) {
    //         /* error handling */
    //     }
    //     res.send(result);
    // })
    console.log(req);
    res.send("/LoginRequest is connected!");
})

/* endpoint for attempting to sign up */
router.get('/signuprequest', (req, res, next) => {
    console.log('Sign-Up request received!');
    // connection.query(
    //     /* insert query between literals */
    //     ``, (err, result, fields) => {
    //     if(err) {
    //         /* error handling */
    //     }
    //     res.send(result);
    // })
    console.log(req);
    res.send("/SignUpRequest is connected!");
})

module.exports = router;