/**@Author: Rodrigo Vega
 * @Description: Archivo del controlador para los registros.
 * Métodos GET, POST
 */

const Register = require('../models/Register');
const asyncHandler = require('express-async-handler');

//@desc Get new User
//@route GET / users
//@access Private
const getAllRegisters = asyncHandler(async (req, res) => {
	const register = await Register.find().lean();

	if (!register?.length) {
		return res.status(400).json({ message: 'No reigters found.' });
	}
	res.json(register);
});

//@desc Create new User
//@route POST / users
//@access Private
const createNewRegister = asyncHandler(async (req, res) => {
	const { moveType, dateType, user } = req.body;
	//Confirma data
	if (!moveType || !dateType || !user) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	const register = await Register.create({ moveType, dateType, user });

	if (register) {
		return res.status(201).json({ message: 'New register created' });
	} else {
		return res.status(400).json({ message: 'Invalid register data received' });
	}
});

module.exports = {
	getAllRegisters,
	createNewRegister,
};
