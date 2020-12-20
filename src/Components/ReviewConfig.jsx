import React from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import delay from 'lodash/delay';
import { getSnapshot } from 'mobx-state-tree';

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
			{/* 1800x1200 */}
			<div className="ReviewFooter print:hidden">
				<div className="py-3 px-8 border-t border-gray-lighter border-solid">
					<button
						type="button"
						className="Button w-full"
						onClick={() => {
							appStore.closeAllModals();
							const snapshot = JSON.stringify(getSnapshot(appStore));

							delay(() => {
								modal.open({
									title: 'Save to PDF',
									type: 'MODAL',
									content: (
										<p className="font-italic text-lg">
											Please wait while we generate a PDF for your configured product…
										</p>
									),
								});
							}, 500);
							axios.request({
								url: '/api/save-pdf',
								method: 'post',
								data: {
									filename: selectedProduct.generatedPdfFilename,
									link: selectedProduct.configLink.as,
									snapshot,
								},
							}).then((response) => {
								const {
									data: {
										data: {
											Location: href = '',
										} = {},
									} = {},
								} = response;
								const tempLink = document.createElement('a');

								modal.close();
								tempLink.href = href;

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
