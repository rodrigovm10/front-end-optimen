/**@Author: Rodrigo Vega
 * @Description: Este componente genera los token del kwt para cada usuario, esto
 * al momento de iniciar sesión.
 */

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: { token: null },
	reducers: {
		setCredentials: (state, action) => {
			const { accessToken } = action.payload;
			state.token = accessToken;
		},
		logOut: (state, action) => {
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = state => state.auth.token;
