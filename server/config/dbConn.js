/**@Author: Rodrigo Vega
 * @Description: Configuración para realizar la conexión a la base de datos.
 */

const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URI);
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectDB;
