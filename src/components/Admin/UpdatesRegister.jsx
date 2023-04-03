/**@Author: Rodrigo Vega
 * @Description: Este componente llama a la lista de los registros.
 */

import NavBar from './NavBar';
import RegisterList from '../../features/register/ReigsterList';

function UpdatesRegister() {
	return (
		<>
			<NavBar />
			<RegisterList />
		</>
	);
}

export default UpdatesRegister;
