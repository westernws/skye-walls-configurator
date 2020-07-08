import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const Selector = observer(() => {
	const { page } = useMst();
	const { currentOptionGroup } = page;

	if (!currentOptionGroup) {
		return null;
	}
	return (
		<div>
			<div>
				<h2>{currentOptionGroup.displayName}</h2>
				<div>
					{
						Boolean(page.prevOptionGroup) &&
						<button
							className="Breadcrumb"
							type="button"
							onClick={() => {
								console.log('do stuff');
							}}
						>
							<span className="Breadcrumb-text">Back</span>
							<ChevronSolid direction="left" className="Breadcrumb-img" />
						</button>
					}
					{
						Boolean(page.nextOptionGroup) &&
						<button
							className="Breadcrumb"
							type="button"
							onClick={() => {
								console.log('do stuff');
							}}
						>
							<span className="Breadcrumb-text">Next</span>
							<ChevronSolid direction="right" className="Breadcrumb-img" />
						</button>
					}
				</div>
			</div>
		</div>
	);
});
