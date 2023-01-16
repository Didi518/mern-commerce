const express = require('express');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require('../controllers/productController');
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');

const router = express.Router();

router.route('/products').get(getAllProducts);
router
  .route('/admin/new-product')
  .post(isAuthenticatedUser, authorizedRoles('admin'), createProduct);
router
  .route('/admin/product/:id')
  .put(isAuthenticatedUser, authorizedRoles('admin'), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles('admin'), deleteProduct);
router.route('/product/:id').get(getSingleProduct);
router
  .route('/review')
  .put(isAuthenticatedUser, createProductReview)
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
