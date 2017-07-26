const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const router = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router)

app.listen(port)
