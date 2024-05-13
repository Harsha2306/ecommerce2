const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = wishlistItemSchema;