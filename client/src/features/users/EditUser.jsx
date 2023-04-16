/**@Author: Rodrigo Vega
 * @Description: Este componente obtiene la información del usuario a ser
 * editado/eliminado en su respectivo formulario. Se llama al formulario para
 * poder pasarle el id del usuario a ser editado/eliminado
 */

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from './usersApiSlice';
import EditUserForm from './EditUserForm';

const EditUser = () => {
	const { id } = useParams();

	const user = useSelector(state => selectUserById(state, id));

	const content = user ? <EditUserForm userR={user} /> : <p>Cargando...</p>;

	return content;
};

export default EditUser;
