/**@Author: Rodrigo Vega
 * @Description: Este componente genera la navegación que se visualiza en
 * los apartados principales de la página.
 */

import { Link } from 'react-router-dom';
import LogoBlanco from '../assets/Imagenes-Optimen/logo optimen blanco.png';
import { useTranslation } from 'react-i18next';

function Navigation() {
	const [t, i18n] = useTranslation('global');

	return (
		<div
			className={'flex items-center justify-start bg-cobalto py-2 pr-10 pl-8'}
		>
			<div className={'relative flex flex-1 items-center justify-between'}>
				<Link to={'/'}>
					<img className={'w-15 h-12'} src={LogoBlanco} alt={'Logo Optimen'} />
				</Link>
				<div>
					<nav className={'font-monserrat text-xs uppercase '}>
						<Link
							to={'/'}
							className={'p-5 tracking-widest text-white opacity-60'}
						>
							{t('navigation.home')}
						</Link>

						<Link
							to={'/About Us'}
							className={'p-5 tracking-widest text-white opacity-60'}
						>
							{t('navigation.about')}
						</Link>
						<Link
							to={'/Customers'}
							className={'p-5 tracking-widest text-white opacity-60'}
						>
							{t('navigation.customers')}
						</Link>
						<Link
							to={'/News'}
							className={'p-5 tracking-widest text-white opacity-60 '}
						>
							{t('navigation.news')}
						</Link>
						<Link
							to={'/Contact Us'}
							className={'p-5 text-xs tracking-widest text-white opacity-60 '}
						>
							{t('navigation.contact')}
						</Link>
					</nav>
				</div>
				<div className="flex justify-center gap-x-2 p-5 text-xs tracking-widest text-white opacity-60">
					<button onClick={() => i18n.changeLanguage('es')}>ES</button>
					<button onClick={() => i18n.changeLanguage('en')}>EN</button>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
