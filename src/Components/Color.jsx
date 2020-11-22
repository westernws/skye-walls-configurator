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
				<legend className="Radio-legend xl:text-baseline">Color Options:</legend>
			}
			{
				Boolean(standardColorOptions.length) &&
				<>
					<div className="text-sm font-normal mt-4 mb-2">Standard {product.productGroupDisplayName} Colors</div>
					<div className={cn('Radio-group xl:space-x-4', {
						'space-x-2': !type,
					})}
					>
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
					<div className="text-sm font-normal mt-4 mb-2">Designer {product.productGroupDisplayName} Colors</div>
					<div className={cn('Radio-group xl:space-x-4', {
						'space-x-2': !type,
					})}
					>
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
		</fieldset>
	);
});
