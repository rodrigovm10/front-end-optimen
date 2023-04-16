/**@Author: Rodrigo Vega
 * @Description: Configuración de las colecciones de la base de datos para
 * los los registros.
 */

const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
	moveType: {
		type: String,
		required: true,
	},
	dateType: {
		type: Date,
		required: true,
	},
	user: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Register', registerSchema);
