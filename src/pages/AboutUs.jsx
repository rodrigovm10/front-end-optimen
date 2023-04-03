/**@Author: Rodrigo Vega
 * @Description: Este componente es el que llama a los componentes dentro de la
 * ruta './components/AboutUs', siendo así el 'principal' o el general para
 * los demás componentes. Llama a todos los componentes que tengan un 'Section'
 * además del 'Navigation' y 'Footer'.
 */

import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const HeroAbout = lazy(() => import('../components/AboutUs/HeroAbout'));
const FirstSection = lazy(() => import('../components/AboutUs/FirstSection'));
const SecondSection = lazy(() => import('../components/AboutUs/SecondSection'));
const ThirdSection = lazy(() => import('../components/AboutUs/ThirdSection'));
const FourthSection = lazy(() => import('../components/AboutUs/FourthSection'));
const FifthSection = lazy(() => import('../components/AboutUs/FifthSection'));
import { useTranslation } from 'react-i18next';

function AboutUs() {
	const [t, i18n] = useTranslation('global');

	return (
		<div className="overflow-x-hidden">
			<Suspense>
				<Navigation />
				<HeroAbout
					title={t('about-us.hero.title')}
					description={t('about-us.hero.description')}
				/>
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<FifthSection />
				<Footer />
			</Suspense>
		</div>
	);
}

export default AboutUs;
