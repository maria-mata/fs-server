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
  if (validInput(req.body)) {
    knex('contact').insert(req.body)
      .returning('id')
      .then(data => {
        res.json({message: 'success!'})
      })
  } else {
    res.json({message: 'Invalid user input.'})
  }
})

router.put('/contacts/:id', (req, res) => {
  if (validInput(req.body)) {
    knex('contact').where('contact.id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(data => {
        res.json({message: 'success!'})
      })
  } else {
    res.json({message: 'Invalid user input.'})
  }
})

router.delete('/contacts/:id', (req, res) => {
  knex('contact').where('contact.id', req.params.id).del()
    .then(data => {
      res.json({message: 'success!'})
    })
})

function validInput(contact) {
  let firstName = typeof contact.first_name == 'string' && contact.first_name.trim() != ''
  let lastName = typeof contact.last_name == 'string' && contact.last_name.trim() != ''
  let phone = typeof contact.phone == 'string' && contact.phone.trim() != '' && contact.phone.length == 10
  let email = typeof contact.email == 'string' && contact.email.match(/([@])/g) != null
  return firstName && lastName && phone && email
}

module.exports = router
