/* Load coupon Data Access Object */
const CouponDao = require('../dao/couponDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load coupon entity */
const coupon = require('../model/coupon');

/**
 * coupon Controller
 */
class couponController {

    constructor() {
        this.couponDao = new CouponDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.couponDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.couponDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.couponDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let coupon = new Coupon();
        coupon.id = req.body.id;
        coupon.maker = req.body.maker;
        coupon.model = req.body.model;
        coupon.year = req.body.year;
        coupon.user = req.body.user;

        return this.couponDao.update(coupon)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let coupon = new Coupon();
        if (req.body.id) {
            coupon.id = req.body.id;
        }
        coupon.maker = req.body.maker;
        coupon.model = req.body.model;
        coupon.year = req.body.year;
        coupon.user = req.body.user;

        if (req.body.id) {
            return this.couponDao.createWithId(coupon)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.couponDao.create(coupon)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.couponDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.couponDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = couponController;