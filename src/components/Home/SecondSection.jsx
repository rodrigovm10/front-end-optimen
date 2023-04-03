/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para generar la segunda sección
 * del apartado de home.
 */

import LazyLoad from 'react-lazyload';
import Esr from '../../assets/Imagenes-Optimen/Home/esr.png';
import MarcaGTO from '../../assets/Imagenes-Optimen/Home/marca-gto-logo.png';
import Boeing from '../../assets/Imagenes-Optimen/Home/boeing_logo.png';
import ISO from '../../assets/Imagenes-Optimen/Home/iso.jpg';
import { useTranslation } from 'react-i18next';

function SecondSection() {
	const [t, i18n] = useTranslation('global');

	return (
		<section className={'font-monserrat'}>
			<h2
				className={
					'mt-10 mb-10 text-center text-4xl font-semibold leading-40 text-cobalto'
				}
			>
				{t('home.second-section.title')}
			</h2>
			<div className={'overflow-hidden py-6 px-8 opacity-80 '}>
				<div className={' mr-auto ml-auto w-full max-w-4xl '}>
					<div className={'flex items-center justify-around'}>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-32'} src={Esr} alt={'esr'} />
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-14'}
								src={MarcaGTO}
								alt={'gto-logo'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-28'} src={Boeing} alt={'boeing'} />
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-24'} src={ISO} alt={'ISO'} />
						</LazyLoad>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SecondSection;
