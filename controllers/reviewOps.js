const {reviews} = require('../data.js')

const getReviews = (req, res) => {
    return res.status(200).json({success: true, data: reviews});
}

const getReviewsByID = (req, res) => {
    const {id} = req.params
    const reviewList = [...reviews];
    const result = reviewList.filter((rev) => rev.id == Number(id))
    if (result){
        return res.status(200).json({success: true, data: result})
    }
    return res.status(404).json({success: false, msg: 'Nothing found!'})
}

const createReview = (req, res) => {
    const {title, score, review} = req.body;
    let newID = reviews.length + 1;
    const newReview = {id: newID, name: title, rating: score, desc: review}
    reviews.push(newReview);
    return res.status(201).json({success: true, data: newReview, msg: 'Review added'});
}

const updateReview = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    if (id && name){
        const updatedReview = reviews.find(rev => rev.id === Number(id))
        updatedReview.name = name
        return res.status(200).json({success: true, data: reviews})
    }
    
    return res.json({success: false, msg: 'Review not found'})
}

const deleteReview = (req, res) => {
    const review = reviews.find(rev => rev.id === Number(req.params.id));
    if(!review){
        return res.status(404).json({success: false, msg: `No person with id ${req.params.id}`})
    }
    const newReviews = reviews.filter(rev => rev.id !== Number(req.params.id))
    return res.status(200).json({success:true, data: newReviews})

}

module.exports = {getReviews, getReviewsByID, createReview, updateReview, deleteReview}