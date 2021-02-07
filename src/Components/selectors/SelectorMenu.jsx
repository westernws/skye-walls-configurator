import React from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import { useMst } from '~/Stores/App.store';

export const SelectorMenu = observer(() => {
	const { page } = useMst();
	const { product } = page;

	if (!product || !product.selectionGroupDisplayNames?.length) {
		return null;
	}
	return (
		<ul className="SelectorMenu print:hidden">
			{
				product.selectionGroups.map((selectionGroup) => {
					return (
						<li
							className={cn('SelectorMenu-item', {
								'is-active': page.currentSelectionGroup.name === selectionGroup.name,
							})}
							key={selectionGroup.displayName}
						>
							<button
								type="button"
								className="SelectorMenu-button"
								onClick={() => {
									page.setCurrentSelectionGroup(selectionGroup.id);
								}}
							>
								{selectionGroup.displayName}
							</button>
						</li>
					);
				})
			}
		</ul>
	);
});
