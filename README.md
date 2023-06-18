
# firebase-functions-express-realtime-firestore

Project to build backend firebase based. 
Using Cloud Functions (2nd gen) with express, database realtime and firestore.

## 1. Create Project

The process to create the project was:
```
$ firebase init 
// choose NEW PROJECT, blocker bugs on created projects
```

## 2. Create the database

get the database URL after create on https://console.firebase.google.com/

Add the URL to the initializer:
```
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: '{ URL HERE }'
})
```

## 3. Running and deploying

Test locally:
```
$ npm run serve
$ npm run deploy
```

Deploy to cloud:
```
$ npm run deploy
```

## 4. Firestore and Realtime Database

To create **json credential key** file:
```
https://console.firebase.google.com/u/0/project/ {PROJECT-NAME} /settings/serviceaccounts/adminsdk
```
...the generated key goes into [json_credential_key](https://github.com/rogerio-ushiro/firebase-functions-express-realtime-firestore/tree/main/functions/json_credential_key) diretory.

## 5. Specific to this project

Select the right index related to the chosen database

```
// package.json

"main": "_realtime.index.js"
```
- _realtime.index.js
- _firestore.index.js