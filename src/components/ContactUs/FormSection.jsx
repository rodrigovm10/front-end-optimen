/**@Author: Rodrigo Vega
 * @Description: Este componente es el que genera el formulario de contacto
 */

import { useForm } from 'react-hook-form';

function FormSection() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = data => {
		console.log(data);
	};
	return (
		<div className={'border-2 border-solid border-triplee py-[45px] px-[50px]'}>
			<h2 className={'mb-10 text-3xl font-semibold leading-10 text-cobalto'}>
				Contact Us
			</h2>
			<div
				className={'my-0 mb-0 ml-auto mr-0 flex w-full flex-col items-stretch'}
			>
				<form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col'}>
					<label
						htmlFor={'Name'}
						className={
							'mb-3 text-xs font-medium uppercase leading-[1px] tracking-widest'
						}
					>
						Name
					</label>
					<input
						type={'text'}
						name={'Name'}
						placeholder={'Enter your name'}
						id={'Name'}
						required
						className={
							'mb-6 h-[38px] w-full border-[1px] border-solid border-[#e4e4e4] py-[21px] px-5 text-sm leading-7 text-[#333333]'
						}
						{...register('name', { required: true })}
					/>
					{errors.name?.type === 'required' && (
						<p className="mb-6 text-center font-semibold -tracking-tight text-red-600">
							The field name is required
						</p>
					)}
					<label
						htmlFor={'Address'}
						className={
							'mb-3 text-xs font-medium uppercase leading-[1px] tracking-widest'
						}
					>
						Email Address
					</label>
					<input
						type={'email'}
						name={'Address'}
						placeholder={'Enter your email'}
						id={'Address'}
						required
						className={
							'mb-6 h-[38px] w-full border-[1px] border-solid border-[#e4e4e4] py-[21px] px-5 text-sm leading-7 text-[#333333]'
						}
						{...register('email', {
							required: true,
						})}
					/>
					{errors.email?.type === 'required' && (
						<p className="mb-6 text-center font-monserrat font-semibold -tracking-tight text-red-600">
							The field Email is required
						</p>
					)}
					{!!errors.email?.type.includes('@optimen.com.mx') && (
						<p className="mb-6 text-center font-semibold tracking-tight text-red-600">
							The field must contain @optimen.com.mx
						</p>
					)}
					<label
						htmlFor={'Message'}
						className={
							'mb-3 text-xs font-medium uppercase leading-[1px] tracking-widest'
						}
					>
						Message
					</label>
					<textarea
						name={'Message'}
						placeholder={'Message...'}
						id={'Message'}
						required
						className={
							'mb-6 h-[200px] border-[1px] border-solid border-[#e4e4e4] py-[21px] px-5 pt-3 text-sm leading-4'
						}
						{...register('message', { required: true, maxLength: 5000 })}
					></textarea>
					{errors.message?.type === 'required' && (
						<p className="mb-6 text-center font-monserrat font-semibold tracking-tight text-red-600">
							The field Message is required
						</p>
					)}
					<input
						type={'submit'}
						value={'Submit'}
						className={
							'inline-block cursor-pointer bg-cobalto py-3 px-6 uppercase leading-5 tracking-[2px] text-white'
						}
					/>
				</form>
			</div>
		</div>
	);
}

export default FormSection;
