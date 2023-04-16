/**@Author: Rodrigo Vega
 * @Description: Este componente genera el formulario para añadir una nueva
 * noticia.
 */

import { useState, useEffect } from 'react';
import { useAddNewNewsMutation } from './contentCreatorApiSlice';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/Admin/NavBar';

const NewForm = () => {
	const [addNewNews, { isLoading, isSuccess, isError, error }] =
		useAddNewNewsMutation();

	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	// const [date, setDate] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');

	useEffect(() => {
		if (isSuccess) {
			setTitle('');
			// setDate('');
			setDescription('');
			setImage('');
			navigate('/ContentCreator/SeeNews');
		}
	}, [isSuccess, navigate]);

	const onTitleChanged = e => setTitle(e.target.value);
	// const onDateChanged = e => setDate(e.target.value);
	const onDescriptionChanged = e => setDescription(e.target.value);
	const onImageChanged = e => setImage(e.target.value);

	const canSave = !isLoading;

	let dateToday = new Date().toISOString().slice(0, 10);

	const onSaveNewsClicked = async e => {
		e.preventDefault();
		if (canSave) {
			let date = dateToday;
			await addNewNews({ title, date, description, image });
		}
	};

	const errClass = isError
		? 'inline-block text-red-500 mb-[0.5em] font-semibold text-xl text-center'
		: 'offscreen';

	const content = (
		<>
			<NavBar />
			<p className={`font-monserrat ${errClass}`}>{error?.data?.message}</p>
			<form
				className="ml-[22%] flex max-w-[800px] flex-col flex-nowrap justify-center gap-[0.75em] overflow-hidden font-monserrat"
				onSubmit={onSaveNewsClicked}
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
					value={dateToday}
					disabled={true}
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
					className={`w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white`}
				/>
			</form>
		</>
	);

	return content;
};

export default NewForm;
