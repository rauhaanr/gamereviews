const {reviews} = require('../data');
const { search } = require('../routes/reviewOps');

const searchReview = (req, res) => {

    const title = req.query.title;
    let allReviews = [...reviews]

    // Check if user has provided 'search' query parameter
    if (title != ''){
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