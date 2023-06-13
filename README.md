
# firebase-functions-express-realtime-firestore

Project to build backend firebase based. 
Using cloud functions with express, database realtime and firestore.

The process to create the project was:
```
$ firebase init 
// choose NEW PROJECT, blocker bugs on 
```

Test locally
```
$ npm run serve
$ npm run deploy
```

Deploy to cloud
```
$ npm run deploy
```

## Firestore and Realtime Database

To create **json credential key** file:
```
https://console.firebase.google.com/u/0/project/ {PROJECT-NAME} /settings/serviceaccounts/adminsdk
```