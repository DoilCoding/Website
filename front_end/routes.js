const middleware = require('../middleware/middleware')

function routes(app) {
    app.get('/logout', middleware.logged_in, (req, res) => {
        console.log("you were successfully logged out")
        res.send("(frontend) logout")
    })

    app.get('/login', middleware.logged_out, (req, res) => {
        console.log("you were successfully logged in")
        res.send("(frontend) login")
    })

    app.get('/', (req, res) => {
        console.log("hit front page")
        res.send("frontend page")
    })

    app.get('/*', (req, res) => {
        console.log("hit api *")
        res.send("(frontend) *")
    })
}

module.exports.routes = routes