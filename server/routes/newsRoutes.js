/**@Author: Rodrigo Vega
 * @Description: Rutas para el controlador de news.
 */

const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const verifyJWT = require('../middleware/verifyJWT');

// router.use(verifyJWT);

router
	.route('/')
	.get(newsController.getAllNews)
	.post(newsController.createNewNews)
	.patch(newsController.updateNews)
	.delete(newsController.deleteNews);

module.exports = router;
