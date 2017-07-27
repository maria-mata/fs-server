const express = require('express')
const router = express.Router()
const knex = require('./db/knex')

router.get('/contacts', (req, res) => {
  knex('*').from('contact')
    .then(data => {
    res.json(data)
  })
})

router.get('/contacts/:id', (req, res) => {
  knex('contact').where('contact.id', req.params.id)
    .then(data => {
      res.json(data)
    })
})

router.post('/contacts', (req, res) => {
  knex('contact').insert(req.body)
    .returning('id')
    .then(data => {
      res.json({message: 'success!'})
    })
})

router.put('/contacts/:id', (req, res) => {
  knex('contact').where('contact.id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(data => {
      res.json({message: 'success!'})
    })
})

module.exports = router
