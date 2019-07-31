/**
 * User Entity (ES6 Class)
 */

class User {
    constructor(id, firstName, lastName, coupon) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.coupon = coupon;
    }
}

module.exports = User;