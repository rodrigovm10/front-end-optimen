/**@Author: Rodrigo Vega
 * @Description: Este componente genera el formulario para poder editar
 * los roles de los usuarios. Verifica que tipo de usuario es el seleccionado
 * a editar, para así mostrar los permisos que mostrará.
 */

import { useState, useEffect } from 'react';
import {
	PERMISSIONS_ADMIN,
	PERMISSIONS_CONTENTCREATOR,
} from '../../config/permissions';
import { useUpdateUserMutation } from './usersApiSlice';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import NavBar from '../../components/Admin/NavBar';

const UserPrivileges = ({ user }) => {
	const navigate = useNavigate();

	const [permissions, setPermissions] = useState(user.permissions);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState(user.password);
	const [roles, setRoles] = useState(user.roles);
	const [active, setActive] = useState(user.active);

	const { isAdmin, isContentCreator } = useAuth();

	const [updateUser, { isSuccess, isError, isLoading, error }] =
		useUpdateUserMutation();

	useEffect(() => {
		console.log(isSuccess);
		if (isSuccess) {
			setPermissions([]);
			navigate(`/AdminRoot/Privileges`);
		}
	}, [isSuccess, navigate]);

	let options;
	if (user.roles.includes('Admin')) {
		options = Object.values(PERMISSIONS_ADMIN).map(permission => {
			return (
				<option key={permission} value={permission}>
					{permission}
				</option>
			);
		});
	} else if (user.roles.includes('ContentCreator')) {
		options = Object.values(PERMISSIONS_CONTENTCREATOR).map(permission => {
			return (
				<option key={permission} value={permission}>
					{permission}
				</option>
			);
		});
	}

	const onPermissionsChanged = e => {
		const values = Array.from(e.target.selectedOptions, option => option.value);
		setPermissions(values);
	};

	const onSaveUserClicked = async e => {
		console.log(permissions);
		await updateUser({ id: user.id, email, roles, active, permissions });
		console.log(user.permissions);
	};

	const validRolesClass = !Boolean(permissions.length)
		? 'border-2 border-solid border-[#F00]'
		: '';
	let content = (
		<form
			className="ml-[22%] flex max-w-[800px] flex-col flex-nowrap gap-[0.75em]"
			onSubmit={e => e.preventDefault()}
		>
			<div className="flex items-center justify-between text-xl font-semibold text-cobalto">
				<h2>
					{`${
						user.roles.includes('Admin')
							? 'Editar Privilegios Admin'
							: 'Editar Privilegios Creador de Contenido'
					}`}
				</h2>
			</div>
			<select
				id="roles"
				name="roles"
				className={`w-fit p-[0.25em] ${validRolesClass}`}
				multiple={true}
				size={options.length}
				value={permissions}
				onChange={onPermissionsChanged}
			>
				{options}
			</select>
			<input
				id={'Submit'}
				name="Submit"
				type="submit"
				title="Save"
				value="Guardar"
				onClick={onSaveUserClicked}
				className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white"
			/>
		</form>
	);
	return (
		<>
			<NavBar />
			{content}
		</>
	);
};

export default UserPrivileges;
