import React from 'react';
import { observer } from 'mobx-react-lite';

import { useInput } from '~/util/useInput';

export const ColorFieldGroup = observer(({
	colorOptions, colorOptionGroup = {}, groupName, isChecked, onChange,
}) => {
	const { setValue } = useInput();
	const {
		name: cogName = 'fpo',
	} = colorOptionGroup;
	const id = `${groupName}-${colorOptions.name}-${cogName}-control-colorOptionsForm`;

	return (
		<div
			key={id}
			className="Radio-fieldGroup"
			data-tip={colorOptions.displayName}
		>
			<input
				type="radio"
				name={`${groupName}-${cogName}`}
				value={colorOptions.name}
				id={id}
				className="Radio-control"
				checked={isChecked}
				onChange={(event) => {
					setValue(event.target.value);
					onChange(event.target.value);
				}}
			/>
			<label
				className="Radio-label"
				htmlFor={id}
				style={{ backgroundColor: `#${colorOptions.hex}` }}
			>
				<span className="sr-only">{colorOptions.displayName}</span>
			</label>
		</div>
	);
});
