const router = require('express').Router();
const serviceController = require('../controllers/serviceController');

// POST
router.route('/services').post((req, res) => serviceController.create(req, res));

// GET ALL
router.route('/services').get((req, res) => serviceController.getAll(req, res));

// GET BY ID
router.route('/services/:id').get((req, res) => serviceController.get(req, res));

// DELETE
router.route('/services/:id').delete((req, res) => serviceController.delete(req, res));

// UPDATE
router.route('/services/:id').put((req, res) => serviceController.update(req, res));

module.exports = router;