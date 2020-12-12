import React from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '~/Stores/App.store';
import { DummyImage } from '~/Components/DummyImage';
import { EditPencil } from '~/Components/svg/EditPencil.svg';

export const ReviewConfigOption = observer(({ selectionGroup = {}, onEditClick }) => {
	const { modals, page } = useMst();
	const modal = modals.get('modal-primary');
	const {
		id,
		optionGroups = [],
	} = selectionGroup;
	const hasManyOptionGroups = optionGroups.length > 1;
	const selectedOptionGroup = optionGroups[0];
	const {
		selectedOption: {
			displayName: selectedOptionDisplayName,
		} = {},
	} = selectedOptionGroup;

	return (
		<div className="ReviewConfigOption space-y-6 xl:space-y-0">
			<div className="flex flex-col flex-shrink-0 xl:space-y-4">
				<h2 className="font-bold text-blue">
					{(selectionGroup.displayNameSingular || selectionGroup.displayName)}:
				</h2>
				{
					!hasManyOptionGroups &&
					<h3>{selectedOptionDisplayName}</h3>
				}
			</div>
			<div className="xl:flex xl:items-center">
				{
					!hasManyOptionGroups &&
					<div>
						<DummyImage width="188" height="132" />
					</div>
				}
				{
					hasManyOptionGroups &&
					<div className="flex flex-col space-y-6 xl:flex-row xl:space-y-0 xl:space-x-2">
						{
							optionGroups.map((optionGroup) => {
								return (
									<div key={optionGroup.name} className="flex flex-col items-center space-y-2">
										<DummyImage width="188" height="132" />
										<h3 className="flex flex-col items-center">
											<strong className="text-blue">{optionGroup.displayName}</strong>
											{
												Boolean(optionGroup.selectedOption) &&
												<span>{optionGroup.selectedOption.displayName}</span>
											}
										</h3>
									</div>
								);
							})
						}
					</div>
				}
				<div className="ReviewConfigOption-control">
					<button
						className="w-10"
						type="button"
						onClick={() => {
							if (onEditClick) {
								onEditClick?.();
							} else {
								page.setCurrentSelectionGroup(id);
								modal.close();
							}
						}}
					>
						<EditPencil />
					</button>
				</div>
			</div>
		</div>
	);
});
