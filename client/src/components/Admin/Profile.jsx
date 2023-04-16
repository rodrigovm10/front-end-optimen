/**@Author: Rodrigo Vega
 * @Description: Este componente llama a la lista de usuarios.
 */

import NavBar from './NavBar';
import UsersList from '../../features/users/UsersList';
function Profile() {
	return (
		<>
			<NavBar />
			<UsersList />
		</>
	);
}

export default Profile;
