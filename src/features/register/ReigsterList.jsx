/**@Author: Rodrigo Vega
 * @Description: Este componente genera el encabezado de la tabla donde
 * se muestran los registros de las noticias
 */

import { useGetRegisterQuery } from './registerApiSlice';
import Register from './Register';

const RegisterList = () => {
	const {
		data: register,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetRegisterQuery('registerList', {
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
		const { ids } = register;

		const tableContent =
			ids?.length &&
			ids.map(registerId => (
				<Register key={registerId} registerId={registerId} />
			));

		content = (
			<div className='font-monserrat" ml-[20%] flex items-center justify-center'>
				<table className="mt-[10px]">
					<thead className="sticky top-0 z-10">
						<tr>
							<th scope="col" className="border-2 border-azulito px-10">
								Tipo de Movimiento
							</th>
							<th scope="col" className="border-2 border-azulito px-10">
								Fecha de Movimiento
							</th>
							<th scope="col" className="border-2 border-azulito px-10">
								Usuario
							</th>
						</tr>
					</thead>
					<tbody>{tableContent}</tbody>
				</table>
			</div>
		);
	}

	return content;
};

export default RegisterList;
