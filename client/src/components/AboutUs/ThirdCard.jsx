/**@Author: Rodrigo Vega
 * @Description: Este componente genera una 'card' que es utilizada en la
 * tercera sección de about us.
 */

function ThirdCard({ src, alt, description }) {
	return (
		<div className={'mr-4 h-full w-3/12 whitespace-normal'}>
			<div className={'rounded-2xl bg-azulitoClaro pb-6 shadow-sombra'}>
				<img
					className={
						'mb-5 h-52 w-full rounded-l-2xl rounded-tr-2xl rounded-bl-none bg-opacity'
					}
					src={src}
					alt={alt}
					loading="lazy"
				/>
				<div className={'flex flex-col items-start px-6'}>
					<p className={'mb-5 flex-ceroAuto'}>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default ThirdCard;
