import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { ColorFieldGroup } from '~/Components/ColorFieldGroup';
import { useMst } from '~/Stores/App.store';
import { HeaderSimple } from '~/Components/selector-values/HeaderSimple';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const WallColor = observer(({ optionGroup }) => {
	const { page } = useMst();
	const [isOpen, setIsOpen] = useState(false);
	const {
		product,
		showOptionGroupAccordion,
	} = page;

	return (
		<>
			{
				showOptionGroupAccordion &&
				<button
					type="button"
					className="flex mb-4 justify-between w-full p-2 border-b-4 border-solid leading-tight border-gray-light100 bg-gray-light50"
					onClick={() => {
						setIsOpen(true);
					}}
				>
					<h4 className="uppercase font-bold">{optionGroup.displayName}</h4>
					<div>
						{
							isOpen &&
							<div className="w-4 mr-1">
								<ChevronSolid />
							</div>
						}
					</div>
				</button>
			}
			{
				!showOptionGroupAccordion &&
				<HeaderSimple optionGroup={optionGroup} />
			}
			<fieldset className="Radio Radio--colorSelector">
				<div className="Radio-group">
					{
						optionGroup.options.map(colorOption => (
							<ColorFieldGroup
								key={colorOption.name}
								colorOptions={colorOption}
								groupName="wallcolor"
								isChecked={optionGroup.options.find(o => o.selected)?.name === colorOption.name}
								onChange={(value) => {
									product.setOption(optionGroup.name, value);
								}}
							/>
						))
					}
				</div>
			</fieldset>
		</>
	);
});
