
# firebase-functions-express-realtime-firestore

Project to build backend firebase based. 
Using cloud functions with express, database realtime and firestore.

The process to create the project was:
```
$ firebase init 
// choose NEW PROJECT, blocker bugs on created projects
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
...the generated key goes into [json_credential_key](https://github.com/rogerio-ushiro/firebase-functions-express-realtime-firestore/tree/main/functions/json_credential_key) diretory.