import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import noop from 'lodash/noop';

import { useMst } from '~/Stores/App.store';
import { usStates } from '~/Data/usStates.constants';
import { useInput } from '~/util/useInput';

export const ContactUs = observer(() => {
	const {
		contactUs: {
			visibleFields: {
				firstName = '',
				lastName = '',
				email = '',
				state = '',
				phone = '',
				city = '',
				emailOptIn = true,
			} = {},
			setField = noop,
			submitHandler = noop,
			hasSubmitted = false,
			isLoading = false,
			hasErrors = false,
		},
	} = useMst();
	const { setValue: setFirstName } = useInput(firstName);
	const { setValue: setLastName } = useInput(lastName);
	const { setValue: setEmail } = useInput(email);
	const { setValue: setState } = useInput(state);
	const { setValue: setPhone } = useInput(phone);
	const { setValue: setCity } = useInput(city);
	const { setValue: setEmailOptIn } = useInput(emailOptIn);
	const router = useRouter();
	const formId = 'contactUsForm';
	const form = useRef();
	const submitBtn = useRef();
	const hasSsrFormErrors = router.query?.formError === formId;

	useEffect(() => {
		if (!process.browser || !hasSsrFormErrors || form.current.checkValidity()) {
			return;
		}
		setTimeout(() => submitBtn.current.click(), 1500);
	}, [hasSsrFormErrors]);

	useEffect(() => {
		if (!process.browser || !hasSubmitted || hasErrors) {
			return;
		}
		window.dataLayer.push({
			event: 'builder contact form submitted',
		});
	}, [hasSubmitted, hasErrors]);

	if (hasSubmitted) {
		if (hasErrors) {
			return (
				<>
					<h1 className="text-blue text-2xl">We encounted an error.</h1>
					<p className="text-lg">
						{'We could not complete your request. For assistance, please contact us at '}
						<a href="tel:8775331250">877-533-1250</a>.
					</p>
				</>
			);
		}
		return (
			<>
				<img
					className="m-auto block"
					src="https://skyewallsbywws.com/cdn-cgi/image/fit=contain%2Cf=auto%2Cwidth=125%2Cdpr=1%2C/wp-content/themes/skyewalls/images/thumbs-up.png"
					alt=""
					width="125"
					height="169"
					style={{ width: '125px', height: '169px' }}
				/>
				<div className="text-center">
					<h1 className="text-blue text-2xl">Thanks And Hang In There!</h1>
					<p className="text-lg">A Skye Walls expert will be contacting you shortly.</p>
				</div>
			</>
		);
	}
	return (
		<form
			className="space-y-6 md:w-2/3"
			id={formId}
			ref={form}
			onSubmit={submitHandler}
		>
			<div className="divide-y divide-gray-light divide-opacity-50 space-y-6">
				<div className="space-y-6">
					<div className="space-y-4">
						<span className="Rule block" />
						<p className="text-base md:text-xl">
							Send your design to our expert team and we’ll reach out shortly to discuss how to bring your
							design to life!
						</p>
					</div>
					<div className="space-y-4">
						<div className="space-y-2 md:flex md:space-y-0 md:space-x-12">
							<div className="TextField space-y-2 md:w-1/2">
								<label
									htmlFor={`firstName-${formId}`}
									className="TextField-label text-base md:text-sm"
								>First Name
								</label>
								<input
									id={`firstName-${formId}`}
									name="firstName"
									className="TextField-control"
									required
									pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
									title="Please enter a valid first name"
									minLength="2"
									value={firstName}
									onChange={(event) => {
										const {
											target: {
												value = '',
											} = {},
										} = event;

										setFirstName(value);
										setField('firstName', value);
									}}
								/>
							</div>
							<div className="TextField space-y-2 md:w-1/2">
								<label
									htmlFor={`lastName-${formId}`}
									className="TextField-label text-base md:text-sm"
								>Last Name
								</label>
								<input
									id={`lastName-${formId}`}
									name="lastName"
									className="TextField-control"
									required
									pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
									title="Please enter a valid last name"
									minLength="2"
									value={lastName}
									onChange={(event) => {
										const {
											target: {
												value = '',
											} = {},
										} = event;

										setLastName(value);
										setField('lastName', value);
									}}
								/>
							</div>
						</div>
						<div className="space-y-2 md:flex md:space-y-0 md:space-x-12">
							<div className="TextField space-y-2 md:w-1/2">
								<label
									htmlFor={`city-${formId}`}
									className="TextField-label text-base md:text-sm"
								>City
								</label>
								<input
									id={`city-${formId}`}
									name="city"
									className="TextField-control"
									required
									pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
									title="Please enter a valid city"
									minLength="2"
									value={city}
									onChange={(event) => {
										const {
											target: {
												value = '',
											} = {},
										} = event;

										setCity(value);
										setField('city', value);
									}}
								/>
							</div>
							<div className="SelectField space-y-2 md:w-1/2">
								<label
									htmlFor={`state-${formId}`}
									className="SelectField-label text-base md:text-sm"
								>State
								</label>
								<select
									id={`state-${formId}`}
									name="state"
									className="SelectField-control"
									required
									title="Please enter a valid state"
									minLength="2"
									value={state}
									onChange={(event) => {
										const {
											target: {
												value = '',
											} = {},
										} = event;

										setState(value);
										setField('state', value);
									}}
								>
									<option value="">Select a state</option>
									{
										usStates.map((usState) => {
											const { key, value } = usState;

											return <option key={key} value={value}>{value}</option>;
										})
									}
								</select>
							</div>
						</div>
						<div className="space-y-2 md:flex md:space-y-0 md:space-x-12">
							<div className="TextField space-y-2 md:w-1/2">
								<label
									htmlFor={`city-${formId}`}
									className="TextField-label text-base md:text-sm"
								>Email
								</label>
								<input
									type="email"
									required
									pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
									id={`email-${formId}`}
									name="email"
									className="TextField-control"
									value={email}
									onChange={(event) => {
										const {
											target: {
												value = '',
											} = {},
										} = event;

										setEmail(value);
										setField('email', value);
									}}
								/>
							</div>
							<div className="TextField space-y-2 md:w-1/2">
								<label
									htmlFor={`email-${formId}`}
									className="TextField-label text-base md:text-sm"
								>Phone number
								</label>
								<input
									id={`phone-${formId}`}
									type="tel"
									name="phone"
									className="TextField-control"
									required
									pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
									minLength="10"
									maxLength="12"
									title="Please enter a valid phone number"
									value={phone}
									onChange={(event) => {
										const {
											target: {
												value = '',
											} = {},
										} = event;

										setPhone(value);
										setField('phone', value);
									}}
								/>
							</div>
						</div>
					</div>
					<div className="CheckboxField">
						<input
							id={`privacyPolicy-${formId}`}
							className="CheckboxField-control"
							type="checkbox"
							required
						/>
						<label
							htmlFor={`privacyPolicy-${formId}`}
							className="CheckboxField-label text-base md:text-sm"
						>
							{`
								Skye Walls by Western Window Systems values your privacy. Check this box to indicate you
								have read our
							`}
							<a
								href="https://skyewallsbywws.com/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue underline"
							>Privacy Policy
							</a>
							{' and '}
							<a
								href="https://skyewallsbywws.com/terms-of-use"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue underline"
							>Terms of Use
							</a>
						</label>
					</div>
					<div className="CheckboxField">
						<input
							id={`emailOptIn-${formId}`}
							className="CheckboxField-control"
							type="checkbox"
							checked={emailOptIn}
							onChange={(event) => {
								const {
									target: {
										checked = false,
									} = {},
								} = event;

								setEmailOptIn(checked);
								setField('emailOptIn', checked);
							}}
						/>
						<label
							htmlFor={`emailOptIn-${formId}`}
							className="CheckboxField-label text-base md:text-sm"
						>
							Check if you would like us to contact you about special offers, project inspiration, and
							future product announcements.
						</label>
					</div>
				</div>
				<div className="pt-6">
					<button
						className="Button w-40"
						type="submit"
						ref={submitBtn}
						disabled={isLoading}
					>
						{isLoading ? 'Processing…' : 'Submit'}
					</button>
				</div>
			</div>
		</form>
	);
});
