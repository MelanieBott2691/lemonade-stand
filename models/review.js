const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  itemId: { type: String, required: true },
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: String, required: true }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
