import React from 'react';
import { observer } from 'mobx-react-lite';

import { ExchangeAltSolid } from '~/Components/svg/ExchangeAltSolid.svg';
import { useMst } from '~/Stores/App.store';
import { useInput } from '~/util/useInput';
import { ProductSelect } from '~/Components/ProductSelect';

export const ChangeProduct = observer(({ selectedProduct }) => {
	const appStore = useMst();
	const { bind, value } = useInput(selectedProduct.collectionName);
	const { modals, productCollections } = appStore;
	const selectedCollection = productCollections.find(productCollection => productCollection.name === value);

	return (
		<div className="flex flex-col space-y-8 xl:flex-row xl:space-y-0 xl:space-x-4">
			<div className="xl:w-1/2 xl:p-6 xl:overflow-auto xl:h-screen">
				<div className="flex flex-col items-center p-12 xl:p-32">
					<div className="text-gray-light w-12 xl:w-16">
						<ExchangeAltSolid />
					</div>
				</div>
				<div className="space-y-4">
					<h1 className="text-xl font-bold uppercase">Change Your Product</h1>
					<div className="Rule" />
					<ol className="list-decimal list-inside ml-4">
						<li>Select model from the dropdown menu</li>
						<li>Select a # FPO #</li>
						<li>Start your new build</li>
					</ol>
					<button
						className="Button"
						type="button"
						onClick={modals.get('modal-primary').close}
					>
						Back to Build
					</button>
				</div>
			</div>
			<div className="xl:p-6 xl:w-1/2 xl:space-y-2 xl:overflow-auto xl:h-screen">
				<label htmlFor="select-product" className="hidden text-gray-light text-sm xl:block">
					Select Product:
				</label>
				<select
					id="select-product"
					className="Select w-full"
					defaultValue={selectedProduct.collectionName}
					onChange={bind.onChange}
				>
					{
						productCollections.map(productGroup => (
							<option key={productGroup.name} value={productGroup.name}>
								{productGroup.displayName}
							</option>
						))
					}
				</select>
				{
					Boolean(selectedCollection) &&
					<div>
						{
							selectedCollection.hasProductGroup &&
							selectedCollection.productGroups.map(productGroup => (
								<ProductSelect
									key={productGroup.name}
									displayGroupName={productGroup.displayGroupName}
									products={productGroup.products}
									selectedProduct={selectedProduct}
								/>
							))
						}
						{
							!selectedCollection.hasProductGroup &&
							<ProductSelect
								displayGroupName={selectedCollection.displayGroupName}
								products={selectedCollection.products}
								selectedProduct={selectedProduct}
							/>
						}
					</div>
				}
			</div>
		</div>
	);
});
