const express = require('express')
const app = express()
const api = require('./api/routes')
const front = require('./front_end/routes')

api.routes(app)
front.routes(app)

app.listen(5000, () => {
    console.log("listening")
})



//hello