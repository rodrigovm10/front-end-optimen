/**@Author: Rodrigo Vega
 * @Description: Este componente es el de la quinta seción de nuestro about us
 * siendo así el que muestra esa sección mencionada.
 */
import SecondLine from './SecondLine';
import { useTranslation } from 'react-i18next';

function FifthSection() {
	const [t] = useTranslation('global');

	return (
		<div
			className={'bg-[rgb(0, 128, 255, 0)] relative py-20 px-8 font-monserrat'}
		>
			<h2
				className={
					'mb-9 text-center text-4xl font-semibold leading-10 text-cobalto'
				}
			>
				{t('about-us.fifth-section.title')}
			</h2>
			<section className={'mr-auto ml-auto w-full max-w-940'}>
				<div className={'flex items-start justify-center gap-y-10 gap-x-10'}>
					<SecondLine />
				</div>
			</section>
		</div>
	);
}

export default FifthSection;
