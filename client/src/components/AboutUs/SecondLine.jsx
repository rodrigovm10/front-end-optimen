/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para genera el texto de la
 * línea del tiempo. Siendo esta donde se visualiza el año y la descripción de
 * ese año.
 */

import { useTranslation } from 'react-i18next';
import React from 'react';

function SecondLine() {
	const [t] = useTranslation('global');

	return (
		<div className={'col-span-2 grid auto-cols-fr grid-rows-auto2 gap-x-10'}>
			<div className={'relative'} id={'1'}>
				{Array(16)
					.fill()
					.map((_, i) => (
						<React.Fragment key={i}>
							<h3
								className={
									'mt-3 mb-3 text-3xl font-normal leading-[46px] text-cobalto opacity-80'
								}
							>
								{t(`about-us.fifth-section.part-${i}`)}
								{<br />}
							</h3>
							<div>
								<div key={i + 1} className={'mb-3 opacity-50'}>
									{t(`about-us.fifth-section.part-${i}-description`)}
								</div>
							</div>
						</React.Fragment>
					))}
			</div>
		</div>
	);
}

export default SecondLine;
