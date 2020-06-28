import React, { useEffect } from 'react';
import cn from 'classnames';

import { PanelProduct } from '~/Components/PanelProduct';
import { useMst } from '~/Stores/App.store';

export const PanelGroup = ({ className = '', selectedProducts = [], children = null }) => {
	const { setActivePanelProduct } = useMst();

	useEffect(() => {
		if (!selectedProducts.find(product => product.isActive)) {
			setActivePanelProduct(selectedProducts[0]);
		}
	}, []);

	return (
		<div className="overflow-x-hidden">
			<ul className={cn('PanelGroup', className)}>
				{
					Boolean(selectedProducts.length) &&
					selectedProducts.map((product) => {
						return (
							<PanelProduct key={product.name} product={product} />
						);
					})
				}
				{
					Boolean(children) &&
					children
				}
			</ul>
		</div>
	);
};
