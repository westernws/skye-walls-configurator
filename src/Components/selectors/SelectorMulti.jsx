import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { ImageGrid } from '~/Components/selector-values/ImageGrid';
import { SelectorValueStandard } from '~/Components/selector-values/SelectorValueStandard';
import { WallColor } from '~/Components/selector-values/WallColor';

export const SelectorMulti = observer(() => {
	const { page } = useMst();
	const {
		currentSelectionGroup,
		showOptionGroupAccordion,
	} = page;

	return (
		<div>
			{
				!showOptionGroupAccordion &&
				<div className="mb-8">
					<div className="flex justify-between items-baseline">
						<h2 className="text-blue text-3xl">{currentSelectionGroup.displayName}</h2>
					</div>
					<div className="Divider" />
				</div>
			}
			{
				currentSelectionGroup.optionGroups.map((optionGroup) => {
					let SelectorValueComponent = () => null;

					if (optionGroup.name === 'view' || optionGroup.name === 'floor') {
						SelectorValueComponent = ImageGrid;
					} else if (optionGroup.name === 'wall') {
						SelectorValueComponent = WallColor;
					} else {
						SelectorValueComponent = SelectorValueStandard;
					}

					return (
						<div key={optionGroup.id} className="mb-4">
							<SelectorValueComponent optionGroup={optionGroup} alwaysOpen />
						</div>
					);
				})
			}
			{
				!currentSelectionGroup.optionGroups?.length && Boolean(currentSelectionGroup.description) &&
				<p>{currentSelectionGroup.description}</p>
			}
		</div>
	);
});
