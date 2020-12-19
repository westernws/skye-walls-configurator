import React from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import Link from 'next/link';

import { useMst } from '~/Stores/App.store';
import { ConfigProductImagery } from '~/Components/ConfigProductImagery';
import { ReviewConfigOptions } from '~/Components/ReviewConfigOptions';
import { HeadingBordered } from '~/Components/HeadingBordered';

export const ReviewConfig = observer(() => {
	const appStore = useMst();
	const { modals, page } = appStore;
	const modal = modals.get('modal-primary');
	const selectedProduct = page?.product;

	if (!selectedProduct) {
		return null;
	}
	selectedProduct.productGroupImage.setWidth(188);
	return (
		<div className="ReviewConfigContainer">
			<div className="ReviewNav xl:hidden">
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
				<div className="ConfigImage ConfigImage--review">
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
			{/* 1800x1200 */}
			<div className="ReviewFooter">
				<div className="py-3 px-8 border-t border-gray-lighter border-solid">
					<Link as={`${selectedProduct.configLink.as}/save-pdf`} href={`${selectedProduct.configLink.href}/save-pdf`}>
						<a>Save PDF</a>
					</Link>
					<button
						type="button"
						className="Button w-full"
						onClick={() => {
							const selectedOptionGroups = selectedProduct.optionGroups.filter((optionGroup) => {
								return optionGroup.selectedOption;
							});

							axios.request({
								url: '/api/save-pdf',
								method: 'post',
								headers: {

								},
								data: {
									link: selectedProduct.configLink.as,
								},
								responseType: 'blob',
							}).then((response) => {
								const blob = new Blob([response.data], { type: 'application/pdf' });
								const tempLink = document.createElement('a');
								tempLink.href = window.URL.createObjectURL(blob);
								tempLink.download = 'product.pdf';

								document.body.appendChild(tempLink);
								tempLink.click();
								document.body.removeChild(tempLink);
							});
						}}
					>
						Save to PDF
					</button>
				</div>
			</div>
		</div>
	);
});
