let express = require('express');
let bodyParse = require('body-parser');
const router = express.Router();
let mysql = require('mysql');

router.use(bodyParse.urlencoded({
    extended: true
}));

router.use(bodyParse.json());

// router.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

let connection = mysql.createConnection({
    host: "",
    port: "",
    user: "",
    password: "",
    database: ""
});

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