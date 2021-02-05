const express = require('express')
const { checkUser } = require("../middlwares/middlwareAuth");
const { login, register, logOut } = require('../controller/auth')
const router = express.Router()

router.post('/login', checkUser ,login)
router.post('/register', register)
router.post('/logOut', logOut)

console.log(1)
module.exports = router