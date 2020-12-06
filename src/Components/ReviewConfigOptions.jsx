import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { DummyImage } from '~/Components/DummyImage';
import { ReviewConfigOption } from '~/Components/ReviewConfigOption';
import { EditPencil } from '~/Components/svg/EditPencil.svg';
import { ChangeProductConfirm } from '~/Components/ChangeProductConfirm';

export const ReviewConfigOptions = observer(({ product }) => {
	const { isMediaQueryXl, modals, closeAllModalsByType } = useMst();
	const modal = modals.get('modal-secondary');
	const reviewSelectionGroups = product.reviewSelectionGroups.filter(selectionGroup => selectionGroup.optionGroups.length);
	const evenSelectionGroups = reviewSelectionGroups.filter((selectionGroup, i) => i % 2 === 0);
	const oddSelectionGroups = reviewSelectionGroups.filter((selectionGroup, i) => i % 2 !== 0);

	return (
		<div className="space-y-6">
			<div className="ReviewConfigOption space-y-6 xl:space-y-0">
				<div className="flex flex-col flex-shrink-0 xl:space-y-4">
					<h2 className="font-bold text-blue">Product:</h2>
					<h3>Performance Sliding Door</h3>
				</div>
				<div className="xl:flex xl:items-center">
					<div>
						<DummyImage width="188" height="132" />
					</div>
					<div className="ReviewConfigOption-control">
						<button
							className="w-10"
							type="button"
							onClick={() => {
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
						>
							<EditPencil />
						</button>
					</div>
				</div>
			</div>
			<div className="ReviewConfigOption space-y-6 xl:space-y-0">
				<div className="flex flex-col flex-shrink-0 xl:space-y-4">
					<h2 className="font-bold text-blue">Product:</h2>
					<h3>Performance Sliding Door</h3>
				</div>
				<div className="xl:flex xl:items-center">
					<div>
						<DummyImage width="188" height="132" />
					</div>
					<div className="ReviewConfigOption-control">
						<button
							className="w-10"
							type="button"
							onClick={() => {
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
						>
							<EditPencil />
						</button>
					</div>
				</div>
			</div>
			<div className="ReviewConfigOption space-y-6 xl:space-y-0">
				<div className="flex flex-col xl:space-y-4">
					<h2 className="font-bold text-blue">Environment:</h2>
				</div>
				<div className="xl:flex xl:items-center">
					<div className="flex flex-col space-y-6 xl:flex-row xl:space-y-0 xl:space-x-2">
						<div className="flex flex-col items-center space-y-2">
							<DummyImage width="188" height="132" />
							<h3 className="flex flex-col items-center">
								<strong className="text-blue">View</strong>
								<span>Desert Oasis</span>
							</h3>
						</div>
						<div className="flex flex-col items-center space-y-2">
							<DummyImage width="188" height="132" />
							<h3 className="flex flex-col items-center">
								<strong className="text-blue">View</strong>
								<span>Desert Oasis</span>
							</h3>
						</div>
						<div className="flex flex-col items-center space-y-2">
							<DummyImage width="188" height="132" />
							<h3 className="flex flex-col items-center">
								<strong className="text-blue">View</strong>
								<span>Desert Oasis</span>
							</h3>
						</div>
					</div>
					<div className="ReviewConfigOption-control">
						<button
							className="w-10"
							type="button"
							onClick={() => {
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
						>
							<EditPencil />
						</button>
					</div>
				</div>
			</div>
			<ul className="ReviewConfig-options">
				{
					product.selectedOptions.filter(selectedOption => selectedOption.option?.name).map((selectedOption) => {
						const { option, optionGroup } = selectedOption;

						return (
							<li key={option.name} className="ReviewConfig-option space-x-4">
								<div className="ReviewConfig-optionBody space-y-2">
									<DummyImage width="136" height="136" />
									<div>
										<h3 className="text-xs text-gray-light">{optionGroup?.selectionGroup?.displayName}</h3>
										<h4 className="text-sm">{option.displayName}</h4>
									</div>
								</div>
							</li>
						);
					})
				}
			</ul>
			<div className="space-y-8 xl:flex xl:space-x-12 xl:space-y-0 xl:pt-12">
				{
					!isMediaQueryXl &&
					product.reviewSelectionGroups.map(selectionGroup => <ReviewConfigOption key={selectionGroup.name} selectionGroup={selectionGroup} />)
				}
				{
					isMediaQueryXl &&
					<>
						<div className="w-1/2 space-y-12">
							{
								evenSelectionGroups.map(selectionGroup => <ReviewConfigOption key={selectionGroup.name} selectionGroup={selectionGroup} />)
							}
						</div>
						<div className="w-1/2 space-y-12">
							{
								oddSelectionGroups.map(selectionGroup => <ReviewConfigOption key={selectionGroup.name} selectionGroup={selectionGroup} />)
							}
						</div>
					</>
				}
			</div>
			{
				Boolean(product.selectedScreen) &&
				<p className="text-base mt-4 italic text-center">{product.selectedScreen.description}</p>
			}
		</div>
	);
});
