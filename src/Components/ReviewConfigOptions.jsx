import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { ReviewConfigOption } from '~/Components/ReviewConfigOption';
import { ChangeProductConfirm } from '~/Components/ChangeProductConfirm';

export const ReviewConfigOptions = observer(({ product }) => {
	const { modals, closeAllModalsByType } = useMst();
	const modal = modals.get('modal-secondary');

	return (
		<div className="space-y-6">
			<ReviewConfigOption
				selectionGroup={{
					displayNameSingular: 'Product',
					optionGroups: [{
						selectedOption: {
							displayName: product.displayName,
						},
					}],
				}}
				onEditClick={() => {
					modal.open({
						type: 'MODAL',
						name: 'changeProductConfirm',
						content: (
							<ChangeProductConfirm
								showProductImagery={false}
								newProductLink={{ as: '/', href: '/' }}
								onDeclineClick={() => {
									closeAllModalsByType('MODAL_TIGHT');
									closeAllModalsByType('SLIDER_SECONDARY');
								}}
							/>
						),
					});
				}}
			/>
			<ReviewConfigOption
				selectionGroup={{
					displayNameSingular: 'Material',
					optionGroups: [{
						selectedOption: {
							displayName: product.productGroupDisplayName,
						},
					}],
				}}
				onEditClick={() => {
					modal.open({
						type: 'MODAL',
						name: 'changeProductConfirm',
						content: (
							<ChangeProductConfirm
								showProductImagery={false}
								newProductLink={product.productGroupLink}
								onDeclineClick={() => {
									closeAllModalsByType('MODAL_TIGHT');
									closeAllModalsByType('SLIDER_SECONDARY');
								}}
							/>
						),
					});
				}}
			/>
			{
				product.selectionGroups.map((selectionGroup) => {
					return (
						<ReviewConfigOption key={selectionGroup.name} selectionGroup={selectionGroup} />
					);
				})
			}
			<p className="text-base my-12 text-blue text-center">
				Screening solutions available. Ask your Skye Walls expert.
			</p>
		</div>
	);
});
