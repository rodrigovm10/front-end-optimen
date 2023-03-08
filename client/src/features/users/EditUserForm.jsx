import { useState, useEffect } from 'react';
import { useUpdateUserMutation, useDeleteUserMutation } from './usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { faSave, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ROLES } from '../../config/roles';
import NavBar from '../../components/Admin/NavBar';

const USER_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const EditUserForm = ({ user }) => {
	const [updateUser, { isLoading, isSuccess, isError, error }] =
		useUpdateUserMutation();

	const [
		deleteUser,
		{ isSuccess: isDelSuccess, isError: isDelError, error: delerror },
	] = useDeleteUserMutation();

	const navigate = useNavigate();

	const [email, setEmail] = useState(user.email);
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [roles, setRoles] = useState(user.roles);
	const [active, setActive] = useState(user.active);

	useEffect(() => {
		setValidEmail(USER_REGEX.test(email));
	}, [email]);

	useEffect(() => {
		setValidPassword(PWD_REGEX.test(password));
	}, [password]);

	useEffect(() => {
		console.log(isSuccess);
		if (isSuccess || isDelSuccess) {
			setEmail('');
			setPassword('');
			setRoles([]);
			navigate('/AdminView/Profile');
		}
	}, [isSuccess, isDelSuccess, navigate]);

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);

	const onRolesChanged = e => {
		const values = Array.from(e.target.selectedOptions, option => option.value);
		setRoles(values);
	};

	const onActiveChanged = () => setActive(prev => !prev);

	const onSaveUserClicked = async e => {
		if (password) {
			await updateUser({ id: user.id, email, password, roles, active });
		} else {
			await updateUser({ id: user.id, email, roles, active });
		}
	};

	const onDeleteUserClicked = async () => {
		await deleteUser({ id: user.id });
	};

	const options = Object.values(ROLES).map(role => {
		return (
			<option key={role} value={role}>
				{role}
			</option>
		);
	});

	let canSave;
	if (password) {
		canSave =
			[roles.length, validEmail, validPassword].every(Boolean) && !isLoading;
	} else {
		canSave = [roles.length, validEmail].every(Boolean) && !isLoading;
	}

	const errClass =
		isError || isDelError
			? 'inline-block text-red p-[0.25em] mb-[0.5em]'
			: 'offscreen';
	const validUserClass = !validEmail
		? 'border-2 border-solid border-[#F00]'
		: '';
	const validPwdClass =
		password && !validPassword ? 'border-2 border-solid border-[#F00]' : '';
	const validRolesClass = !Boolean(roles.length)
		? 'border-2 border-solid border-[#F00]'
		: '';

	const errContent = (error?.data?.message || delerror?.data?.message) ?? '';

	const canSaveClass = 'opacity-60 cursor-auto';

	const content = (
		<>
			<NavBar />
			<p className={errClass}>{errContent}</p>

			<form
				className="ml-[22%] flex max-w-[800px] flex-col flex-nowrap gap-[0.75em]"
				onSubmit={e => e.preventDefault()}
			>
				<div className="flex items-center justify-between text-xl font-semibold text-cobalto">
					<h2>Edit User</h2>
				</div>
				<label
					className="text-sm font-medium leading-5 tracking-wide"
					htmlFor="email"
				>
					Email: <span className="nowrap">[3-20 letters]</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validUserClass}`}
					id="email"
					name="email"
					type="text"
					autoComplete="off"
					value={email}
					onChange={onEmailChanged}
				/>

				<label
					className="text-sm font-medium leading-5 tracking-wide"
					htmlFor="password"
				>
					Password:{' '}
					<span className="whitespace-nowrap">[empty = no change]</span>{' '}
					<span className="whitespace-nowrap">[4-12 chars incl. !@#$%]</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validPwdClass}`}
					id="password"
					name="password"
					type="password"
					value={password}
					onChange={onPasswordChanged}
				/>
				<label
					className="text-sm font-medium leading-5 tracking-wide"
					htmlFor="roles"
				>
					Roles Asignados:
				</label>
				<select
					id="roles"
					name="roles"
					className={`w-fit p-[0.25em] ${validRolesClass}`}
					multiple={true}
					size="2"
					value={roles}
					onChange={onRolesChanged}
				>
					{options}
				</select>
				<label
					className="text-sm font-medium leading-5 tracking-wide"
					htmlFor="user-active"
				>
					Activo:
					<input
						className="h-4 w-4"
						id="user-active"
						name="user-active"
						type="checkbox"
						checked={active}
						onChange={onActiveChanged}
					/>
				</label>
				<div>
					<input
						id={'Submit'}
						name="Submit"
						type="submit"
						title="Save"
						value="Guardar"
						disabled={!canSave}
						onClick={onSaveUserClicked}
						className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white"
					/>
					<input
						id={'Submit'}
						name="Submit"
						type="submit"
						title="Delete"
						value="Eliminar"
						disabled={!canSave}
						onClick={onDeleteUserClicked}
						className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-red-500 p-4 text-center leading-4 text-white"
					/>
				</div>
			</form>
		</>
	);

	return content;
};

export default EditUserForm;