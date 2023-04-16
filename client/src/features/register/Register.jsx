/**@Author: Rodrigo Vega
 * @Description: Este componente genera el cuerpo de la tabla donde
 * se muestran los registros de creación, edición o eliminación de noticias.
 */

import { selectRegisterById, useGetRegisterQuery } from './registerApiSlice';
import { memo } from 'react';

const Register = ({ registerId }) => {
	const { register } = useGetRegisterQuery('registerList', {
		selectFromResult: ({ data }) => ({
			register: data?.entities[registerId],
		}),
	});

	const created = new Date(register.dateType).toLocaleString('es-MX', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	if (register) {
		return (
			<tr className="table__row register">
				<td className={`text-center" border-2 border-azulito px-10`}>
					{register.moveType}
				</td>
				<td className={`text-center" border-2 border-azulito px-10`}>
					{created}
				</td>
				<td className={`text-center" border-2 border-azulito px-10`}>
					{register.user}
				</td>
			</tr>
		);
	} else return null;
};

const memoizedRegister = memo(Register);

export default memoizedRegister;
