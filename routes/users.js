const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/quiz/:id', (req, res) => {
  const target = req.params.id
  db.getQuestion()
  .then((question) => {
      db.getUser(target)
    .then(users => {
      res.render('quiz', { users: users }, question)
  })

    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

