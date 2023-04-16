/**@Author: Rodrigo Vega
 * @Description: Este componente es el que genera el Login, con todas
 * las validaciones para que este pueda funcionar de la mejor manera.
 */

import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/auth/authSlice';
import { useLoginMutation } from '../features/auth/authApiSlice';

import usePersist from '../Hooks/usePersist';
import useAuth from '../Hooks/useAuth';

function Login() {
	const { isAdmin, isContentCreator, isAdminRoot } = useAuth();
	const userRef = useRef();
	const errRef = useRef();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [persist, setPersist] = usePersist();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, { isLoading }] = useLoginMutation();

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [email, password]);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const { accessToken } = await login({ email, password }).unwrap();
			dispatch(setCredentials({ accessToken }));
			setEmail('');
			setPassword('');
			if (isAdmin) {
				navigate('/Admin');
			}
			if (isContentCreator) {
				navigate('/ContentCreator');
			}
			if (isAdminRoot) {
				navigate('/AdminRoot');
			}
		} catch (err) {
			if (!err.status) {
				setErrMsg('No Server Response');
			} else if (err.status === 400) {
				setErrMsg('Missing Email or Password');
			} else if (err.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg(err.data?.message);
			}
			errRef.current.focus();
		}
	};
	const handleUserInput = e => setEmail(e.target.value);
	const handlePwdInput = e => setPassword(e.target.value);
	const handleToggle = () => setPersist(prev => !prev);

	const errClass = errMsg ? 'errmsg' : 'offscreen';

	if (isLoading) return <p>Loading...</p>;

	const content = (
		<div className="w-full py-[176px] px-[64px] font-monserrat">
			<div className="relative mt-[-72px] mr-auto ml-auto max-w-1440 pt-0">
				<div className="mr-auto mb-0 ml-auto w-[388px] max-w-full rounded-xl bg-white p-6 shadow-sombra2">
					<h1 className="mb-8 text-center text-2xl font-semibold">Login</h1>
					<p ref={errRef} className={errClass} aria-live="assertive">
						{errMsg}
					</p>
					<form onSubmit={handleSubmit}>
						<label
							htmlFor={'Email'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Email Address
						</label>
						<input
							id={'Email'}
							name={'Email'}
							type="email"
							ref={userRef}
							value={email}
							onChange={handleUserInput}
							autoComplete="off"
							required
							placeholder="Enter Your Email Address"
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<label
							htmlFor={'Password'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Password
						</label>
						<input
							id={'Password'}
							htmlFor={'Password'}
							type="password"
							value={password}
							onChange={handlePwdInput}
							required
							placeholder="Enter Your Password"
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<input
							id={'Submit'}
							name="Submit"
							type="submit"
							value={'Submit'}
							className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white"
						/>
						<label
							htmlFor="persist"
							className="mt-4 flex w-full items-center gap-[0.5em]"
						>
							<input
								type="checkbox"
								className="h-6 w-6"
								id="persist"
								onChange={handleToggle}
								checked={persist}
							/>
							Trust this Device
						</label>
					</form>
				</div>
			</div>
		</div>
	);

	return content;
}

export default Login;
