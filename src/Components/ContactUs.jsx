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
	// const submitHandler = () => {
	//
	// };

	useEffect(() => {
		if (!process.browser || !hasSsrFormErrors || form.current.checkValidity()) {
			return;
		}
		setTimeout(() => submitBtn.current.click(), 1500);
	}, [hasSsrFormErrors]);

	return (
		<form
			className="space-y-6 md:w-2/3"
			id={formId}
			ref={form}
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
							id={`emailOptIn-${formId}`}
							required
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
					<button className="Button" type="submit" ref={submitBtn}>Submit</button>
				</div>
			</div>
		</form>
	);
});
