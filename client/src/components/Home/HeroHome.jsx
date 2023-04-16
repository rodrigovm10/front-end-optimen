/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para genera el hero de home.
 * Con Hero se refiere al apartado donde se visualiza la imagen.
 */

function HeroHome({ title, description }) {
	return (
		<>
			<div
				className={
					'mb-16 flex h-500 items-center justify-center bg-heroHome bg-auto bg-fixed bg-no-repeat font-monserrat'
				}
			>
				<div className={'w-3/4 max-w-7xl text-center'}>
					<div className={'mr-auto mb-9 ml-auto w-4/5'}>
						<h1
							className={
								'mt-2.5 mb-8 text-6xl font-semibold leading-10 text-white opacity-80'
							}
						>
							{title}
						</h1>
						<p
							className={
								'mb-2 text-xl font-semibold leading-9 text-white opacity-60'
							}
						>
							{description}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroHome;
