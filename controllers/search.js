// const {reviews} = require('../data');
const mongoose = require('mongoose');
const Review = require('../models/review');
const { search } = require('../routes/reviewOps');

const searchReview = async (req, res) => {

    const title = req.query.title;
    let allReviews = await Review.find()
    console.log(allReviews);

    // Check if user has provided 'title' query parameter
    if (title && title != ''){
        allReviews = allReviews.filter( (rev) => {
            return rev.name.startsWith(title.toLowerCase())
        })
        if (allReviews.length > 0){
            return res.status(200).json({success: true, data: allReviews})
        }
    }
    return res.status(404).json({success: false, msg: 'No game found'})

}

module.exports = {searchReview}