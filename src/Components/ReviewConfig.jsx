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
								// Try to find out the filename from the content disposition `filename` value
								// const disposition = response.headers['content-disposition'];
								// const matches = /"([^"]*)"/.exec(disposition);
								// var filename = (matches != null && matches[1] ? matches[1] : 'file.pdf');
								// The actual download
								const blob = new Blob([response.data], { type: 'application/pdf' });
								const link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob);
								link.download = 'product.pdf';

								document.body.appendChild(link);

								link.click();
							});
							// axios.post('/api/save-pdf', {
							// 	link: selectedProduct.configLink.as,
								// productName: selectedProduct.name,
								// selectedOptionGroups: selectedOptionGroups.map((selectedOptionGroup) => {
								// 	return {
								// 		optionGroupName: selectedOptionGroup.name,
								// 		optionName: selectedOptionGroup.selectedOption.name,
								// 	};
								// }),
							// });
						}}
					>
						Save to PDF
					</button>
				</div>
			</div>
		</div>
	);
});
