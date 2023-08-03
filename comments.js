// Create web server

// Import modules
const express = require('express')
const bodyParser = require('body-parser')

// Create web server
const app = express()

// Create a middleware
app.use(bodyParser.json())

// Create a route
app.get('/comments', (req, res) => {
    res.send([
        {
            id: 1,
            content: 'Hello',
        },
        {
            id: 2,
            content: 'World',
        },
    ])
})

// Create a route
app.post('/comments', (req, res) => {
    const comment = req.body
    comment.id = 3
    res.send(comment)
})

// Start web server
app.listen(3000, () => {
    console.log('Web server started at http://localhost:3000')
})