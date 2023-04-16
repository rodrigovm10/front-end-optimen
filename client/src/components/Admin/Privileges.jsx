/**@Author: Rodrigo Vega
 * @Description: Este componente es la navegación para la parte dinamica
 * de la página.
 */

import NavBar from './NavBar';
import { useGetUsersQuery } from '../../features/users/usersApiSlice';
import Users from '../../features/users/Users';

function Privileges() {
	const {
		data: users,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetUsersQuery('usersList', {
		pollingInterval: 60000,
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
	});

	let content;

	if (isLoading) content = <p className="ml-[22%]">Loading...</p>;

	if (isError) {
		content = (
			<p className="mb-0.5 ml-[22%] inline-block p-0.5 text-red-500">
				{error?.data?.message}
			</p>
		);
	}

	if (isSuccess) {
		const { ids } = users;

		const tableContent =
			ids?.length && ids.map(userId => <Users key={userId} userId={userId} />);

		content = (
			<>
				<NavBar />
				<div className='font-monserrat" ml-[20%] flex items-center justify-center'>
					<table className="mt-[10px]">
						<thead className="sticky top-0 z-10">
							<tr>
								<th scope="col" className="border-2 border-azulito px-10">
									Username
								</th>
								<th scope="col" className="border-2 border-azulito px-10">
									Roles
								</th>
								<th scope="col" className="border-2 border-azulito px-10">
									Edit
								</th>
							</tr>
						</thead>
						<tbody>{tableContent}</tbody>
					</table>
				</div>
			</>
		);
	}

	return content;
}

export default Privileges;
