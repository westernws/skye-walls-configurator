import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useInput } from '~/util/useInput';

import { Tooltip } from '~/Components/Tooltip';

export const ColorFieldGroup = observer(({ product, colorOptions, colorOptionGroup }) => {
	const { setValue } = useInput();
	const id = `${product.name}-${colorOptions.name}-${colorOptionGroup.name}-control-colorOptionsForm`;
	const [hover, setHover] = useState(false);

	return (
		<div
			key={id}
			className="Radio-fieldGroup"
			onMouseEnter={() => { setHover(false); }}
			onMouseLeave={() => { setHover(false); }}
		>
			{
				hover &&
				<Tooltip>
					ohai
				</Tooltip>
			}
			<input
				type="radio"
				name={`${product.name}-${colorOptionGroup.name}`}
				value={colorOptions.name}
				id={id}
				className="Radio-control"
				checked={product.selectedColor?.name === colorOptions.name}
				onChange={(event) => {
					setValue(event.target.value);
					product.setColor(event.target.value);
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
