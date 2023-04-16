/**@Author: Rodrigo Vega
 * @Description: Archivo del controlador para los permisos.
 */

const User = require('../models/User');
const asyncHandler = require('express-async-handler');

//@desc Update User
//@route PATCH / users
//@access Private
const updatePermission = asyncHandler(async (req, res) => {
	const { id, permissions } = req.body;

	if (!Array.isArray(permissions) || !permissions.length) {
		return res.status(400).json({ message: 'Permission is required' });
		console.log(permissions);
	}

	const user = await User.findById(id).exec();

	if (!user) {
		return res.status(400).json({ message: 'User not found' });
	}

	user.permissions = permissions;

	const updatedUser = await user.save();

	res.json({ message: `${updatedUser.email} permissions updated` });
});

module.exports = {
	updatePermission,
};
