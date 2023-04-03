/**@Author: Rodrigo Vega
 * @Description: Este componente genera el formulario para
 * poder añadir usuarios.
 */

import { useState, useEffect } from 'react';
import { useAddNewUserMutation } from './usersApiSlice';
import { useAddNewRegisterMutation } from '../register/registerApiSlice';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { ROLES } from '../../config/roles';
import NavBar from '../../components/Admin/NavBar';

const USER_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PWD_REGEX = /^[A-z0-9!@#$%]{8,12}$/;

const NewUserForm = () => {
	const { email } = useAuth();

	const [addNewUser, { isLoading, isSuccess, isError, error }] =
		useAddNewUserMutation();

	const [addNewRegister] = useAddNewRegisterMutation();

	const navigate = useNavigate();

	const [moveType, setMoveType] = useState('');
	const [dateType, setDateType] = useState('');
	const [user, setUser] = useState();
	const [emailU, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [roles, setRoles] = useState(['Admin']);
	const [permissions, setPermissions] = useState([
		'Ver Registros',
		'Añadir Usuarios',
		'Eliminar Usuarios',
		'Editar Usuario',
		'Añadir Noticias',
		'Eliminar Noticias',
		'Editar Noticia',
	]);

	useEffect(() => {
		setValidEmail(
			USER_REGEX.test(emailU) && emailU.endsWith('@optimen.com.mx')
		);
	}, [emailU]);

	useEffect(() => {
		setValidPassword(PWD_REGEX.test(password));
	}, [password]);

	useEffect(() => {
		if (isSuccess) {
			setEmail('');
			setPassword('');
			setRoles([]);
			setPermissions([]);
			navigate('/Admin/Profile');
		}
	}, [isSuccess, navigate]);

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);

	const onRolesChanged = e => {
		const values = Array.from(e.target.selectedOptions, option => option.value);
		setRoles(values);
	};

	const canSave =
		[roles.length, validEmail, validPassword].every(Boolean) && !isLoading;

	const date = new Date().toISOString().slice(0, 10);

	const onClickSave = () => {
		setMoveType('Se creó un usuario');
		setDateType(date);
		setUser(email);
	};

	const onSaveUserClicked = async e => {
		e.preventDefault();
		if (canSave) {
			let email = emailU;
			await addNewUser({ email, password, roles, permissions });
			await addNewRegister({ moveType, dateType, user });
		}
	};

	const options = Object.values(ROLES).map(role => {
		return (
			<option key={role} value={role}>
				{role}
			</option>
		);
	});

	const errClass =
		isError || !validEmail
			? 'inline-block text-red-500 mb-[0.5em] font-semibold text-xl text-center'
			: 'offscreen';
	const validUserClass = !validEmail
		? 'border-2 border-solid border-[#f00]'
		: '';
	const validPwdClass = !validPassword
		? 'border-2 border-solid border-[#f00]'
		: '';
	const validRolesClass = !Boolean(roles.length)
		? 'border-2 border-solid border-[#f00]'
		: '';

	const canSaveClass = 'opacity-60 cursor-auto';

	const content = (
		<>
			<NavBar />
			<form
				className="ml-[22%] flex max-w-[800px] flex-col flex-nowrap justify-center gap-[0.75em] overflow-hidden font-monserrat"
				onSubmit={onSaveUserClicked}
			>
				<div className="flex items-center justify-between text-xl font-semibold text-cobalto">
					<h2>Nuevo Usuario</h2>
				</div>
				<label
					htmlFor="emailU"
					className="text-sm font-medium leading-5 tracking-wide"
				>
					Email: <span className="whitespace-nowrap">[Correo de Optimen]</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validUserClass}`}
					type="email"
					id="email"
					name="email"
					value={emailU}
					onChange={onEmailChanged}
				/>
				<label
					htmlFor="password"
					className="text-sm font-medium leading-5 tracking-wide"
				>
					Contraseña:{' '}
					<span className="whitespace-nowrap">
						[8-12 carácteres incl. !@#$%]
					</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validPwdClass}`}
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={onPasswordChanged}
				/>
				<label
					className="text-sm font-medium leading-5 tracking-wide"
					htmlFor="roles"
				>
					Rol:
				</label>
				<select
					className={`w-fit p-[0.25em] ${validRolesClass}`}
					type="password"
					id="roles"
					name="roles"
					size="3"
					value={roles}
					onChange={onRolesChanged}
				>
					{options}
				</select>
				<input
					id={'Submit'}
					name="Submit"
					type="submit"
					tite="Save"
					value={'Guardar'}
					disabled={!canSave}
					onClick={onClickSave}
					className={`w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white ${
						!canSave ? canSaveClass : ''
					}`}
				/>
				{!validEmail ? (
					<p className={`font-monserrat ${errClass}`}>
						El email debe contener el dominio '@optimen.com.mx'
					</p>
				) : null}
				<p className={`font-monserrat ${errClass}`}>{error?.data?.message}</p>
			</form>
		</>
	);

	return content;
};

export default NewUserForm;
