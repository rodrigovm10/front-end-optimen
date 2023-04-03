/**@Author: Rodrigo Vega
 * @Description: Este componente un Link para navegación entre las distintas opciones
 * para los usuarios con distintos roles.
 */

import { Link } from 'react-router-dom';

function Links({ to, name }) {
	return (
		<div className="my-10 text-[#dadada] hover:opacity-80">
			<Link to={to}>{name}</Link>
		</div>
	);
}

export default Links;
