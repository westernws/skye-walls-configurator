import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { SelectorNav } from '~/Components/SelectorNav';
import { SelectorColor } from '~/Components/SelectorColor';
import { SelectorStandard } from '~/Components/SelectorStandard';
import { SelectorCta } from '~/Components/SelectorCta';

export const SelectorPanel = observer(() => {
	const { page } = useMst();
	const {
		currentSelectionGroup,
		product,
	} = page;
	const selectorPanel = useRef(null);

	if (!product) {
		return null;
	}

	useEffect(() => {
		selectorPanel.current.scrollTop = 0;
	}, [currentSelectionGroup]);

	return (
		<div className="SelectorPanelContainer">
			<div className="SelectorPanelNav xl:hidden">
				<div className="text-base px-4 h-8 flex justify-between items-center">
					<h2 className="font-bold uppercase">{currentSelectionGroup.displayName}</h2>
					<SelectorNav />
				</div>
			</div>
			<div className="SelectorPanel" ref={selectorPanel}>
				<div className="SelectorPanel-inside space-y-10">
					{
						currentSelectionGroup.name === 'color' &&
						<SelectorColor />
					}
					{
						currentSelectionGroup.name !== 'color' &&
						<SelectorStandard
							currentSelectionGroup={currentSelectionGroup}
						/>
					}
					<SelectorCta />
				</div>
			</div>
		</div>
	);
});
