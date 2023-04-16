/**@Author: Rodrigo Vega
 * @Description: Este componente es el que llama a los componentes dentro de la
 * ruta './components/ContactUs', siendo así el 'principal' o el general para
 * los demás componentes. Llama al componente Form ya que este a su vez llama a
 * los otros dos componentes dentro de la misma carpeta. Además llama a los
 * componentes 'Navigation' y 'Footer'.
 */

import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const Form = lazy(() => import('../components/ContactUs/Form'));

function ContactUs() {
	return (
		<>
			<Suspense>
				<Navigation />
				<Form />
				<Footer />
			</Suspense>
		</>
	);
}

export default ContactUs;
