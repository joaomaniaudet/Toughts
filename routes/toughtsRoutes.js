const express = require('express')
const Tought = require('../models/Tought')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')

//helper

const checkAuth = require('../helpers/auth').checkAuth


router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtSave)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit', checkAuth, ToughtController.updateToughtSave)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.post('/remove', checkAuth, ToughtController.removeToughts)
router.get('/', ToughtController.showToughts)


module.exports = router