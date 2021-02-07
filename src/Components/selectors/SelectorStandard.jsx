import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { SelectorValueStandard } from '~/Components/selector-values/SelectorValueStandard';

export const SelectorStandard = observer(() => {
	const { page } = useMst();
	const { currentSelectionGroup } = page;

	return (
		<div>
			{
				currentSelectionGroup.optionGroups.map((optionGroup) => {
					return <SelectorValueStandard key={optionGroup.name} optionGroup={optionGroup} />;
				})
			}
			{
				!currentSelectionGroup.optionGroups?.length && Boolean(currentSelectionGroup.description) &&
				<p>{currentSelectionGroup.description}</p>
			}
		</div>
	);
});
