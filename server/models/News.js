/**@Author: Rodrigo Vega
 * @Description: Configuración de las colecciones de la base de datos para
 * las noticias.
 */

const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('News', newsSchema);
