/**@Author: Rodrigo Vega
 * @Description: Este componente genera el Login persisente, siendo este
 * el que hace que una sesión siga activa incluso después de cerrar el navegador.
 */

import { Outlet, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useRefreshMutation } from './authApiSlice';
import usePersist from '../../hooks/usePersist';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './authSlice';

const PersistLogin = () => {
	const [persist] = usePersist();
	const token = useSelector(selectCurrentToken);
	const effectRan = useRef(false);

	const [trueSuccess, setTrueSuccess] = useState(false);

	const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
		useRefreshMutation();

	useEffect(() => {
		if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
			// React 18 Strict Mode

			const verifyRefreshToken = async () => {
				console.log('verifying refresh token');
				try {
					//const response =
					await refresh();
					//const { accessToken } = response.data
					setTrueSuccess(true);
				} catch (err) {
					console.error(err);
				}
			};

			if (!token && persist) verifyRefreshToken();
		}

		return () => (effectRan.current = true);

		// eslint-disable-next-line
	}, []);

	let content;
	if (!persist) {
		// persist: no
		console.log('no persist');
		content = <Outlet />;
	} else if (isLoading) {
		//persist: yes, token: no
		console.log('loading');
		content = <p>Loading...</p>;
	} else if (isError) {
		//persist: yes, token: no
		console.log('error');
		content = (
			<p className="mb-[0.5em] flex justify-center text-center font-monserrat text-xl font-semibold text-red-500">
				{`${error.data?.message} - `}
				<Link to="/Login"> Please login again</Link>.
			</p>
		);
	} else if (isSuccess && trueSuccess) {
		//persist: yes, token: yes
		console.log('success');
		content = <Outlet />;
	} else if (token && isUninitialized) {
		//persist: yes, token: yes
		console.log('token and uninit');
		console.log(isUninitialized);
		content = <Outlet />;
	}

	return content;
};
export default PersistLogin;
