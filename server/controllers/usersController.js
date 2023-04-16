/**@Author: Rodrigo Vega
 * @Description: Archivo del controlador para los usuarios.
 * Métodos GET, POST, PATCH, DELETE
 */

const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

//@desc Get new User
//@route GET / users
//@access Private
const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find().select('-password').lean();
	if (!users?.length) {
		return res.status(400).json({ message: 'No users found.' });
	}
	res.json(users);
});

//@desc Create new User
//@route POST / users
//@access Private
const createNewUser = asyncHandler(async (req, res) => {
	const { email, password, roles, permissions } = req.body;
	//Confirma data
	if (!email || !password || !Array.isArray(roles) || !roles.length) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	//Check for duplicate
	const duplicate = await User.findOne({ email }).lean().exec();
	if (duplicate) {
		return res.status(409).json({ message: 'Duplicate email' });
	}

	//Hash password
	const hashedPwd = await bcrypt.hash(password, 10);

	const userObject = { email, password: hashedPwd, roles, permissions };

	//Create and store new user
	const user = await User.create(userObject);

	if (user) {
		//created
		res.status(201).json({ message: `New user ${email} created` });
	} else {
		res.status(400).json({ message: 'Invalid user data received' });
	}
});

//@desc Update User
//@route PATCH / users
//@access Private
const updateUser = asyncHandler(async (req, res) => {
	const { id, email, roles, active, password, permissions } = req.body;

	//Confirm data
	if (
		!id ||
		!email ||
		!Array.isArray(roles) ||
		!roles.length ||
		typeof active !== 'boolean'
	) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	const user = await User.findById(id).exec();

	if (!user) {
		return res.status(400).json({ message: 'User not found' });
	}

	//Check for duplicate
	const duplicate = await User.findOne({ email }).lean().exec();
	//Allow updates to the original user
	if (duplicate && duplicate?._id.toString() !== id) {
		return res.status(409).json({ message: 'Duplicate email' });
	}

	user.email = email;
	user.roles = roles;
	user.active = active;
	user.permissions = permissions;

	if (password) {
		//hash password
		user.password = await bcrypt.hash(password, 10);
	}

	const updatedUser = await user.save();

	res.json({ message: `${updatedUser.email} updated` });
});

//@desc Delete new User
//@route DELETE / users
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
	const { id } = req.body;

	if (!id) {
		return res.status(400).json({ message: 'User ID Required' });
	}

	// const notes = swait Note.findOne({email: id}).lean().exec();

	// if(notes?.length){
	// 	return res.status(400).json({message: 'User has assigned notes'})
	// }

	const user = await User.findById(id).exec();

	if (!user) {
		return res.status(400).json({ message: 'User not Found' });
	}

	const result = await user.deleteOne();

	const reply = await `User ${result.email} with ID ${result._id} deleted`;

	res.json(reply);
});

module.exports = {
	getAllUsers,
	createNewUser,
	updateUser,
	deleteUser,
};
