/**@Author: Rodrigo Vega
 * @Description: Este componente obtiene los privilegios que tiene un usuario,
 * esto para que los permisos puedan ser editados.
 */

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from './usersApiSlice';
import UserPrivileges from './UserPrivileges';

const EditPermission = () => {
	const { id } = useParams();

	const user = useSelector(state => selectUserById(state, id));

	const content = user ? <UserPrivileges user={user} /> : <p>Cargando...</p>;

	return content;
};

export default EditPermission;
