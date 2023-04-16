const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');
const verifyJWT = require('../middleware/verifyJWT');

// router.use(verifyJWT);

router.route('/').patch(permissionController.updatePermission);

module.exports = router;
