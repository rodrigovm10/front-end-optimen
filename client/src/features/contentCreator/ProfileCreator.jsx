/**@Author: Rodrigo Vega
 * @Description: Este componente genera un apartado para ver los datos del
 * usuario.
 */

import NavBar from '../../components/Admin/NavBar';
import useAuth from '../../Hooks/useAuth';

const ProfileCreator = () => {
	const { email, roles, status } = useAuth();
	const content = (
		<>
			<NavBar />
			<div className="ml-[20%] flex flex-col">
				<p className="my-4 text-2xl font-semibold text-cobalto">
					Email: <span className="font-normal text-black">{email}</span>
				</p>
				<p className="my-4 text-2xl font-semibold text-cobalto">
					Rol: <span className="font-normal text-black">{roles}</span>
				</p>
			</div>
		</>
	);
	return content;
};

export default ProfileCreator;
