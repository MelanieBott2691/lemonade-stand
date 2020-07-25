const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: String
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
