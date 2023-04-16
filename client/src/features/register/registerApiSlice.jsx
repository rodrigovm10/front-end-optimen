/**@Author: Rodrigo Vega
 * @Description: Este componente genera los métodos POST y GET para los
 * registros en el momento de que una noticia es añadida.
 */

import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice';

const registerAdapter = createEntityAdapter({});

const initialState = registerAdapter.getInitialState();

export const registerApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getRegister: builder.query({
			query: () => '/register',
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			transformResponse: responseData => {
				const loadedRegister = responseData.map(register => {
					register.id = register._id;
					return register;
				});
				return registerAdapter.setAll(initialState, loadedRegister);
			},
			providesTags: (result, error, arg) => {
				if (result?.ids) {
					return [
						{ type: 'Register', id: 'LIST' },
						...result.ids.map(id => ({ type: 'Register', id })),
					];
				} else return [{ type: 'Register', id: 'LIST' }];
			},
		}),
		addNewRegister: builder.mutation({
			query: initialRegisterData => ({
				url: '/register',
				method: 'POST',
				body: {
					...initialRegisterData,
				},
			}),
			invalidatesTags: [{ type: 'Register', id: 'LIST' }],
		}),
	}),
});

export const { useGetRegisterQuery, useAddNewRegisterMutation } =
	registerApiSlice;

// returns the query result object
export const selectRegisterResult =
	registerApiSlice.endpoints.getRegister.select();

// creates memoized selector
const selectRegisterData = createSelector(
	selectRegisterResult,
	registerResult => registerResult.data
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
	selectAll: selectAllRegister,
	selectById: selectRegisterById,
	selectIds: selectRegisterIds,
} = registerAdapter.getSelectors(
	state => selectRegisterData(state) ?? initialState
);
