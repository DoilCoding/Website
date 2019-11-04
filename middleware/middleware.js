var middleware = {
    logged_in: (req, res, next) => {
        const logged_in = true
        if (logged_in)
            return next()
        return res.redirect('back')
    },

    logged_out: (req, res, next) => {
        const logged_out = false
        if (logged_out)
            return next()
        return res.redirect('back')
    },

    logged_as_admin: (req, res, next) => {
        console.log("we are logged in as user")
        return next()
    },

    has_valid_api_authentication_header: (req, res, next) => {
        console.log("has the authentication header for the api")
        return next()
    },
};

module.exports = middleware;