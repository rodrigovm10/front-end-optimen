/**@Author: Rodrigo Vega
 * @Description: Este componente es el que llama a los componentes para
 * generar la sección de formulario y la sección de la localización de la empresa.
 */

import FormSection from './FormSection';
import LocationSection from './LocationSection';

function Form() {
	return (
		<div className={'mr-8 ml-8 font-monserrat'}>
			<section className={'mr-auto ml-auto w-full max-w-[1140px]'}>
				<div
					className={
						'mt-24 mb-24 grid auto-cols-fr grid-cols-2.5-1fr grid-rows-auto1 items-start gap-y-20 gap-x-8'
					}
				>
					<FormSection />
					<LocationSection />
				</div>
			</section>
		</div>
	);
}

export default Form;
