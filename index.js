const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const router = require('./routes')
const cors = require('cors')

app.use(cors())
app.use('/', router)

app.listen(port)
