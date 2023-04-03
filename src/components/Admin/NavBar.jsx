/**@Author: Rodrigo Vega
 * @Description: Este componente genera la barra de navegación para las distintas
 * opciones dee los usuarios con inicio de sesión.
 */

import Links from './Links';
import { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom ';

import { useSendLogoutMutation } from '../../features/auth/authApiSlice';

import useAuth from '../../Hooks/useAuth';

const ADMIN_REGEX = /^\/AdminView(\/)?$/;
const USERS_REGEX = /^\/AdminView\/users(\/)?$/;

function NavBar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [sendLogout, { isLoading, isSuccess, isError, error }] =
		useSendLogoutMutation();

	useEffect(() => {
		if (isSuccess) navigate('/Login');
	}, [isSuccess, navigate]);

	const onLogoutClicked = () => {
		sendLogout();
		navigate('/Login');
	};

	if (isLoading) return <p>Logging Out...</p>;

	if (isError) return <p>Error: {error.data?.message}</p>;

	let dashClass = null;
	if (!ADMIN_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
		dashClass = 'max-w-[800px]';
	}

	const logoutButton = (
		<input
			className="cursor-pointer text-[#dadada] hover:opacity-80"
			type="submit"
			value="Salir"
			title="Logout"
			onClick={onLogoutClicked}
		/>
	);

	const { email, status, isAdminRoot, isAdmin, isContentCreator, permissions } =
		useAuth();

	return (
		<>
			<div className="fixed m-0 h-[100%] w-[20%] overflow-auto bg-cobalto p-0 text-center">
				<Links
					to={`${
						isAdmin
							? '/Admin'
							: isContentCreator
							? '/ContentCreator'
							: '/AdminRoot'
					}`}
					name="Inicio"
				></Links>
				{isAdmin && permissions.includes('Ver Registros') && (
					<Links
						to="/Admin/UpdatesRegister"
						name="Registro de Actualizaciones"
					/>
				)}
				{isAdmin && <Links to="/Admin/Profile" name="Perfiles" />}
				{isAdmin && permissions.includes('Añadir Usuarios') && (
					<Links to="/Admin/AddUsers" name="Añadir Usuarios" />
				)}
				{isAdminRoot && <Links to="/AdminRoot/Privileges" name="Permisos" />}
				{isContentCreator && (
					<Links to="/ContentCreator/Profile" name="Perfil" />
				)}
				{isContentCreator && permissions.includes('Añadir Noticias') && (
					<Links to="/ContentCreator/AddNews" name="Añadir Noticias" />
				)}
				{isContentCreator && permissions.includes('Ver Noticias') && (
					<Links to="/ContentCreator/SeeNews" name="Ver Noticias" />
				)}
				{logoutButton}

				<p className="my-10 text-xs text-[#dadada] ">Usuario Actual: {email}</p>
				<p className="my-10 text-xs text-[#dadada] ">Tipo Usuario: {status}</p>
			</div>
		</>
	);
}

export default NavBar;
