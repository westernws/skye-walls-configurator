import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const SelectorNav = observer(() => {
	const { page } = useMst();

	return (
		<div className="flex space-x-2">
			{
				Boolean(page.prevOptionGroup) &&
				<button
					className="Breadcrumb Breadcrumb--noTransition is-reversed"
					type="button"
					onClick={() => {
						page.setCurrentOptionGroup(page.prevOptionGroup.id);
					}}
				>
					<ChevronSolid direction="left" className="Breadcrumb-img" />
					<span className="Breadcrumb-text order-first">Back</span>
				</button>
			}
			{
				Boolean(page.prevOptionGroup) && Boolean(page.nextOptionGroup) &&
				<span className="text-gray-light text-sm leading-relaxed">|</span>
			}
			{
				Boolean(page.nextOptionGroup) &&
				<button
					className="Breadcrumb Breadcrumb--noTransition"
					type="button"
					onClick={() => {
						page.setCurrentOptionGroup(page.nextOptionGroup.id);
					}}
				>
					<span className="Breadcrumb-text">Next</span>
					<ChevronSolid direction="right" className="Breadcrumb-img" />
				</button>
			}
		</div>
	);
});
