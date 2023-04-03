/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para generar la cuarta sección
 * del apartado de about us. A su vez llama a los componentes de 'Border'.
 */

import LazyLoad from 'react-lazyload';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hannover from '../../assets/Imagenes-Optimen/About Us/HANNOVER_MESSE.webp';
import Xprice from '../../assets/Imagenes-Optimen/About Us/xprize_ana_avatar.webp';
import AWS from '../../assets/Imagenes-Optimen/About Us/aws_mentefactura.webp';
import InnovationHUB from '../../assets/Imagenes-Optimen/About Us/Inn_Hub.webp';
import Educate from '../../assets/Imagenes-Optimen/About Us/Educate_Opti.webp';
import Border from '../Border';
import { useTranslation } from 'react-i18next';

function FourthSection() {
	const [t] = useTranslation('global');

	return (
		<div className={'ml-8 mr-8 font-monserrat'}>
			<section className={'py-10 px-8'}>
				<h2 className={'mb-5 text-center text-3xl font-semibold text-cobalto'}>
					{t('about-us.fourth-section.title')}
				</h2>
				<div className={'mt-12 h-auto text-center'}>
					<Carousel>
						<div
							className={
								'z-10 flex h-full justify-evenly overflow-hidden whitespace-nowrap'
							}
						>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-6'}>
									<LazyLoad>
										<img
											className={
												'mb-[18px] w-[350px] rounded-tl-2xl rounded-tr-2xl'
											}
											src={Hannover}
											alt={'HANNOVER_MESSE'}
										/>
									</LazyLoad>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											Hannover Messe
										</h3>
										<p className={'mb-5 opacity-60'}>
											{t('about-us.fourth-section.card-1')}
										</p>
									</div>
								</div>
							</div>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-[74px]'}>
									<LazyLoad>
										<img
											className={
												'mb-[18px] h-[227px] rounded-tl-2xl rounded-tr-2xl'
											}
											src={Xprice}
											alt={'xprize'}
										/>
									</LazyLoad>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											Ana Avatar XPrize
										</h3>
										<p className={'mb-5 opacity-60'}>
											{t('about-us.fourth-section.card-2')}
										</p>
									</div>
								</div>
							</div>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-[44px]'}>
									<LazyLoad>
										<img
											className={
												'mb-[18px] h-[227px] w-[450px] rounded-tl-2xl rounded-tr-2xl'
											}
											src={AWS}
											alt={'xprize'}
										/>
									</LazyLoad>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											AWS Mentefactura GTO Challenge
										</h3>
										<p className={'mb-5 opacity-60'}>
											{t('about-us.fourth-section.card-3')}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className={
								'z-10 flex h-full justify-evenly overflow-hidden whitespace-nowrap'
							}
						>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-[170px]'}>
									<LazyLoad>
										<img
											className={
												'mb-[18px] h-[227px] rounded-tl-2xl rounded-tr-2xl'
											}
											src={Educate}
											alt={'Educate Optimen'}
										/>
									</LazyLoad>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											Educate Optimen
										</h3>
										<p className={'mb-5 opacity-60'}>Educate Optimen</p>
									</div>
								</div>
							</div>
							<div
								className={
									'transition-card h-full w-[30%] translate-x-0 whitespace-normal'
								}
							>
								<div className={'rounded-2xl bg-azulitoClaro pb-[120px]'}>
									<LazyLoad>
										<img
											className={
												'mb-[18px] h-[227px] rounded-tl-2xl rounded-tr-2xl'
											}
											src={InnovationHUB}
											alt={'InnovationHUB'}
										/>
									</LazyLoad>
									<div
										className={
											'flex flex-col items-start pr-6 pl-6 text-center'
										}
									>
										<h3
											className={
												'mb-3 text-center text-2xl font-semibold text-azulito'
											}
										>
											{t('about-us.fourth-section.title')}
										</h3>
										<p className={'mb-5 opacity-60'}>
											{t('about-us.fourth-section.card-5')}
										</p>
									</div>
								</div>
							</div>
						</div>
					</Carousel>
					<Border />
				</div>
			</section>
		</div>
	);
}

export default FourthSection;
