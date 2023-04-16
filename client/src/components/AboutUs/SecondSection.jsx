/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para generar la segunda sección
 * de about us, a su vez llama a los componentes 'Border' y 'SecondCard'.
 */

import Border from '../Border';
import SecondCard from '../AboutUs/SecondCard';
import Consultant from '../../assets/Imagenes-Optimen/About Us/consultant.webp';
import Auditing from '../../assets/Imagenes-Optimen/About Us/check-list.webp';
import Business from '../../assets/Imagenes-Optimen/About Us/rules.webp';
import Outsoursing from '../../assets/Imagenes-Optimen/About Us/outsourcing.png';
import Innovation from '../../assets/Imagenes-Optimen/About Us/innovation.webp';
import Interface from '../../assets/Imagenes-Optimen/About Us/interface.webp';
import { useTranslation } from 'react-i18next';

function SecondSection() {
	const [t, i18n] = useTranslation('global');

	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'py-10 px-8'}>
				<h2 className={'mb-5 text-center text-3xl font-semibold text-cobalto'}>
					{t('about-us.second-section.title')}
				</h2>
				<div
					className={'mb-5 grid grid-cols-3 grid-rows-auto2 gap-y-12 gap-x-14'}
				>
					<SecondCard
						src={Consultant}
						alt={'Consultancy'}
						title={t('about-us.second-section.consultancy')}
						description={t('about-us.second-section.consultancy-description')}
					></SecondCard>
					<SecondCard
						src={Auditing}
						alt={'Auditing'}
						title={t('about-us.second-section.auditing')}
						description={t('about-us.second-section.auditing-description')}
					></SecondCard>
					<SecondCard
						src={Business}
						alt={'Business Rules'}
						title={t('about-us.second-section.bussines')}
						description={t('about-us.second-section.bussines-description')}
					></SecondCard>
					<SecondCard
						src={Outsoursing}
						alt={'Implementationg Outsourcing'}
						title={t('about-us.second-section.implementation')}
						description={t(
							'about-us.second-section.implementation-description'
						)}
					></SecondCard>
					<SecondCard
						src={Innovation}
						alt={'Innovation'}
						title={t('about-us.second-section.innovation')}
						description={t('about-us.second-section.innovation-description')}
					></SecondCard>
					<SecondCard
						src={Interface}
						alt={'Interfaces Development'}
						title={t('about-us.second-section.interfaces')}
						description={t('about-us.second-section.interfaces-description')}
					></SecondCard>
				</div>
				<Border />
			</section>
		</div>
	);
}

export default SecondSection;
