const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  newUser: newUser,
  newProfile: newProfile
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id)
}

function getProfile (id, testConn) {
  const conn = testConn || connection
  return conn('profiles')
    .join('users', 'users.id', 'profiles.user_id')
    .where('profiles.user_id', id)
    .select('users.name', 'users.email', 'profiles.country')
}

function newUser (postData, testConn) {
  const conn = testConn || connection
  return conn('users')
    .insert(postData.name, postData.email)
    .then()
}

function newProfile (postData, testConn) {
  const conn = testConn || connection
  return conn('profile')
    .insert(postData.country)
}