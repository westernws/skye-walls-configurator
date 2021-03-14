import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { ConfigProductImagery } from '~/Components/ConfigProductImagery';
import { ReviewConfigOptions } from '~/Components/ReviewConfigOptions';
import { HeadingBordered } from '~/Components/HeadingBordered';
import { ContactUs } from '~/Components/ContactUs';

export const ReviewConfig = observer(() => {
	const appStore = useMst();
	const { modals, page } = appStore;
	const modal = modals.get('modal-primary');
	const selectedProduct = page?.product;

	if (!selectedProduct) {
		return null;
	}
	selectedProduct.productGroupImage.setWidth(188);
	appStore.contactUs.setConfiguredProduct(selectedProduct);

	return (
		<div className="ReviewConfigContainer">
			<div className="ReviewNav xl:hidden print:hidden">
				<button
					type="button"
					className="Button Button--tertiary justify-center"
					onClick={() => {
						modal.close();
					}}
				>
					&lt;&nbsp;Back to Design
				</button>
			</div>
			<div className="ReviewConfig">
				<div className="ConfigImage ConfigImage--review print:hidden">
					<ConfigProductImagery />
				</div>
				<div className="SiteMaxWidth m-auto">
					<div className="ReviewConfig-body divide-y-2 divide-gray-light100">
						<div className="p-8 space-y-8">
							<HeadingBordered>Review Your Design</HeadingBordered>
							<ReviewConfigOptions product={selectedProduct} />
						</div>
					</div>
				</div>
			</div>
			<div className="ReviewFooter print:hidden">
				<div className="flex justify-center items-center py-3 px-8 border-t border-gray-lighter border-solid space-x-6">
					<button
						type="button"
						className="Button w-6/12"
						onClick={page.savePdf}
					>
						Save
					</button>
					<button
						className="Button Button--inverted w-6/12 xl:px-12"
						type="button"
						onClick={() => {
							appStore.contactUs.reset();
							modal.open({
								title: 'Contact Us',
								type: 'FROSTY',
								showCloseBtn: true,
								showBackdrop: true,
								content: <ContactUs />,
							});
						}}
					>
						Send to Skye Walls
					</button>
				</div>
			</div>
		</div>
	);
});
