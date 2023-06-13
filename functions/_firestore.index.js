const express = require('express')
const app = express();
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const { getFirestore } = require('firebase-admin/firestore');

app.use(bodyParser.json());

var serviceAccount = require("./json_credential_key/key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = getFirestore();

app.get('/add', async (req, res) => {
    const citiesRef = db.collection('cities');

    await citiesRef.doc('SF').set({
        name: 'San Francisco', state: 'CA', country: 'USA',
        capital: false, population: 860000
    });
    await citiesRef.doc('LA').set({
        name: 'Los Angeles', state: 'CA', country: 'USA',
        capital: false, population: 3900000
    });
    await citiesRef.doc('DC').set({
        name: 'Washington, D.C.', state: null, country: 'USA',
        capital: true, population: 680000
    });
    await citiesRef.doc('TOK').set({
        name: 'Tokyo', state: null, country: 'Japan',
        capital: true, population: 9000000
    });
    await citiesRef.doc('BJ').set({
        name: 'Beijing', state: null, country: 'China',
        capital: true, population: 21500000
    });
    res.send('saved!')
});

app.get('/', async (req, res) => {
    const cityRef = db.collection('cities').doc('SF');

    const doc = await cityRef.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log(doc.data());
        res.send(doc.data())
    }
})

app.listen(process.env.PORT || 3000)