/**@Author: Rodrigo Vega
 * @Description: Este componente crea una 'card' siendo así las que se visualizan
 * por primera vez en el componente de about us.
 */
function FirstCard({ src, alt, title, description }) {
	return (
		<div
			className={
				'flex flex-col items-center justify-start text-center font-monserrat'
			}
		>
			<img
				className={'mb-4 h-20 w-20 object-cover'}
				src={src}
				alt={alt}
				loading="lazy"
			/>
			<h3 className={'my-3 text-2xl font-semibold text-azulito'}>{title}</h3>
			<p className={'mb-5 opacity-60 '}>{description}</p>
		</div>
	);
}

export default FirstCard;
