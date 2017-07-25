const express = require('express')
const app = express()
const port = 8080
const router = require('./routes')

app.use('/', router)


app.listen(port)
