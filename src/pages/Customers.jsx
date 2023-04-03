/**@Author: Rodrigo Vega
 * @Description: Este componente es el que llama a los componentes dentro de la
 * ruta './components/Customers', siendo así el 'principal' o el general para
 * los demás componentes. Llama a todos los componentes de 'Crousel' tanto
 * el primero como el segundo, además del 'Navigation' y 'Footer'.
 */

import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const CarouselSection = lazy(() =>
	import('../components/Customers/CarouselSection')
);
const CarouselSection2 = lazy(() =>
	import('../components/Customers/CarouselSection2')
);

import Avianca from './../assets/Imagenes-Optimen/Customers/Avianca.png';
import Boeing from './../assets/Imagenes-Optimen/Customers/Boeing.png';
import Interjet from './../assets/Imagenes-Optimen/Customers/InterJet.png';
import Jepp from './../assets/Imagenes-Optimen/Customers/Jepp.webp';
import Latam from './../assets/Imagenes-Optimen/Customers/Latam.png';
import TAP from './../assets/Imagenes-Optimen/Customers/TAP.png';
import Volaris from './../assets/Imagenes-Optimen/Customers/Volaris.webp';
import Endeavor from './../assets/Imagenes-Optimen/Customers/EndeavorAir.png';
import Azul from './../assets/Imagenes-Optimen/Customers/Azul.png';
import AeroMexico from './../assets/Imagenes-Optimen/Customers/AeroMéxico.webp';
import CopaAirlines from './../assets/Imagenes-Optimen/Customers/Copa Airlines.png';
import Gol from './../assets/Imagenes-Optimen/Customers/Gol.png';
import Iberia from './../assets/Imagenes-Optimen/Customers/Iberia.png';
import UnitedA from './../assets/Imagenes-Optimen/Customers/United-Airlines-logo.png';
import Kalita from './../assets/Imagenes-Optimen/Customers/Kalita.webp';
import Frontier from './../assets/Imagenes-Optimen/Customers/Frontier.png';
import Alaska from './../assets/Imagenes-Optimen/Customers/Alaska.webp';

import { useTranslation } from 'react-i18next';

function Customers() {
	const [t] = useTranslation('global');
	return (
		<>
			<Suspense>
				<Navigation />
				<CarouselSection
					title={t('customers.title-1')}
					description={t('customers.description-1')}
					src1={Avianca}
					alt1={'Avianca'}
					src2={Boeing}
					alt2={'Boeing'}
					src3={Interjet}
					alt3={'Interjet'}
					src4={Jepp}
					alt4={'Jepp'}
					src5={Latam}
					alt5={'Latam'}
					src6={TAP}
					alt6={'TAP'}
					src7={Volaris}
					alt7={'Volaris'}
				/>
				<CarouselSection2
					title={t('customers.title-2')}
					description={t('customers.description-2')}
					src1={Endeavor}
					alt1={'Endeavor'}
					src2={Azul}
					alt2={'Azul'}
					src3={AeroMexico}
					alt3={'AeroMéxio'}
					src4={CopaAirlines}
					alt4={'Copa Airlines'}
					src5={Gol}
					alt5={'Gol'}
					src6={Iberia}
					alt6={'Iberia'}
					src7={UnitedA}
					alt7={'United'}
					src8={Kalita}
					alt8={'Kalita'}
					src9={Frontier}
					alt9={'Frontier'}
					src10={Alaska}
					alt10={'Alaska'}
				/>
				<Footer />
			</Suspense>
		</>
	);
}

export default Customers;
