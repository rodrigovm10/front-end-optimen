/**@Author: Rodrigo Vega
 * @Description: Este componente genera un hook, para la parte persistente
 * del Login.
 */

import { useState, useEffect } from 'react';

const usePersist = () => {
	const [persist, setPersist] = useState(
		JSON.parse(localStorage.getItem('persist')) || false
	);

	useEffect(() => {
		localStorage.setItem('persist', JSON.stringify(persist));
	}, [persist]);

	return [persist, setPersist];
};
export default usePersist;
