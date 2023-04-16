/**@Author: Rodrigo Vega
 * @Description: Este componente genera los link para navegar entre la página.
 * Este componente es llamado en el footer.
 */

import { Link } from 'react-router-dom';
function Nav({
	title,
	link1,
	link2,
	link3,
	link4,
	link5,
	to1,
	to2,
	to3,
	to4,
	to5,
}) {
	return (
		<div
			className={
				'flex flex-col items-start justify-start text-sm leading-4 text-white'
			}
		>
			<p className={'font-bold uppercase tracking-wider opacity-80'}>{title}</p>
			<Link to={to1} className={'mt-3 mb-1 opacity-60'}>
				{link1}
			</Link>
			<Link to={to2} className={'mt-3 mb-1 opacity-60'}>
				{link2}
			</Link>
			<Link to={to3} className={'mt-3 mb-1 opacity-60'}>
				{link3}
			</Link>
			<Link to={to4} className={'mt-3 mb-1 opacity-60'}>
				{link4}
			</Link>
			<Link to={to5} className={'mt-3 mb-1 opacity-60'}>
				{link5}
			</Link>
		</div>
	);
}

export default Nav;
