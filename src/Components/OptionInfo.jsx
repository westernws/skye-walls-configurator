import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { DummyImage } from '~/Components/DummyImage';
import { useMst } from '~/Stores/App.store';

export const OptionInfo = observer(({ optionGroup, option, isSelected = false }) => {
	const { page, modals, isMediaQueryXl } = useMst();
	const { product } = page;
	const { displayName, description } = option;
	const primaryModal = modals.get('modal-primary');

	return (
		<div className="space-y-6 pb-8">
			<DummyImage width={isMediaQueryXl ? '420' : '825'} height="220" />
			<div className="xl:p-4">
				<h1 className="text-2xl">{displayName}</h1>
			</div>
			<div className="xl:px-4">
				<div className="Rule" />
			</div>
			<div className="xl:p-4">
				<p>{description}</p>
			</div>
			<div className="xl:p-4">
				<button
					type="button"
					className="Button w-full"
					onClick={() => {
						if (!isSelected) {
							product.setOption(optionGroup.name, option.name);
						}
						primaryModal.close();
					}}
				>
					{ isSelected ? 'Continue' : 'Select Option' }
				</button>
			</div>
		</div>
	);
});
