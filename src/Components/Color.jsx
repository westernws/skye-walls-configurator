import React from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import { ColorFieldGroup } from '~/Components/ColorFieldGroup';

export const Color = observer(({ product, hideLegend = false, type = '' }) => {
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
				<legend className="Radio-legend xl:text-base">Color Options:</legend>
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
									product={product}
									colorOptionGroup={colorOptionGroup}
									colorOptions={colorOptions}
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
									product={product}
									colorOptionGroup={colorOptionGroup}
									colorOptions={colorOptions}
								/>
							))
						}
					</div>
				</>
			}
			<div className="font-normal mt-2">Custom Colors</div>
			<div className="text-sm font-normal text-blue">We can match almost any finish.</div>
		</fieldset>
	);
});
