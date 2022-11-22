const express = require('express')
const mongoose= require('mongoose')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')
require('dotenv').config()
require('./config/db')
const authRoute = require('./routes/api/authroute')

const app = express()
const PORT = process.env.PORT || 3001;

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// API Routes
app.use('/api/users', require('./public/api/users'))


// Catch All to serve the production app
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
})

app.get('/login', (req, res) => {
    res.send(path.join(__dirname, 'build', '/Pages/login.html'))
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
