/**@Author: Rodrigo Vega
 * @Description: Este componente genera que si un usuario tiene un rol permitido
 * podrá acceder al contenido después de iniciar sesión.
 */

import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
	const location = useLocation();
	const { roles } = useAuth();

	const content = roles.some(role => allowedRoles.includes(role)) ? (
		<Outlet />
	) : (
		<Navigate to="/Login" state={{ from: location }} replace />
	);

	return content;
};

export default RequireAuth;
