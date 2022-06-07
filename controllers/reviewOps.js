const mongoose = require('mongoose');
const Review = require('../models/review');

const getReviews = async (req, res) => {
    const reviews = await Review.find({});
    return res.status(200).json({success: true, data: reviews});
}

const getReviewsByID = async (req, res) => {
    const reviewid = Number(req.params.id);
    const review = await Review.find({ id: reviewid });
    if (review){
        return res.status(200).json({success: true, data: review})
    }
    return res.status(404).json({success: false, msg: 'Nothing found!'})
}

const createReview = async (req, res) => {
    const {title, score, review} = req.body;
    const reviews = await Review.find({});
    const newID = reviews.length + 1;
    const newReview = new Review({
        id: newID, 
        name: title,
        rating: score,
        desc: review
    })
    const savedReview = await newReview.save();
    return res.status(201).json({success: true, data: savedReview, msg: 'Review added'});
}

const updateReview = async (req, res) => {
    const revId = Number(req.params.id);
    const newName = req.body.name;
    if (revId && newName){
        const updatedReview = await Review.findOneAndUpdate({id: revId}, {name: newName.toLowerCase()}, {new: true})
        return res.status(201).json({success: true, data: updatedReview})
    }
    return res.status(404).json({success: false, msg: 'Review not found'})
}

const deleteReview = async (req, res) => {
    deleteId = Number(req.params.id);

    if (deleteId){
        const deletedReview = await Review.findOneAndDelete({id: deleteId})
        if (deletedReview) {
            return res.status(200).json({success: true, data: deletedReview});
        }
        else {
            return res.status(404).json({success: false, msg: 'Invalid id!'});
        }
    }
}

module.exports = {getReviews, getReviewsByID, createReview, updateReview, deleteReview}