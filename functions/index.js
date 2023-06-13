const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
 
const express = require("express")

const app = express()
app.get("/", (request, response) => {
    response.send("Hello from Express on the Main page!")
})
app.get("/123", (request, response) => {
    response.send("Hello from Express on 123!")
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})

exports.api = onRequest(app)