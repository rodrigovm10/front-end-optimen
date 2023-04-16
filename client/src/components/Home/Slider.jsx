/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para generar el slider que se ve
 * en el apartado de home, siendo este el que se ve donde las imagenes van
 * pasando una tras otras
 */

import LazyLoad from 'react-lazyload';
import '../Components.css';
import GTOtech from '../../assets/Imagenes-Optimen/Home/GTOtech2.webp';
import AeroSpace from '../../assets/Imagenes-Optimen/Home/bjx_aerospace.png';
import Cofoce from '../../assets/Imagenes-Optimen/Home/COFOCE.webp';
import Aerocluster from '../../assets/Imagenes-Optimen/Home/AEROCLUSTER_QRO.webp';
import Canieti from '../../assets/Imagenes-Optimen/Home/CANIETI.webp';
import Clutig from '../../assets/Imagenes-Optimen/Home/CLUTIG.webp';
import LogoGob from '../../assets/Imagenes-Optimen/Home/LOGO_GOBIERNO.webp';
import Atg from '../../assets/Imagenes-Optimen/Home/ATG_ADDITIVE_MANUFCATURING.webp';
import UTNG from '../../assets/Imagenes-Optimen/Home/logo-utng.png';
import Horizont from '../../assets/Imagenes-Optimen/Home/HORIZONTC.jpg';
import Educafin from '../../assets/Imagenes-Optimen/Home/EDUCAFINEVOLUCIONA.png';
import IdeaGTO from '../../assets/Imagenes-Optimen/Home/idea_gto.png';
import CEI from '../../assets/Imagenes-Optimen/Home/CEI_GPA.jpeg';
import Cinvestav from '../../assets/Imagenes-Optimen/Home/Cinvestav.png';
import IECA from '../../assets/Imagenes-Optimen/Home/IECA_.png';
import Juventud from '../../assets/Imagenes-Optimen/Home/JuventudEsGTO.jpg';
import TDM from '../../assets/Imagenes-Optimen/Home/TDM.jpg';
import { useTranslation } from 'react-i18next';

function Slider() {
	const [t, i18n] = useTranslation('global');

	return (
		<section>
			<h2
				className={
					'mt-3 mb-5 text-center text-4xl font-semibold leading-40 text-cobalto'
				}
			>
				{t('home.slider.title')}
			</h2>
			<div className={'overflow-hidden py-6 px-8 opacity-40'}>
				<div className={' mr-auto ml-auto w-full max-w-4xl '}>
					<div className={'animacion flex items-center justify-around'}>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-16'}
								src={GTOtech}
								alt={'GTOtech2'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-24'}
								src={AeroSpace}
								alt={'Aerospace'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-24'}
								src={GTOtech}
								alt={'GTOtech2'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-24'} src={Cofoce} alt={'COFOCE'} />
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-24'}
								src={Aerocluster}
								alt={'AEROCLUSTER_QRO'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-24'} src={Canieti} alt={'CANIETI'} />
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-24'} src={Clutig} alt={'CLUTIG'} />
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-16'}
								src={LogoGob}
								alt={'LOGO_GOBIERNO'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-16'} src={UTNG} alt={'logo-utng'} />
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-24'}
								src={Atg}
								alt={'ATG-ADDITIVE'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-32'}
								src={Horizont}
								alt={'HORIZONTC'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-24'}
								src={Educafin}
								alt={'EDUCAFIN'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-24'}
								src={IdeaGTO}
								alt={'idea-gto'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-24'} src={CEI} alt={'CEI_GPA'} />
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-16'}
								src={Cinvestav}
								alt={'Cinvestav'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-24'} src={IECA} alt={'IECA'} />
						</LazyLoad>
						<LazyLoad>
							<img
								className={'mr-4 ml-4 w-16'}
								src={Juventud}
								alt={'JuventudEsGTO'}
							/>
						</LazyLoad>
						<LazyLoad>
							<img className={'mr-4 ml-4 w-16'} src={TDM} alt={'TDM'} />
						</LazyLoad>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Slider;
