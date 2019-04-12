let express = require('express');
let bodyParse = require('body-parser');
const router = express.Router();

let MongoClient = require('mongodb').MongoClient

router.use(bodyParse.urlencoded({
    extended: true
}));

router.use(bodyParse.json());

MongoClient.connect("mongodb+srv://chrisUser:chrisUser@mastercluster-nrjln.mongodb.net/test?retryWrites=true",
function (err, db) {
  if (err){
      throw err
  }
  else{
      console.log("Success connecting to MongoDB");
  }
})



/* endpoint for attempting to login */
router.post('/loginrequest', (req, res) => {
    console.log('LoginSubmit request received!');
    // connection.query(
    //     /* insert query between literals */
    //     ``, (err, result, fields) => {
    //     if(err) {
    //         /* error handling */
    //     }
    //     res.send(result);
    // })
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Login with info:\nUsername: ${username}\tPassword: ${password}`);
})

/* endpoint for attempting to sign up */
router.post('/signuprequest', (req, res) => {
    console.log('Sign-Up request received!');
    // connection.query(
    //     /* insert query between literals */
    //     ``, (err, result, fields) => {
    //     if(err) {
    //         /* error handling */
    //     }
    //     res.send(result);
    // })
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let passwordConfirmation = req.body.passwordConfirmation;
    console.log(req);
    res.send("/SignUpRequest is connected!");
})

module.exports = router;