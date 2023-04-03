/**@Author: Rodrigo Vega
 * @Description: Este componente es el que realiza la conexión con el servidor
 * como se visualia en el código se utiliza redux para lograr esta conexión.
 * Además de eso se utiliza la conexión con jwt para dado un 'refresh' se siga
 * permaneciendo la sesión del usuario
 */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://integradora-optimen.onrender.com',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;

		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	// If you want, handle other status codes, too
	if (result?.error?.status === 403) {
		console.log('sending refresh token');

		// send refresh token to get new access token
		const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);

		if (refreshResult?.data) {
			// store the new token
			api.dispatch(setCredentials({ ...refreshResult.data }));

			// retry original query with new access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			if (refreshResult?.error?.status === 403) {
				refreshResult.error.data.message = 'Your login has expired. ';
			}
			return refreshResult;
		}
	}

	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	tagTypes: ['Register', 'User', 'Permission', 'News'],
	endpoints: builder => ({}),
});
