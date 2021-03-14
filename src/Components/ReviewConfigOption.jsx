import React from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import cn from 'classnames';

import { useMst } from '~/Stores/App.store';
import { EditPencil } from '~/Components/svg/EditPencil.svg';

export const ReviewConfigOption = observer(({ selectionGroup = {}, onEditClick, padThumb = true }) => {
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
			hex = '',
			thumb = null,
		} = {},
	} = selectedOptionGroup;

	return (
		<div className="ReviewConfigOption space-y-6 xl:space-y-0">
			<div className="flex flex-col flex-shrink-0 xl:space-y-4 print:flex-row print:space-y-0 print:space-x-2">
				<h2 className="font-semibold text-blue print:text-black">
					{(selectionGroup.displayNameSingular || selectionGroup.displayName)}:
				</h2>
				{
					!hasManyOptionGroups &&
					<h3>{selectedOptionDisplayName}</h3>
				}
			</div>
			<div className="xl:flex xl:items-center">
				{
					!hasManyOptionGroups && Boolean(thumb) &&
					<div className={cn('ReviewConfigOption-thumb print:hidden', {
						'xl:p-8': padThumb,
					})}
					>
						<Image
							src={thumb.src}
							alt={selectedOptionDisplayName}
							width={thumb.width}
							height={thumb.height}
							layout="responsive"
						/>
					</div>
				}
				{
					!hasManyOptionGroups && Boolean(hex) &&
					<div className="print:hidden">
						<div className="ReviewConfigOption-swatch" style={{ backgroundColor: `#${hex}` }} />
					</div>
				}
				{
					hasManyOptionGroups && Boolean(optionGroups.find(optionGroup => optionGroup.selectedOption)) &&
					<div className="flex flex-col space-y-6 xl:flex-row xl:space-y-0 xl:space-x-6 print:block print:space-x-0 print:ml-8">
						{
							optionGroups.filter(optionGroup => optionGroup.selectedOption).map((optionGroup) => {
								return (
									<div key={optionGroup.name} className="flex flex-col items-center space-y-2 print:block print:space-y-0">
										{
											Boolean(optionGroup.selectedOption.thumb) &&
											<div className={cn('ReviewConfigOption-thumb p-0 print:hidden', {
												'xl:p-8': padThumb,
											})}
											>
												<Image
													src={optionGroup.selectedOption.thumb.src}
													alt={selectedOptionDisplayName}
													width={optionGroup.selectedOption.thumb.width}
													height={optionGroup.selectedOption.thumb.height}
													layout="responsive"
												/>
											</div>
										}
										{
											Boolean(optionGroup.selectedOption.hex) &&
											<div className="flex flex-col justify-center h-full print:hidden">
												<div
													className="ReviewConfigOption-swatchMulti"
													style={{ backgroundColor: `#${optionGroup.selectedOption.hex}` }}
												/>
											</div>
										}
										<h3 className="flex flex-col items-center print:block print:space-x-2">
											<strong className="text-blue print:text-black">{optionGroup.displayName}</strong>
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
				<div className="ReviewConfigOption-control print:hidden">
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
