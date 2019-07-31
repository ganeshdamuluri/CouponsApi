/**
 * Coupon Entity (ES6 Class)
 */

class Coupon {
    constructor(id, maker, model, year, user) {
        this.id = id;
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.user = user;
    }
}

module.exports = Coupon;