import { useMemo } from 'react';
import useAuth from './useAuth';

export default function useRows() {
	const {} = useAuth();

	const rows = useMemo(
		() => [
			{
				tipoMovimiento: 'Update',
				fechaMovimiento: '24/02/2023',
				usuario: 'itzel_fuentes@optimen.com.mx',
			},
		],
		[]
	);

	return rows;
}
