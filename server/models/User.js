/**@Author: Rodrigo Vega
 * @Description: Configuración de las colecciones de la base de datos para
 * los usuarios.
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	roles: [
		{
			type: String,
			default: 'ContentCreator',
		},
	],
	active: {
		type: Boolean,
		default: true,
	},
	permissions: [
		{
			type: String,
			default: 'All',
		},
	],
});

module.exports = mongoose.model('User', userSchema);
