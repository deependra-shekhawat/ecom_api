// models/product.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
});

export default model('Product', productSchema);
