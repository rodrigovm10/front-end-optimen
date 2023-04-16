/**@Author: Rodrigo Vega
 * @Description: Este componente genera la noticia, teniendo así ya un estándar
 * para cada una de ellas.
 */

import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNewsById } from '../../features/contentCreator/contentCreatorApiSlice';

function New({ newsId }) {
	const news = useSelector(state => selectNewsById(state, newsId));

	if (news) {
		console.log(news);
		return (
			<div className="relative h-full overflow-hidden whitespace-nowrap">
				<div className="inline-block h-full w-full whitespace-normal text-left">
					<div className="flex items-center justify-between py-3 pr-3 pl-16 ">
						<div className="mr-10 mb-14 flex max-w-[460px] flex-col items-start">
							<div>
								<div className="mb-3 text-[24px] font-semibold leading-9 text-azulito">
									{news.title}
								</div>
								<div className="text-sm text-[#aaa]">{news.date}</div>
								<div>{news.description}</div>
							</div>
						</div>
						{/* <img
							className="h-[200px] w-[300px] object-cover"
							src={news.image}
							alt={'noticia'}
						/> */}
					</div>
				</div>
			</div>
		);
	} else return null;
}

export default New;
