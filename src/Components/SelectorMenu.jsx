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
				product.selections.map((selection) => {
					const selectionGroup = selection.optionGroups?.length ? selection : null;
					const optionGroup = selection.optionGroup || selection;
					const isActive = (
						page.currentOptionGroup.name === optionGroup.name
						|| (selectionGroup && selectionGroup.name === page.currentOptionGroup.selectionGroup)
					);

					return (
						<li
							className={cn('SelectorMenu-item', {
								'is-active': isActive,
							})}
							key={optionGroup.displayName}
						>
							<button
								type="button"
								className="SelectorMenu-button"
								onClick={() => {
									if (selectionGroup) {
										const selectionOptGrp = product.optionGroups.find(optGrp => optGrp.selectionGroup === selectionGroup.name);

										page.setCurrentOptionGroup(selectionOptGrp.id);
									} else {
										page.setCurrentOptionGroup(optionGroup.id);
									}
								}}
							>
								{optionGroup.displayName}
							</button>
						</li>
					);
				})
			}
		</ul>
	);
});
