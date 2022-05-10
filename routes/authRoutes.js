const express = require('express')
const Tought = require('../models/Tought')
const router = express.Router()
const AuthCotroller = require('../controllers/AuthController')


//constroller
router.get('/login', AuthCotroller.login)
router.post('/login', AuthCotroller.loginPost)
router.get('/register', AuthCotroller.register)

router.post('/register', AuthCotroller.registerPost)
router.get('/logout', AuthCotroller.logout)



module.exports = router