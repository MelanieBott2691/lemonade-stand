const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  storeId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  imgUrl: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
