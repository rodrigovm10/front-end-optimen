/**@Author: Rodrigo Vega
 * @Description: Este componente es el que llama a los componentes dentro de la
 * ruta './components/News', siendo así el 'principal' o el general para
 * los demás componentes. También llama a los componentes de 'Navigation' y
 * 'Footer'.
 */
import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const NewsContainer = lazy(() => import('../components/News/NewsContainer'));
const HeroNews = lazy(() => import('../components/News/HeroNews'));
import { useTranslation } from 'react-i18next';

function News() {
	const [t] = useTranslation('global');

	return (
		<div className="bg-[#f5f7fa]">
			<Suspense>
				<Navigation />
				<HeroNews title={t('news.title')} />
				<NewsContainer />
				<Footer />
			</Suspense>
		</div>
	);
}

export default News;
