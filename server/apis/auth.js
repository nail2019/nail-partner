const express = require('express')
const FireBase = require('./firebase');
const httpCode = require('./http_code')

var Auth = {
  login: function (phone, password) {
    return FireBase.login(phone, password);
  }
}

const router = express.Router()

/**
 * Auth login to system
 * @param {Object} body - Body data
 * @param {string} phone - The phone number will login
 * @param {string} password - The password for account
 * @returns {Object}
 */
router.post('/auth/login', (req, res) => {
  const phone = req.body.phone
  const pass = req.body.password

  res.header('Content-Type', 'application/json');

  Auth.login(phone, pass).then(
    () => {
      res.send(JSON.stringify(httpCode.authStatus()))
      res.end()
    }
  ).catch(error => {
    res.send(JSON.stringify(httpCode.authStatus()))
  })
})

module.exports = router;
