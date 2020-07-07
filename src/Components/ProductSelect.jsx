import React from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { DummyImage } from '~/Components/DummyImage';
import { useMst } from '~/Stores/App.store';

export const ProductSelect = observer(({ displayGroupName, products, selectedProduct }) => {
	const { isMediaQueryXl } = useMst();

	return (
		<>
			<h2 className="border-b border-gray-light py-2 text-sm font-bold">{displayGroupName}</h2>
			{
				products.map((product) => {
					const isSelectedProduct = product.name === selectedProduct.name;

					return (
						<div
							key={product.name}
							className={cn('flex p-4 space-x-4', {
								'bg-gray-lighter': isSelectedProduct,
							})}
						>
							<div className="flex-shrink-0">
								<DummyImage width={isMediaQueryXl ? '165' : '250'} height="80" />
							</div>
							<div className="space-y-2 flex-grow flex flex-col justify-center">
								<h3 className="text-sm uppercase font-bold">{product.displayName}</h3>
								<button
									type="button"
									className="Button Button--secondarySmall w-full"
									disabled={isSelectedProduct}
									onClick={() => {
										if (isMediaQueryXl) {
											// do stuff;
										}
									}}
								>
									{isSelectedProduct ? 'Selected' : 'Select'}
								</button>
							</div>
						</div>
					);
				})
			}
		</>
	);
});
