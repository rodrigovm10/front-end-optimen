/**@Author: Rodrigo Vega
 * @Description: Archivo root de las rutas, donde estará generando la vista
 * si se abre el servidor desde navegador
 */

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;
