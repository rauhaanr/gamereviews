const express = require('express')
const {reviews} = require('../data')
const {getReviews, getReviewsByID, createReview, updateReview, deleteReview} = require('../controllers/reviewOps')
const { route } = require('express/lib/application')

const router = express.Router()
router.get('/', getReviews)
router.get('/:id', getReviewsByID)
router.post('/', createReview)
router.put('/:id', updateReview)
router.delete('/:id', deleteReview)

module.exports = router