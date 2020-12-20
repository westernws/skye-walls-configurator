import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import ReactTooltip from 'react-tooltip';

import { useMst } from '~/Stores/App.store';
import { SelectorNav } from '~/Components/selectors/SelectorNav';
import { SelectorColor } from '~/Components/selectors/SelectorColor';
import { SelectorStandard } from '~/Components/selectors/SelectorStandard';
import { SelectorMulti } from '~/Components/selectors/SelectorMulti';
import { SelectorCta } from '~/Components/selectors/SelectorCta';

export const SelectorPanel = observer(() => {
	const { page } = useMst();
	const {
		currentSelectionGroup,
		product,
	} = page;
	const selectorPanel = useRef(null);
	let SelectorComponent = () => null;

	if (!product) {
		return null;
	}

	useEffect(() => {
		if (!process.browser) {
			return;
		}
		selectorPanel.current.scrollTop = 0;
		ReactTooltip.rebuild();
	}, [currentSelectionGroup]);

	if (currentSelectionGroup.name === 'color') {
		SelectorComponent = SelectorColor;
	} else if (currentSelectionGroup.optionGroups.length > 1) {
		SelectorComponent = SelectorMulti;
	} else {
		SelectorComponent = SelectorStandard;
	}

	return (
		<div className="SelectorPanelContainer print:hidden">
			<div className="SelectorPanelNav xl:hidden">
				<div className="text-base px-4 h-8 flex justify-between items-center">
					<h2 className="font-bold uppercase">{currentSelectionGroup.displayName}</h2>
					<SelectorNav />
				</div>
			</div>
			<div className="SelectorPanel" ref={selectorPanel}>
				<div className="SelectorPanel-inside space-y-10">
					<SelectorComponent />
					<SelectorCta />
				</div>
			</div>
		</div>
	);
});
