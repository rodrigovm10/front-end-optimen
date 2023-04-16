/**@Author: Rodrigo Vega
 * @Description: Este componente genera una 'card' que es utilizada en la
 * segunda sección de about us.
 */

function SecondCard({ src, alt, title, description }) {
	return (
		<div className="font-monserrat">
			<img className={'w-[50px]'} src={src} alt={alt} loading="lazy" />
			<h3 className={'text-semibold mb-3 text-xl leading-8 text-azulito'}>
				{title}
			</h3>
			<p className={'opacity-60'}>{description}</p>
		</div>
	);
}

export default SecondCard;
