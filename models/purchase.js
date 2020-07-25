const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  userId: { type: String, required: true },
  itemId: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  total: { type: String, required: true }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
