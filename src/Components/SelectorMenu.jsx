import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

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
				product.optionGroups.map(optionGroup => (
					<li
						className={cn('SelectorMenu-item', {
							'is-active': page.currentOptionGroup.name === optionGroup.name,
						})}
						key={optionGroup.displayName}
					>
						<button
							type="button"
							className="SelectorMenu-button"
							onClick={() => {
								page.setCurrentOptionGroup(optionGroup.id);
							}}
						>
							{optionGroup.displayName}
						</button>
					</li>
				))
			}
		</ul>
	);
});
