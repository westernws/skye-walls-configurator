import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

import { useMst } from '~/Stores/App.store';

export const SelectorMenu = observer(() => {
	const { page } = useMst();
	const { product } = page;

	if (!product || !product.selectionGroupDisplayNames?.length) {
		return null;
	}
	return (
		<ul className="SelectorMenu">
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
							{
								selectionGroup.optionGroups.length > 1 &&
								<ul className="SelectorSubMenu space-y-4">
									{
										selectionGroup.optionGroups.map((optionGroup) => {
											return (
												<li key={optionGroup.name}>
													<button
														className="SelectorSubMenu-item"
														type="button"
														onClick={() => {
															// window.scrollTo()
														}}
													>
														{optionGroup.name}
													</button>
												</li>
											);
										})
									}
								</ul>
							}
						</li>
					);
				})
			}
		</ul>
	);
});
