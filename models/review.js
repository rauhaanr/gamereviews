const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;