const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const express = require('express')
const app = express();
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var serviceAccount = require("./json_credential_key/key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://immig-backend-default-rtdb.firebaseio.com'
})

const db = admin.database();
var ref = db.ref("contact");

app.get('/', function (req, res) {
    ref.orderByChild("age").once("value", function (snapshot) {
        result = [];
        snapshot.forEach(element => {
            result.push(element.val())
        });
        res.send(result)
    })
})

app.get('/add', function (req, res) {
    db.ref('contact').push({
        name: "Roger",
        age_status: "Adult",
        age: 34
    });
    db.ref('contact').push({
        name: "Roger",
        age_status: "Teen",
        age: 16
    });
    db.ref('contact').push({
        name: "Roger",
        age_status: "Todler",
        age: 2
    });
    db.ref('contact').push({
        name: "Roger",
        age_status: "Kid",
        age: 7
    });
    db.ref('contact').push({
        name: "Roger",
        age_status: "Elderly",
        age: 80
    });
    res.send('saved!')
})

app.get('/removeAll', function (req, res) {
    ref.remove()
        .then(function () {
            res.send("Remove succeeded.")
        })
        .catch(function (error) {
            res.send("Remove failed: " + error.message)
        });
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
});

exports.api = onRequest(app)