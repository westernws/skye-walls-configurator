import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { SelectorNav } from '~/Components/SelectorNav';
import { Color } from '~/Components/Color';

export const Selector = observer(() => {
	const { page } = useMst();
	const { currentOptionGroup, product } = page;

	if (!currentOptionGroup || !product) {
		return null;
	}
	return (
		<>
			<div className="bg-gray-light100 InsetDivider">
				<div className="text-base px-4 h-8 flex justify-between items-center">
					<h2 className="font-bold uppercase">{currentOptionGroup.displayName}</h2>
					<SelectorNav />
				</div>
			</div>
			<div className="SelectorPanel is-debug">
				<div className="SelectorPanel-inside space-y-10">
					{
						currentOptionGroup.name === 'color' &&
						<div>
							<h3 className="text-right border-b border-gray-light50 border-solid pb-2">
								{product.selectedColor.displayName}
							</h3>
							<Color product={product} hideLegend type="selector" />
						</div>
					}
					{
						Boolean(page.nextOptionGroup) &&
						<button
							type="button"
							className="Button Button--secondary w-full"
							onClick={() => {
								page.setCurrentOptionGroup(page.nextOptionGroup.id);
							}}
						>
							Next: {page.nextOptionGroup.displayName}
						</button>
					}
				</div>
			</div>
		</>
	);
});
