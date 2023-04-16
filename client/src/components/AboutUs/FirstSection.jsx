/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para generar la primera sección
 * del apartado de about us. A su vez llama a los componentes de 'First Card' y
 * 'Border'.
 */

import { LazyLoad } from 'react-lazyload';
import FirstCard from './FirstCard';
import Border from '../Border';
import Mission from '../../assets/Imagenes-Optimen/About Us/mission.png';
import Vision from '../../assets/Imagenes-Optimen/About Us/vision.webp';
import Values from '../../assets/Imagenes-Optimen/About Us/values.webp';
import { useTranslation } from 'react-i18next';

function FirstSection() {
	const [t, i18n] = useTranslation('global');

	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'mt-[-5rem] px-8 pt-14 pb-10'}>
				<div className={'mr-auto ml-auto mb-5 w-full max-w-940'}>
					<div className={'mt-12 grid grid-cols-3 gap-x-20 gap-y-24'}>
						<FirstCard
							src={Mission}
							alt={'mission'}
							title={t('about-us.first-section.mission')}
							description={t('about-us.first-section.mission-description')}
						></FirstCard>
						<FirstCard
							src={Vision}
							alt={'vision'}
							title={t('about-us.first-section.vision')}
							description={t('about-us.first-section.vision-description')}
						></FirstCard>
						<FirstCard
							src={Values}
							alt={'values'}
							title={t('about-us.first-section.values')}
							description={
								<p>
									{t('about-us.first-section.values-1')}
									<br /> {t('about-us.first-section.values-2')}
									<br /> {t('about-us.first-section.values-3')}
									<br /> {t('about-us.first-section.values-4')}
									<br /> {t('about-us.first-section.values-5')}
								</p>
							}
						></FirstCard>
					</div>
				</div>
				<Border />
			</section>
		</div>
	);
}

export default FirstSection;
