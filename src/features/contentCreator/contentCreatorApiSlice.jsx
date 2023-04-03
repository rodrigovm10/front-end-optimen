/**@Author: Rodrigo Vega
 * @Description: Este componente genera los métodos GET, POST, PATCH y DELETE
 * para las noticias.
 */

import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice';

const newsAdapter = createEntityAdapter({});

const initialState = newsAdapter.getInitialState();

export const newsApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getNews: builder.query({
			query: () => '/news',
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			transformResponse: responseData => {
				const loadedNews = responseData.map(news => {
					news.id = news._id;
					return news;
				});
				return newsAdapter.setAll(initialState, loadedNews);
			},
			providesTags: (result, error, arg) => {
				if (result?.ids) {
					return [
						{ type: 'News', id: 'LIST' },
						...result.ids.map(id => ({ type: 'News', id })),
					];
				} else return [{ type: 'News', id: 'LIST' }];
			},
		}),
		addNewNews: builder.mutation({
			query: initialUserData => ({
				url: '/news',
				method: 'POST',
				body: {
					...initialUserData,
				},
			}),
			invalidatesTags: [{ type: 'News', id: 'LIST' }],
		}),
		updateNews: builder.mutation({
			query: initialUserData => ({
				url: '/news',
				method: 'PATCH',
				body: {
					...initialUserData,
				},
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'News', id: arg.id }],
		}),
		deleteNews: builder.mutation({
			query: ({ id }) => ({
				url: `/news`,
				method: 'DELETE',
				body: { id },
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'News', id: arg.id }],
		}),
	}),
});

export const {
	useGetNewsQuery,
	useAddNewNewsMutation,
	useUpdateNewsMutation,
	useDeleteNewsMutation,
} = newsApiSlice;

// returns the query result object
export const selectNewsResult = newsApiSlice.endpoints.getNews.select();

// creates memoized selector
const selectNewsData = createSelector(
	selectNewsResult,
	newsResult => newsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
	selectAll: selectAllNews,
	selectById: selectNewsById,
	selectIds: selectNewsIds,
} = newsAdapter.getSelectors(state => selectNewsData(state) ?? initialState);
