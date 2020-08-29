import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { CheckSolid } from '~/Components/svg/CheckSolid.svg';

export const ReviewConfigOption = observer(({ selectionGroup }) => {
	const {
		name, id, displayName, optionGroups,
	} = selectionGroup;
	const { page, modals } = useMst();
	const modal = modals.get('modal-primary');

	return (
		<div key={name}>
			<div className="flex justify-between items-center pb-1 mb-1 border-b border-gray-light border-solid">
				<h2 className="font-bold text-xl uppercase">{displayName}</h2>
				<button
					type="button"
					className="text-xs underline"
					onClick={() => {
						page.setCurrentSelectionGroup(id);
						modal.close();
					}}
				>
					Edit
				</button>
			</div>
			{
				optionGroups.map((optionGroup) => {
					return optionGroup.options.filter(option => option.selected).map(option => (
						<div key={option.name} className="flex justify-between items-center space-y-2">
							<h3 className="text-base">{option.displayName}</h3>
							<div className="w-4 text-red">
								<CheckSolid />
							</div>
						</div>
					));
				})
			}
		</div>
	);
});
