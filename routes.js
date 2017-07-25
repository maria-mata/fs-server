const express = require('express')
const router = express.Router()
const knex = require('./db/knex')

router.get('/contacts', (req, res) => {
  knex('*').from('contact')
  .then(data => {
    res.json(data)
  })
})


module.exports = router
