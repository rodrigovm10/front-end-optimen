/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para generar la primera sección
 * del apartado de home. A su vez llama al componente 'Border'.
 */

import LazyLoad from 'react-lazyload';
import Border from '../Border';
import Img1 from '../../assets/Imagenes-Optimen/Home/img-1.jpg';
import Img2 from '../../assets/Imagenes-Optimen/Home/img-2.jpg';
import { useTranslation } from 'react-i18next';

function FirstSection() {
	const [t, i18n] = useTranslation('global');

	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'mr-auto ml-auto w-full max-w-1440'}>
				<div className={'mt-16 mb-16'}>
					<div
						className={'0 mb-8 grid grid-cols-2 items-center gap-x-20 gap-y-8'}
					>
						<div className={'mb-8'}>
							<h2
								className={
									'mt-3 mb-5 text-4xl font-semibold leading-40 text-cobalto'
								}
							>
								{t('home.first-section.title-1')}
							</h2>
							<p className={'mb-3 text-base leading-6 text-slate-400'}>
								{t('home.first-section.description-1')}
							</p>
						</div>
						<LazyLoad>
							<img
								className={'max-w-full'}
								src={Img1}
								alt={'A world class global enterpise'}
							/>
						</LazyLoad>
					</div>
					<Border />
					<div
						className={
							'mb-8 mt-12 grid grid-cols-2 items-center gap-x-20 gap-y-8'
						}
					>
						<img
							className="max-w-full"
							src={Img2}
							alt={'A world class global enterpise'}
						/>
						<div className={'relative left-20 mb-8'}>
							<h2
								className={
									'mt-3 mb-5 text-4xl font-semibold leading-40 text-cobalto'
								}
							>
								{t('home.first-section.title-2')}
							</h2>
							<p className={'mb-3 text-base leading-6 text-slate-400 '}>
								{t('home.first-section.description-2')}
							</p>
						</div>
					</div>
				</div>
				<Border />
				<div className={'text-center'}>
					<h2 className={'mb-5 mt-7 pb-10 text-4xl font-semibold text-cobalto'}>
						{t('home.first-section.title-3')}
					</h2>
					<div className={'grid grid-cols-2 gap-4'}>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							{t('home.first-section.description-3-1')}
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							{t('home.first-section.description-3-2')}
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							{t('home.first-section.description-3-3')}
						</p>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							{t('home.first-section.description-3-4')}
						</p>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							{t('home.first-section.description-3-5')}
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							{t('home.first-section.description-3-6')}
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							{t('home.first-section.description-3-7')}
						</p>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							{t('home.first-section.description-3-8')}
						</p>
						<p
							className={'font-bold text-azulito opacity-30 hover:opacity-100'}
						>
							{t('home.first-section.description-3-9')}
						</p>
						<p className={'font-bold opacity-30 hover:opacity-100'}>
							{t('home.first-section.description-3-10')}
						</p>
						<p className={'mb-8 font-bold opacity-30 hover:opacity-100'}>
							{t('home.first-section.description-3-11')}
						</p>
						<p
							className={
								'mb-8 font-bold text-azulito opacity-30 hover:opacity-100'
							}
						>
							{t('home.first-section.description-3-12')}
						</p>
					</div>
					<Border />
				</div>
			</section>
		</div>
	);
}

export default FirstSection;
