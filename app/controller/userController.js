/* Load User Data Access Object */
const UserDao = require('../dao/userDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load User entity */
const User = require('../model/user');

/**
 * user Controller
 */
class UserController {

    constructor() {
        this.userDao = new UserDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;
        this.userDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.userDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {
        this.userDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let user = new User();
        user.id = req.body.id;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.coupon = req.body.coupon;

        return this.userDao.update(user)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let user = new User();
        if (req.body.id) {
            user.id = req.body.id;
        }
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.coupon = req.body.coupon;

        if (req.body.id) {
            return this.userDao.createWithId(user)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.userDao.create(user)
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

        this.userDao.deleteById(id)
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

        this.userDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = UserController;