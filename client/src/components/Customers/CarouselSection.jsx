/**@Author: Rodrigo Vega
 * @Description: Este componente genera el primer carrusel que se visualiza en 
 * el apartado de customers. Mostrando así como imagenes y texto.
 */

import LazyLoad from 'react-lazyload';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Border from '../../components/Border';

function CarouselSection({
	title,
	description,
	src1,
	alt1,
	src2,
	alt2,
	src3,
	alt3,
	src4,
	alt4,
	src5,
	alt5,
	src6,
	alt6,
	src7,
	alt7,
}) {
	return (
		<div className={'mr-8 ml-8 font-monserrat'}>
			<section
				className={
					'mt-[-50px] flex flex-row items-center justify-center py-20 px-8'
				}
			>
				<div className={'mr-auto ml-auto w-full max-w-940'}>
					<div
						className={
							'grid auto-cols-fr auto-rows-auto grid-cols-2 items-center justify-center gap-y-10 gap-x-10'
						}
					>
						<div className={'flex flex-col items-start justify-start'}>
							<h3 className={'mb-3 text-3xl font-semibold text-cobalto'}>
								{title}
							</h3>
							<p className={'leading-7 opacity-60'}>{description}</p>
						</div>
						<Carousel
							autoPlay
							infiniteLoop
							width="80%"
							showArrows={false}
							showThumbs={false}
							showStatus={false}
						>
							<div>
								<LazyLoad>
									<img src={src1} alt={alt1} />
								</LazyLoad>
							</div>
							<div>
								<LazyLoad>
									<img src={src2} alt={alt2} />
								</LazyLoad>
							</div>
							<div>
								<LazyLoad>
									<img src={src3} alt={alt3} />
								</LazyLoad>
							</div>
							<div>
								<LazyLoad>
									<img src={src4} alt={alt4} />
								</LazyLoad>
							</div>
							<div>
								<LazyLoad>
									<img src={src5} alt={alt5} />
								</LazyLoad>
							</div>
							<div>
								<LazyLoad>
									<img src={src6} alt={alt6} />
								</LazyLoad>
							</div>
							<div>
								<LazyLoad>
									<img src={src7} alt={alt7} />
								</LazyLoad>
							</div>
						</Carousel>
					</div>
					<Border />
				</div>
			</section>
		</div>
	);
}

export default CarouselSection;
