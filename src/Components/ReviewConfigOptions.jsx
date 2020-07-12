import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { DummyImage } from '~/Components/DummyImage';
import { CheckSolid } from '~/Components/svg/CheckSolid.svg';

export const ReviewConfigOptions = observer(({ product }) => {
	const { page, modals } = useMst();
	const modal = modals.get('modal-primary');

	return (
		<>
			<ul className="ReviewConfig-options">
				{
					product.selectedOptions.filter(selectedOption => selectedOption.option?.name).map((selectedOption) => {
						const { option, optionGroup } = selectedOption;

						return (
							<li key={option.name} className="ReviewConfig-option space-x-4">
								<div className="ReviewConfig-optionBody space-y-2">
									<DummyImage width="136" height="136" />
									<div>
										<h3 className="text-xs text-gray-light">{optionGroup.displayName}</h3>
										<h4 className="text-sm">{option.displayName}</h4>
									</div>
								</div>
							</li>
						);
					})
				}
			</ul>
			{
				product.optionGroups.filter(optionGroup => optionGroup.options?.length).map(optionGroup => (
					<div key={optionGroup.name}>
						<div className="flex justify-between items-center pb-1 mb-1 border-b border-gray-light border-solid">
							<h2 className="font-bold text-xl uppercase">{optionGroup.displayName}</h2>
							<button
								type="button"
								className="text-xs underline"
								onClick={() => {
									page.setCurrentOptionGroup(optionGroup.id);
									modal.close();
									console.log('do stuff');
								}}
							>
								Edit
							</button>
						</div>
						{
							optionGroup.options.filter(option => option.selected).map(option => (
								<div key={option.name} className="flex justify-between items-center space-y-2">
									<h3 className="text-base">{option.displayName}</h3>
									<div className="w-4 text-red">
										<CheckSolid />
									</div>
								</div>
							))
						}
					</div>
				))
			}
			{
				Boolean(product.selectedScreen) &&
				<p className="text-base mt-4 italic text-center">{product.selectedScreen.description}</p>
			}
		</>
	);
});
