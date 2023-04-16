/**@Author: Rodrigo Vega
 * @Description: Este componente genera el contenedor de las noticias.
 * Además utiliza el llamado de New para tener cada noticia en un contendor.
 */

import { useGetNewsQuery } from '../../features/contentCreator/contentCreatorApiSlice';
import New from './New';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function NewsContainer() {
	const {
		data: news,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetNewsQuery(undefined, {
		pollingInterval: 60000,
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
	});

	let content;

	if (isLoading) content = <p>Loading...</p>;

	if (isError) {
		content = (
			<>
				<p className="mb-0.5 ml-[22%] inline-block p-0.5 text-red-500">
					{error?.data?.message}
				</p>
			</>
		);
	}

	if (isSuccess) {
		const { ids } = news;

		const newsList =
			ids?.length && ids.map(newsId => <New key={newsId} newsId={newsId} />);

		content = (
			<div className="mt-auto mb-[50px] mr-auto ml-auto w-full max-w-940 rounded-2xl bg-white">
				<section>
					<Carousel showArrows={false}>{newsList}</Carousel>
				</section>
			</div>
		);
	}

	return content;
}

export default NewsContainer;
