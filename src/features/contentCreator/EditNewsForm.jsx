/**@Author: Rodrigo Vega
 * @Description: Este componente genera el formulario para editar la noticia
 */

import { useState, useEffect } from 'react';
import {
	useUpdateNewsMutation,
	useDeleteNewsMutation,
} from './contentCreatorApiSlice';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/Admin/NavBar';

const EditNewsForm = ({ news }) => {
	const [updateNews, { isLoading, isSuccess, isError, error }] =
		useUpdateNewsMutation();

	const [
		deleteNews,
		{ isSuccess: isDelSuccess, isError: isDelError, error: delerror },
	] = useDeleteNewsMutation();

	const navigate = useNavigate();

	const [title, setTitle] = useState(news.title);
	const [date, setDate] = useState(news.date);
	const [description, setDescription] = useState(news.description);
	const [image, setImage] = useState(news.image);

	useEffect(() => {
		console.log(isSuccess);
		if (isSuccess || isDelSuccess) {
			setTitle('');
			setDescription('');
			setImage('');
			navigate(`/ContentCreator/SeeNews`);
		}
	}, [isSuccess, isDelSuccess, navigate]);

	const onTitleChanged = e => setTitle(e.target.value);
	const onDescriptionChanged = e => setDescription(e.target.value);
	const onImageChanged = e => setImage(e.target.value);

	const onActiveChanged = () => setActive(prev => !prev);

	// const date = new Date().toISOString().slice(0, 10);

	const onSaveNewsClicked = async e => {
		await updateNews({ id: news.id, title, date, description, image });
	};

	const onDeleteNewsClicked = async () => {
		await deleteNews({ id: news.id });
	};

	let canSave;

	canSave = !isLoading;

	const errContent = (error?.data?.message || delerror?.data?.message) ?? '';

	const errClass =
		isError || isDelError
			? 'inline-block text-red p-[0.25em] mb-[0.5em] ml-[20%]'
			: 'offscreen ';

	const content = (
		<>
			<NavBar />
			<p className={errClass}>{errContent}</p>
			<form
				className="ml-[22%] flex max-w-[800px] flex-col flex-nowrap justify-center gap-[0.75em] overflow-hidden font-monserrat"
				onSubmit={e => e.preventDefault()}
			>
				<div className="flex items-center justify-between text-xl font-semibold text-cobalto">
					<h2>Nueva Noticia</h2>
				</div>
				<label
					htmlFor="nombreNoticia"
					className="text-sm font-medium leading-5 tracking-wide"
				>
					Nombre de la Noticia
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]`}
					type="text"
					id="nombreNoticia"
					name="nombreNoticia"
					value={title}
					onChange={onTitleChanged}
				/>
				<label
					htmlFor="fechaNoticia"
					className="text-sm font-medium leading-5 tracking-wide"
				>
					Fecha de la Noticia:
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] `}
					type="text"
					id="fechaNoticia"
					name="fechaNoticia"
					value={date}
					disabled={false}
				/>
				<label
					htmlFor="descNoticia"
					className="text-sm font-medium leading-5 tracking-wide"
				>
					Descripción de la noticia:
				</label>
				<textarea
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] `}
					heigth="200"
					id="descNoticia"
					name="descNoticia"
					value={description}
					onChange={onDescriptionChanged}
				></textarea>
				<label
					htmlFor="imgNoticia"
					className="text-sm font-medium leading-5 tracking-wide"
				>
					Imagen de la Noticia:
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] `}
					type="text"
					id="imgNoticia"
					name="imgNoticia"
					value={image}
					onChange={onImageChanged}
				/>
				<input
					id={'Submit'}
					name="Submit"
					type="submit"
					tite="Save"
					value={'Guardar'}
					disabled={!canSave}
					onClick={onSaveNewsClicked}
					className={`w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white`}
				/>
				<input
					id={'Submit'}
					name="Submit"
					type="submit"
					tite="Delete"
					value={'Eliminar'}
					disabled={!canSave}
					onClick={onDeleteNewsClicked}
					className={`w-full cursor-pointer rounded-lg border-[1px] border-solid bg-red-600 p-4 text-center leading-4 text-white`}
				/>
				{/* <p className={`font-monserrat ${errClass}`}>{error?.data?.message}</p> */}
			</form>
		</>
	);
	return content;
};

export default EditNewsForm;
