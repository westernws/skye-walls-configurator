import React, { useState } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { TableSolid } from '~/Components/svg/TableSolid.svg';
import { FlagSolid } from '~/Components/svg/FlagSolid.svg';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';
import { SyncAltSolid } from '~/Components/svg/SyncAltSolid.svg';
import { UndoAltSolid } from '~/Components/svg/UndoAltSolid.svg';
import { MenuListCollection } from '~/Components/MenuListCollection';
import { MenuListItemParent } from '~/Components/MenuListItemParent';
import { MenuListItem } from '~/Components/MenuListItem';
import { useMst } from '~/Stores/App.store';
import { MenuListItemCollection } from '~/Components/MenuListItemCollection';

export const MenuList = observer(({ categories = [], selectedProduct }) => {
	const { productCollections } = useMst();
	const [isFinishedDesigningOpen, setIsFinishedDesigningOpen] = useState(false);
	const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
	const [isChangeModelOpen, setIsChangeModelOpen] = useState(false);
	const productCollectionStates = {};

	productCollections.forEach((productCollection) => {
		const [isOpen, setIsOpen] = useState(false);

		productCollectionStates[productCollection.name] = {
			isOpen,
			setIsOpen,
		};
	});
	return (
		<ul className="Menu-items divide-y-2 divide-gray-lighter">
			{
				Boolean(categories.length) &&
				<MenuListItemParent
					isOpen={isCategoriesOpen}
					setIsOpen={setIsCategoriesOpen}
					Icon={TableSolid}
					label="Categories"
				>
					{
						categories.map(category => (
							<li key={category} className="Menu-subItem">
								<Link href="color" as="color">
									<a className="Menu-subHeading" href="color">
										<div className="Menu-label">{category}</div>
									</a>
								</Link>
							</li>
						))
					}
				</MenuListItemParent>
			}
			<MenuListItemParent
				isOpen={isFinishedDesigningOpen}
				setIsOpen={setIsFinishedDesigningOpen}
				Icon={FlagSolid}
				label="Finished Designing?"
			>
				<li className="Menu-subItem">
					<Link href="color" as="color">
						<a className="Menu-subHeading" href="color">
							<div className="Menu-label">Review Selections</div>
						</a>
					</Link>
				</li>
				<li className="Menu-subItem">
					<Link href="color" as="color">
						<a className="Menu-subHeading" href="color">
							<div className="Menu-leftCol">
								<div className="Menu-label">Exit Configurator</div>
							</div>
							<div className="Menu-rightCol">
								<div className="Menu-control">
									<ChevronSolid direction="right" />
								</div>
							</div>
						</a>
					</Link>
				</li>
			</MenuListItemParent>
			<MenuListItemParent
				isOpen={isChangeModelOpen}
				setIsOpen={setIsChangeModelOpen}
				Icon={SyncAltSolid}
				label="Change Model"
			>
				{
					productCollections?.map?.((productCollection) => {
						const { name } = productCollection;
						const { isOpen, setIsOpen } = productCollectionStates[name];

						return (
							<MenuListItemCollection
								key={name}
								isOpen={isOpen}
								setIsOpen={setIsOpen}
								productCollection={productCollection}
							>
								{
									productCollection.hasProductGroup && isOpen &&
									productCollection.productGroups.map((productGroup) => {
										return (
											<MenuListCollection
												key={productGroup.name}
												title={productGroup.displayGroupName}
												products={productGroup.products}
												selectedProduct={selectedProduct}
											/>
										);
									})
								}
								{
									!productCollection.hasProductGroup && isOpen &&
									<MenuListCollection
										key={productCollection.name}
										title={productCollection.displayGroupName}
										products={productCollection.products}
										selectedProduct={selectedProduct}
									/>
								}
							</MenuListItemCollection>
						);
					})
				}
			</MenuListItemParent>
			<MenuListItem
				Icon={UndoAltSolid}
				label="Start Over"
				onClick={() => {
					console.log('ding');
				}}
			/>
		</ul>
	);
});
