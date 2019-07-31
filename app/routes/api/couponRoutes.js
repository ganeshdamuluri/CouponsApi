/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const CouponController = require('../../controller/couponController');
const couponController = new CouponController();

/**
 * coupon Entity routes
 */
router.get('/count', function (req, res) {
    couponController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    couponController.exists(req, res);
});

router.get('/:id', function (req, res) {
    couponController.findById(req, res);
});

router.get('/', function (req, res) {
    couponController.findAll(res);
});

router.put('/:id', function (req, res) {
    couponController.update(req, res);
});

router.post('/create', function (req, res) {
    couponController.create(req, res);
});

router.delete('/:id', function (req, res) {
    couponController.deleteById(req, res);
});

module.exports = router;