const express = require('express')
const {searchReview} = require('../controllers/search')

const router = express.Router()

router.get('/', searchReview)

module.exports = router