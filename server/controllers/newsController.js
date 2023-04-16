/**@Author: Rodrigo Vega
 * @Description: Archivo del controlador para las noticias.
 * Métodos GET, POST, PATCH, DELETE
 */

const News = require('../models/News');
const asyncHandler = require('express-async-handler');

//@desc Get new New
//@route GET / news
//@access Private
const getAllNews = asyncHandler(async (req, res) => {
	const news = await News.find().lean();
	if (!news?.length) {
		return res.status(400).json({ message: 'No News found.' });
	}
	res.json(news);
});

//@desc Create new New
//@route POST / news
//@access Private
const createNewNews = asyncHandler(async (req, res) => {
	const { title, date, description, image } = req.body;
	//Confirma data
	if (!title || !date || !description || !image) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	//Check for duplicate
	const duplicate = await News.findOne({ title }).lean().exec();
	if (duplicate) {
		return res.status(409).json({ message: 'Duplicate New' });
	}

	const newsObject = { title, date, description, image };

	//Create and store new user
	const news = await News.create(newsObject);

	if (news) {
		//created
		res.status(201).json({ message: `New news ${title} created` });
	} else {
		res.status(400).json({ message: 'Invalid news data received' });
	}
});

//@desc Update User
//@route PATCH / users
//@access Private
const updateNews = asyncHandler(async (req, res) => {
	const { id, title, date, description, image } = req.body;

	//Confirm data
	if (!id || !title || !date || !description || !image) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	const news = await News.findById(id).exec();

	if (!news) {
		return res.status(400).json({ message: 'News not found' });
	}

	//Check for duplicate
	const duplicate = await News.findOne({ title }).lean().exec();
	//Allow updates to the original user
	if (duplicate && duplicate?._id.toString() !== id) {
		return res.status(409).json({ message: 'Duplicate news' });
	}

	news.title = title;
	news.description = description;
	news.date = date;
	news.image = image;

	const updatedNews = await news.save();

	res.json({ message: `${updatedNews.title} updated` });
});

//@desc Delete new News
//@route DELETE / news
//@access Private
const deleteNews = asyncHandler(async (req, res) => {
	const { id } = req.body;

	if (!id) {
		return res.status(400).json({ message: 'User ID Required' });
	}

	const news = await News.findById(id).exec();

	if (!news) {
		return res.status(400).json({ message: 'User not Found' });
	}

	const result = await news.deleteOne();

	const reply = await `News ${result.title} with ID ${result._id} deleted`;

	res.json(reply);
});

module.exports = {
	getAllNews,
	createNewNews,
	updateNews,
	deleteNews,
};
