/**@Author: Rodrigo Vega
 * @Description: Configuración para permitir que direcciones pueden acceder
 * al servidor.
 */

const allowedOrigins = [
	'http://localhost:5173',
	'http://127.0.0.1:5173',
	'https://integradora-optimen.onrender.com',
	'https://www.dandrepairshop.com',
	'https://dandrepairshop.com',
];

module.exports = allowedOrigins;
