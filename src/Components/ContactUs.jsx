import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { useMst } from '~/Stores/App.store';
import { usStates } from '~/Data/usStates.constants';

export const ContactUs = () => {
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
		},
	} = useMst();
	const router = useRouter();
	const formId = 'contactUsForm';
	const form = useRef();
	const submitBtn = useRef();
	const hasSsrFormErrors = router.query?.formError === formId;
	// const {
	// 	firstName = '',
	// 	lastName = '',
	// 	email = '',
	// 	zipCode = '',
	// } = router?.query;
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
									defaultValue={firstName}
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
									defaultValue={lastName}
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
									defaultValue={city}
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
									defaultValue={state}
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
									defaultValue={email}
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
									defaultValue={phone}
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
							defaultChecked={emailOptIn}
						/>
						<label
							htmlFor={`emailOptIn-${formId}`}
							className="CheckboxField-label text-base md:text-sm"
						>
							Check if you would like us to contact you about special offers, project inspiration, and
							future product announcements.
						</label>
					</div>
					<div className="sr-only">
						<label htmlFor="pardot_extra_field">Comments</label>
						<input type="text" id="pardot_extra_field" name="pardot_extra_field" />
					</div>
				</div>
				<div className="pt-6">
					<button className="Button" type="submit" ref={submitBtn}>Submit</button>
				</div>
			</div>
		</form>
	);
};
