// controllers/productController.js
import Product from '../models/product.js';

const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();
    res.status(201).json({ data: { product } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ data: { products } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ data: { message: 'Product deleted' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.quantity += parseInt(number);
    await product.save();
    res.json({ data: { product, message: 'Updated successfully' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  createProduct,
  listProducts,
  deleteProduct,
  updateProductQuantity,
};
