/* Load Coupon entity */
const Coupon = require('../model/coupon');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Coupon Data Access Object
 */
class CouponDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, maker, model, year, user FROM coupon WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Coupon(row.id, row.maker, row.model, row.year, row.user));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM coupon";
        return this.common.findAll(sqlRequest).then(rows => {
            let coupons = [];
            for (const row of rows) {
                coupons.push(new Coupon(row.id, row.maker, row.model, row.year, row.user));
            }
            return coupons;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM coupon";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Coupon
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Coupon) {
        let sqlRequest = "UPDATE coupon SET " +
            "maker=$maker, " +
            "model=$model, " +
            "year=$year, " +
            "user=$user " +
            "WHERE id=$id";

        let sqlParams = {
            $maker: Coupon.maker,
            $model: Coupon.model,
            $year: Coupon.year,
            $user: Coupon.user,
            $id: Coupon.id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Coupon
     * returns database insertion status
     */
    create(Coupon) {
        let sqlRequest = "INSERT into coupon (maker, model, year, user) " +
            "VALUES ($maker, $model, $year, $user)";
        let sqlParams = {
            $maker: Coupon.maker,
            $model: Coupon.model,
            $year: Coupon.year,
            $user: Coupon.user
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided id in the database
     * @params Coupon
     * returns database insertion status
     */
    createWithId(Coupon) {
        let sqlRequest = "INSERT into coupon (id, maker, model, year, user) " +
            "VALUES ($id, $maker, $model, $year, $user)";
        let sqlParams = {
            $id: Coupon.id,
            $maker: Coupon.maker,
            $model: Coupon.model,
            $year: Coupon.year,
            $user: Coupon.user
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM coupon WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM coupon WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = CouponDao;