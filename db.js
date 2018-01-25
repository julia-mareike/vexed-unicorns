const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  getQuestion
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id)
}

// Returns an array of four random objects, each of which is the country name and code.

function getQuestion (testConn) {
  const randomNumbers = get4nums()
  const conn = testConn || connection
  return conn('countries')
    .whereIn('id', randomNumbers)
}

function get4nums () {
  let used = new Array(209)
  used.fill(0)
  let answers = []
  let randomNum = 0
  for (let i = 0; i < 4; i++) {
    do {
      randomNum = Math.floor(Math.random() * 209) + 1
    }
    while (used[randomNum] !== 0)
    used[randomNum] = 1
    answers.push(randomNum)
  }
  return answers
}
