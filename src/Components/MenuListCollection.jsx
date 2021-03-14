import React from 'react';

import { MenuListItemProduct } from '~/Components/MenuListItemProduct';

export const MenuListCollection = ({ title, products, selectedProduct }) => {
	return (
		<div className="bg-gray-lighter p-4 space-y-4">
			<div className="text-sm font-semibold uppercase">{title}</div>
			<ul className="Menu-subItemsCollection space-y-2">
				{
					products.map(product => (
						<MenuListItemProduct
							key={product.name}
							product={product}
							isSelected={product.name === selectedProduct.name}
						/>
					))
				}
			</ul>
		</div>
	);
};
