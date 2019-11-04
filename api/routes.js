const middleware = require('../middleware/middleware')

function routes(app) {
    app.get('/api/about', (req, res) => {
        console.log("hit about")
        res.send("(api) about")
    })

    app.get('/api/test', (req, res) => {
        console.log("hit test")
        res.send("(api) test")
    })

    app.post('/api/user', middleware.has_valid_api_authentication_header, (req, res) => {
        console.log("hit post user")
        res.send("(api) test")
    })

    app.get('/api', (req, res) => {
        console.log("hit api page")
        res.send("api page")
    })

    app.get('/api/*', (req, res) => {
        console.log("hit api *")
        res.send("(api) *")
    })
}

module.exports.routes = routes