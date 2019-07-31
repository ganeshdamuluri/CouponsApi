/**
 * Express Router configuration
 */
const CouponController = require('../controller/couponController');

const express = require('express');
const router = express.Router();

/* API routes */
router.use('/coupon', require('./api/couponRoutes'));
router.use('/user', require('./api/userRoutes'));


module.exports = router;