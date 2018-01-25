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

router.get('/profiles/:id', (req, res) => {
  let id = req.params.id
  db.getProfile(id)
    .then(profile => {
      console.log(profile)
      res.render('profiles', profile[0])
    })
})

router.post('/', (req, res) => {
  let postData = req.body
  db.newUser(postData)
})

module.exports = router

