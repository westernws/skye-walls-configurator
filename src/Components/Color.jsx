import React from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import { useInput } from '~/util/useInput';

export const Color = observer(({ product, hideLegend = false, type = '' }) => {
	const { colorOptionGroup } = product;
	const hasColorOptions = Boolean(colorOptionGroup?.options?.length);
	const { setValue } = useInput();

	if (!hasColorOptions) {
		return null;
	}
	return (
		<fieldset
			className={cn('Radio text-xs', {
				'Radio--color': !type,
				'Radio--colorSelector': type === 'selector',
			})}
		>
			{
				!hideLegend &&
				<legend className="Radio-legend text-gray-light uppercase">Color Options:</legend>
			}
			<div className={cn('Radio-group xl:space-x-4', {
				'space-x-2': !type,
			})}
			>
				{
					colorOptionGroup.options.map((colorOptions) => {
						const id = `${product.name}-${colorOptions.name}-${colorOptionGroup.name}-control-colorOptionsForm`;

						return (
							<div key={id} className="Radio-fieldGroup">
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
					})
				}
			</div>
		</fieldset>
	);
});
