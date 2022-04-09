const express = require('express')

const app = express()

// to use the middle for all routers
// this should be before all routers, otherwise the next
// should be added to the app.get('/', (req, res, next))
app.use(logger)

app.get('/', (req, res) => {
    res.send("hello")
    console.log('from get /')
})

app.get('/user', auth, (req, res) => {
    res.send("hello user")
})

// This is a middleware to run logic between getting request
// and sending response
function logger(req, res, next) {
    console.log('before')
    next()
    console.log('after')
}

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next()
    } else {
        res.send('No auth')
    }
    console.log('Auth')
    next()
}

app.listen(3000, () => console.log('Server started'))
