const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  charityName: { type: String, required: true },
  charityDescription: { type: String, required: true },
  charityUrl: { type: String },
  imgUrl: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
