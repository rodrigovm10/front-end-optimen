/**@Author: Rodrigo Vega
 * @Description: Este componente genera parte de una tabla, siendo más especificos,
 * los encabezados de la tablas.
 */

import { useGetNewsQuery } from './contentCreatorApiSlice';
import NewsCreated from './NewsCreated';
import NavBar from '../../components/Admin/NavBar';

const NewsList = () => {
	const {
		data: news,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetNewsQuery('newsList', {
		pollingInterval: 60000,
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
	});

	let content;

	if (isLoading) content = <p className="ml-[22%]">Loading...</p>;

	if (isError) {
		content = (
			<>
				<NavBar />
				<p className="mb-0.5 ml-[22%] inline-block p-0.5 text-red-500">
					{error?.data?.message}
				</p>
			</>
		);
	}

	if (isSuccess) {
		const { ids } = news;

		const tableContent =
			ids?.length &&
			ids.map(newsId => <NewsCreated key={newsId} newsId={newsId} />);

		content = (
			<>
				<NavBar />
				<div className='font-monserrat" ml-[20%] flex items-center justify-center'>
					<table className="mt-[10px]">
						<thead className="sticky top-0 z-10">
							<tr>
								<th scope="col" className="border-2 border-azulito px-10">
									Titulo
								</th>
								<th scope="col" className="border-2 border-azulito px-10">
									Fecha
								</th>
								<th scope="col" className="border-2 border-azulito px-10">
									Descripción
								</th>
								<th scope="col" className="border-2 border-azulito px-10">
									Editar
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
};

export default NewsList;
