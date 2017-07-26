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
  console.log(req.body);
  res.json({message: 'success!'})

  // knex('contact').insert(req.body)
  //   .then(function() {
  //     res.json({message: 'success!'}))
  //   })
})

module.exports = router
