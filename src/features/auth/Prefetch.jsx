/**@Author: Rodrigo Vega
 * @Description: Este componente genera un despachador para los usuarios y las notas
 * esto se refiere a que obtendra esos datos, 'despachando' así los datos.
 */

import { store } from '../../app/store';
import { usersApiSlice } from '../users/usersApiSlice';
import { newsApiSlice } from '../contentCreator/contentCreatorApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
	useEffect(() => {
		console.log('subscribing');
		// const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
		const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());
		const news = store.dispatch(newsApiSlice.endpoints.getNews.initiate());

		return () => {
			console.log('unsubscribing');
			news.unsubscribe();
			users.unsubscribe();
		};
	}, []);

	return <Outlet />;
};
export default Prefetch;
