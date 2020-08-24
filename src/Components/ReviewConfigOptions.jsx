import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { DummyImage } from '~/Components/DummyImage';
import { ReviewConfigOption } from '~/Components/ReviewConfigOption';

export const ReviewConfigOptions = observer(({ product }) => {
	const { isMediaQueryXl } = useMst();
	const optionGroups = product.optionGroups.filter(optionGroup => optionGroup.options?.length);
	const evenOptionGroups = optionGroups.filter((optionGroup, i) => i % 2 === 0);
	const oddOptionGroups = optionGroups.filter((optionGroup, i) => i % 2 !== 1);

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
										<h3 className="text-xs text-gray-light">{optionGroup?.displayName}</h3>
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
					optionGroups.map(optionGroup => <ReviewConfigOption key={optionGroup.name} optionGroup={optionGroup} />)
				}
				{
					isMediaQueryXl &&
					<div className="w-1/2 space-y-12">
						{
							evenOptionGroups.map(optionGroup => <ReviewConfigOption key={optionGroup.name} optionGroup={optionGroup} />)
						}
					</div>
				}
				{
					isMediaQueryXl &&
					<div className="w-1/2 space-y-12">
						{
							oddOptionGroups.map(optionGroup => <ReviewConfigOption key={optionGroup.name} optionGroup={optionGroup} />)
						}
					</div>
				}
			</div>
			{
				Boolean(product.selectedScreen) &&
				<p className="text-base mt-4 italic text-center">{product.selectedScreen.description}</p>
			}
		</>
	);
});
