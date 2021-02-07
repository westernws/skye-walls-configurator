import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const SelectorNav = observer(() => {
	const { page } = useMst();

	return (
		<div className="flex space-x-2">
			{
				Boolean(page.prevSelectionGroup) &&
				<button
					className="Breadcrumb Breadcrumb--noTransition is-reversed"
					type="button"
					onClick={() => {
						page.setCurrentSelectionGroup(page.prevSelectionGroup.id);
					}}
				>
					<ChevronSolid direction="left" className="Breadcrumb-img" />
					<span className="Breadcrumb-text order-first">Back</span>
				</button>
			}
			{
				Boolean(page.prevSelectionGroup) && Boolean(page.nextSelectionGroup) &&
				<span className="text-gray-light text-sm leading-relaxed">|</span>
			}
			{
				Boolean(page.nextSelectionGroup) &&
				<button
					className="Breadcrumb Breadcrumb--noTransition"
					type="button"
					onClick={() => {
						page.setCurrentSelectionGroup(page.nextSelectionGroup.id);
					}}
				>
					<span className="Breadcrumb-text">Next</span>
					<ChevronSolid direction="right" className="Breadcrumb-img" />
				</button>
			}
		</div>
	);
});
