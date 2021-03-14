import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export const EmailList = () => {
	const router = useRouter();
	const formId = 'emailListForm';
	const form = useRef();
	const submitBtn = useRef();
	const hasSsrFormErrors = router.query?.formError === formId;
	const {
		firstName = '',
		lastName = '',
		email = '',
		zipCode = '',
	} = router?.query;

	useEffect(() => {
		if (!process.browser || !hasSsrFormErrors || form.current.checkValidity()) {
			return;
		}
		setTimeout(() => submitBtn.current.click(), 1500);
	}, [hasSsrFormErrors]);

	return (
		<form
			action="https://go.westernwindowsystems.com/l/694473/2020-06-28/35sr32"
			method="post"
			className="space-y-6 md:w-2/3"
			id={formId}
			ref={form}
		>
			<input type="hidden" name="success_location" value={`http://buildlocal.skyewallsbywws.com/api/pardot/${formId}`} />
			<input type="hidden" name="error_location" value={`http://buildlocal.skyewallsbywws.com/api/pardot/${formId}`} />
			<div className="divide-y divide-gray-light divide-opacity-50 space-y-6">
				<div className="space-y-6">
					<div className="space-y-4">
						<h2 className="Heading font-semibold uppercase flex-col text-lg md:text-3xl lg:flex-row">
							Stay in the Loop
						</h2>
						<span className="Rule block" />
						<p className="text-base md:text-xl">
							Join our email list to receive Skye Walls updates, news, offers and more. And don’t worry, we
							won’t share your information with anyone else.
						</p>
					</div>
					<div className="space-y-4">
						{
							hasSsrFormErrors &&
							<div className="text-red font-semibold">
								The request was not completed.<br />
								A required field was missing, the form was invalid, or another issue occurred.<br />
								Please try again or <a className="underline text-blue" href="#">Report issue</a>.
							</div>
						}
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
									htmlFor={`email-${formId}`}
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
								>ZIP Code
								</label>
								<input
									id={`email-${formId}`}
									name="zipCode"
									className="TextField-control"
									required
									pattern="^\d{5}$"
									minLength="5"
									maxLength="5"
									title="Please enter a valid ZIP code"
									defaultValue={zipCode}
								/>
							</div>
						</div>
					</div>
					<div className="CheckboxField">
						<input id={`privacy-${formId}`} required className="CheckboxField-control" type="checkbox" />
						<label
							htmlFor={`privacy-${formId}`}
							className="CheckboxField-label text-base md:text-sm"
						>
							By submitting this form I understand that ## FPO ## may contact me with offers or
							information about their products and service in accordance with the ## FPO ## Privacy
							Policy on # FPO #.
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
