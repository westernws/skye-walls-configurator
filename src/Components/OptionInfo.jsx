import React from 'react';
import { observer } from 'mobx-react-lite';

import { DummyImage } from '~/Components/DummyImage';
import { useMst } from '~/Stores/App.store';

export const OptionInfo = observer(({ option }) => {
	const { isMediaQueryXl } = useMst();
	const { displayName, description } = option;

	return (
		<div className="space-y-6 pb-8">
			<DummyImage width={isMediaQueryXl ? '420' : '825'} height="220" />
			<div className="px-12">
				<div className="xl:px-4 space-y-2 mb-4">
					<h1 className="text-3xl text-blue">{displayName}</h1>
					<div className="Divider Divider--fade" />
				</div>
				<div className="xl:p-4">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
});
