/**@Author: Rodrigo Vega
 * @Description: Este componente genera el cuerpo de la tabla donde 
 * se muestran los usuarios existentes.
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUserById } from './usersApiSlice';
import useAuth from '../../Hooks/useAuth';

const Users = ({ userId }) => {
	const { isAdmin, isAdminRoot } = useAuth();

	const user = useSelector(state => selectUserById(state, userId));

	const navigate = useNavigate();

	if (user) {
		const handleEdit = () =>
			navigate(
				`${
					isAdmin ? `/Admin/users/${userId}` : `/AdminRoot/permission/${userId}`
				}`
			);

		const userRolesString = user.roles.toString().replaceAll(',', ', ');

		const cellStatus = user.active ? '' : 'bg-[lightgray]';

		return (
			<tr className="table__row user">
				<td
					className={`text-center" border-2 border-azulito px-10 ${cellStatus}`}
				>
					{user.email}
				</td>
				<td
					className={`text-center" border-2 border-azulito px-10 ${cellStatus}`}
				>
					{userRolesString}
				</td>
				<td
					className={`text-center" border-2 border-azulito px-10 ${cellStatus}`}
				>
					<button className="color-white p-1 text-2xl" onClick={handleEdit}>
						<FontAwesomeIcon icon={faPenToSquare} />
					</button>
				</td>
			</tr>
		);
	} else return null;
};
export default Users;
