const middleware = require('../middleware/middleware')
const path = require('path')

function routes(app) {
    app.get('/logout', middleware.logged_in, (req, res) => {
        console.log("you were successfully logged out")
        res.send("(frontend) logout")
    })

    app.get('/login', middleware.logged_out, (req, res) => {
        console.log("you were successfully logged in")
        res.send("(frontend) login")
    })

    app.get('/profile', middleware.logged_in, (req, res) => {
        console.log("displaying profile")
        res.send("(frontend) profile")
    })

    app.get('/admin', middleware.logged_as_admin, (req, res) => {
        console.log("displaying admin")
        res.send("(frontend) admin")
    })

    app.get('/', (req, res) => {
        console.log("hit front page")
        res.sendFile(path.join(__dirname, '../html/public/index.html'))
    })

    app.get('/*', (req, res) => {
        console.log("hit api *")
        res.send("(frontend) *")
    })
}

module.exports.routes = routes