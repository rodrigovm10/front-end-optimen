/**@Author: Rodrigo Vega
 * @Description: Este componente genera parte de una tabla donde se mostrarán
 * las noticias creadas.
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectNewsById } from './contentCreatorApiSlice';

const NewsCreated = ({ newsId }) => {
	const news = useSelector(state => selectNewsById(state, newsId));

	const navigate = useNavigate();

	if (news) {
		const handleEdit = () => navigate(`/ContentCreator/news/${newsId}`);
		return (
			<tr>
				<td className={`text-center" border-2 border-azulito px-10 `}>
					{news.title}
				</td>
				<td className={`text-center" border-2 border-azulito px-10 `}>
					{news.date}
				</td>
				<td className={`text-center" border-2 border-azulito px-10 `}>
					{news.description}
				</td>
				<td className={`text-center" border-2 border-azulito px-10 `}>
					<button className="color-white p-1 text-2xl" onClick={handleEdit}>
						<FontAwesomeIcon icon={faPenToSquare} />
					</button>
				</td>
			</tr>
		);
	} else return null;
};

export default NewsCreated;
