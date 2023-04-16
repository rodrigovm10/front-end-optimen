/**@Author: Rodrigo Vega
 * @Description: Rutas para el controlador de register.
 */

const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT);

router
	.route('/')
	.get(registerController.getAllRegisters)
	.post(registerController.createNewRegister);

module.exports = router;
