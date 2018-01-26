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

router.post('/quiz', (req, res) => {
  const data = req.body
  console.log(data)
  // console.log(data.answer)
  // console.log(data.selected)
  if (data.answerName === data.selected) {
    res.render('correct', data)
  } else {
    res.render('incorrect', data)
  }
})

router.get('/correct', (req, res) => {
  res.render('correct')
})

router.get('/incorrect', (req, res) => {
  res.render('incorrect')
})

router.get('/quiz/:id', (req, res) => {
  const target = req.params.id
  db.getQuestion()
    .then((countries) => {
      res.render('quiz',
        { countries: countries,
          answer: countries[Math.floor(Math.random() * 4)]
        })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
