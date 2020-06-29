import React from 'react';
import Router from 'next/router';

export const EmailList = () => {
	console.log(Router);
	return (
		<form
			action={`http://go.westernwindowsystems.com/l/694473/2020-06-28/35sr32?success_location=${encodeURIComponent('http://localhost:3000/?form-success=emailListForm')}&error_location=${encodeURIComponent('http://localhost:3000/?form-error=emailListForm')}`}
			method="post"
			className="divide-y divide-gray-light divide-opacity-50 space-y-6 md:w-2/3"
		>
			<div className="space-y-6">
				<div className="space-y-4">
					<h2 className="Heading font-bold uppercase flex-col text-lg md:text-3xl lg:flex-row">
						Stay in the Loop
					</h2>
					<span className="Rule block" />
					<p className="text-base md:text-xl">
						Join our email list to receive Skye Walls updates, news, offers and more. And don’t worry, we
						won’t share your information with anyone else.
					</p>
				</div>
				<div className="space-y-4">
					<div className="space-y-2 md:flex md:space-y-0 md:space-x-12">
						<div className="TextField space-y-2 md:w-1/2">
							<label
								htmlFor="firstName-emailListForm"
								className="TextField-label text-base md:text-sm"
							>First Name
							</label>
							<input id="firstName-emailListForm" name="firstName" className="TextField-control" />
						</div>
						<div className="TextField space-y-2 md:w-1/2">
							<label
								htmlFor="lastName-emailListForm"
								className="TextField-label text-base md:text-sm"
							>Last Name
							</label>
							<input id="lastName-emailListForm" name="lastName" className="TextField-control" />
						</div>
					</div>
					<div className="space-y-2 md:flex md:space-y-0 md:space-x-12">
						<div className="TextField space-y-2 md:w-1/2">
							<label
								htmlFor="email-emailListForm"
								className="TextField-label text-base md:text-sm"
								type="email"
							>Email
							</label>
							<input id="email-emailListForm" name="email" className="TextField-control" />
						</div>
						<div className="TextField space-y-2 md:w-1/2">
							<label
								htmlFor="email-emailListForm"
								className="TextField-label text-base md:text-sm"
							>ZIP Code
							</label>
							<input id="email-emailListForm" name="zipCode" className="TextField-control" />
						</div>
					</div>
				</div>
				<div className="CheckboxField">
					<input id="privacy-emailListForm" required className="CheckboxField-control" type="checkbox" />
					<label
						htmlFor="privacy-emailListForm"
						className="CheckboxField-label text-base md:text-sm"
					>
						By submitting this form I understand that ## COMPANY_FPO ## may contact me with offers or
						information about their products and service in accordance with the ## COMPANY_FPO ## Privacy
						Policy on # PRIVACY_POLICY_LINK_FPO #.
					</label>
				</div>
				<div className="sr-only">
					<label htmlFor="pardot_extra_field">Comments</label>
					<input type="text" id="pardot_extra_field" name="pardot_extra_field" />
				</div>
			</div>
			<div className="pt-6">
				<button className="Button" type="submit">Submit</button>
			</div>
		</form>
	);
};
