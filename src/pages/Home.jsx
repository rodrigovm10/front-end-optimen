/**@Author: Rodrigo Vega
 * @Description: Este componente es el que llama a los componentes dentro de la
 * ruta './components/Home', siendo así el 'principal' o el general para
 * los demás componentes. Llama a todos los componentes que tengan un 'Section',
 * 'Slider' además del 'Navigation' y 'Footer'.
 */

import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const Hero = lazy(() => import('../components/Home/HeroHome'));
const Slider = lazy(() => import('../components/Home/Slider'));
const FirstSection = lazy(() => import('../components/Home/FirstSection'));
const SecondSection = lazy(() => import('../components/Home/SecondSection'));
import { useTranslation } from 'react-i18next';

function Home() {
	const [t, i18n] = useTranslation('global');

	return (
		<>
			<div className="overflow-x-hidden">
				<Suspense>
					<Navigation />
					<Hero
						title={t('home.hero.title')}
						description={t('home.hero.description')}
					/>
					<Slider />
					<FirstSection />
					<SecondSection />
					<Footer />
				</Suspense>
			</div>
		</>
	);
}

export default Home;
