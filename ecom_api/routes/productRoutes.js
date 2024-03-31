// routes/productRoutes.js
import express from 'express';
import {
  createProduct,
  listProducts,
  deleteProduct,
  updateProductQuantity,
} from '../controllers/productController.js';

const router = express.Router();

router.post('/create', createProduct);
router.get('/', listProducts);
router.delete('/:id', deleteProduct);
router.post('/:id/update_quantity', updateProductQuantity);

export default router;
