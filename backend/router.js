let express = require('express');
let bodyParse = require('body-parser');
const router = express.Router();

let MongoClient = require('mongodb').MongoClient;
let connectionUrl = "mongodb+srv://chrisUser:chrisUser@mastercluster-nrjln.mongodb.net/test?retryWrites=true";

const dbName = "Free99";
const accounts= "accounts";

router.use(bodyParse.urlencoded({
    extended: true
}));

router.use(bodyParse.json());

MongoClient.connect(connectionUrl,
function (err, db) {
  if (err){
      throw err;
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

    let newEmail = req.body.email;
    let newUsername = req.body.username;
    let newPassword = req.body.password;
    let newPasswordConfirmation = req.body.passwordConfirmation;
    console.log(req.body);

    // Create document for mongodb
    let doc = {
       email: newEmail,
       username: newUsername,
       password: newPassword
    };
    console.log(`created document in backend: \n${doc.email}, ${doc.username}, ${doc.password}`);

    // Send new account information to database
    MongoClient.connect(connectionUrl,
    function (err, db) {
      if (err){
          throw err;
      }
      else{
          console.log("Success connecting to DB withn /SignupRequest");
      }

      const Free99 = db.db(dbName);
      Free99.collection(accounts).insertOne(doc, function(err, res) {
        if (err) {
          throw err;
        }
        else {
          console.log("1 document inserted");
        }

        db.close();
      });

    });

    res.send("/SignUpRequest is connected, and !");
})

module.exports = router;
