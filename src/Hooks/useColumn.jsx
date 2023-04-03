import { useMemo } from 'react';
export default function useColumns() {
	const columns = useMemo(
		() => [
			{ Header: 'Tipo de Movimiento', accessor: 'tipoMovimiento' },
			{ Header: 'Fecha de Movimiento', accessor: 'fechaMovimiento' },
			{ Header: 'Usuario', accessor: 'usuario' },
		],
		[]
	);

	return columns;
}
