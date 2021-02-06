import React from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import { ColorFieldGroup } from '~/Components/ColorFieldGroup';

export const Color = observer(({
	product, hideLegend = false, type = '', customColorFontSize = 'text-sm',
}) => {
	const { colorOptionGroup } = product;
	const hasColorOptions = Boolean(colorOptionGroup?.options?.length);
	const standardColorOptions = colorOptionGroup.getOptionsByDisplayOptionGroupName('standard');
	const designerColorOptions = colorOptionGroup.getOptionsByDisplayOptionGroupName('designer');

	if (!hasColorOptions) {
		return null;
	}
	return (
		<fieldset
			className={cn('Radio font-bold', {
				'Radio--color': !type,
				'Radio--colorSelector': type === 'selector',
			})}
		>
			{
				!hideLegend &&
				<legend className="text-sm">Color Options:</legend>
			}
			{
				Boolean(standardColorOptions.length) &&
				<>
					<div className="Radio-displayName">Standard {product.productGroupDisplayName} Colors</div>
					<div className="Radio-group">
						{
							standardColorOptions.map(colorOptions => (
								<ColorFieldGroup
									key={`colorOptions-${colorOptions.name}`}
									groupName={product.name}
									colorOptionGroup={colorOptionGroup}
									colorOptions={colorOptions}
									onChange={(value) => {
										product.setColor(value);
									}}
									isChecked={product.selectedColor?.name === colorOptions.name}
								/>
							))
						}
					</div>
				</>
			}
			{
				Boolean(designerColorOptions.length) &&
				<>
					<div className="Radio-displayName">Designer {product.productGroupDisplayName} Colors</div>
					<div className="Radio-group">
						{
							designerColorOptions.map(colorOptions => (
								<ColorFieldGroup
									key={`colorOptions-${colorOptions.name}`}
									groupName={product.name}
									colorOptionGroup={colorOptionGroup}
									colorOptions={colorOptions}
									onChange={(value) => {
										product.setColor(value);
									}}
									isChecked={product.selectedColor?.name === colorOptions.name}
								/>
							))
						}
					</div>
				</>
			}
			<div className={`font-normal mt-2 ${customColorFontSize}`}>Custom Colors</div>
			<div className={`font-normal ${customColorFontSize}`}>We can match almost any finish.</div>
		</fieldset>
	);
});
