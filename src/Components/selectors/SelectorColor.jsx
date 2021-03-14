import React from 'react';
import { observer } from 'mobx-react-lite';

import { Color } from '~/Components/Color';
import { useMst } from '~/Stores/App.store';

export const SelectorColor = observer(() => {
	const { page } = useMst();
	const {
		currentSelectionGroup,
		product,
	} = page;

	return (
		<div>
			<div className="flex justify-between items-baseline">
				<h2 className="text-blue text-3xl">{currentSelectionGroup.displayName}</h2>
				<h3 className="text-right pb-2 font-semibold">
					{product.selectedColor.displayName}
				</h3>
			</div>
			<div className="Divider" />
			<Color product={product} hideLegend type="selector" customColorFontSize="font-base" />
		</div>
	);
});
