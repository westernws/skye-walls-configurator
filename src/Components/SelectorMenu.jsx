import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';

export const SelectorMenu = observer(() => {
	const { page } = useMst();
	const { product } = page;

	if (!product || !product.optionGroupDisplayNames?.length) {
		return null;
	}
	return (
		<ul className="SelectorMenu">
			{
				product.optionGroupDisplayNames.map(optionGroupName => (
					<li
						className="SelectorMenu-item"
						key={optionGroupName}
					>
						<button
							type="button"
							className="SelectorMenu-button"
						>
							{optionGroupName}
						</button>
					</li>
				))
			}
		</ul>
	);
});
