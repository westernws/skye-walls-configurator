import React, { useState } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { TableSolid } from '~/Components/svg/TableSolid.svg';
import { FlagSolid } from '~/Components/svg/FlagSolid.svg';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';
import { SyncAltSolid } from '~/Components/svg/SyncAltSolid.svg';
import { UndoAltSolid } from '~/Components/svg/UndoAltSolid.svg';
import { DoorOpenSolid } from '~/Components/svg/DoorOpenSolid.svg';
import { MenuListCollection } from '~/Components/MenuListCollection';
import { MenuListItemParent } from '~/Components/MenuListItemParent';
import { MenuListItem } from '~/Components/MenuListItem';
import { useMst } from '~/Stores/App.store';
import { MenuListItemCollection } from '~/Components/MenuListItemCollection';
import { StartOver } from '~/Components/StartOver';
import { ReviewConfig } from '~/Components/ReviewConfig';

export const MenuList = observer(({ selectionGroups = [], selectedProduct }) => {
	const {
		productCollections, modals, page, closeAllModals,
	} = useMst();
	const [isFinishedDesigningOpen, setIsFinishedDesigningOpen] = useState(false);
	const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
	const [isChangeModelOpen, setIsChangeModelOpen] = useState(false);
	const productCollectionStates = {};
	const menu = modals.get('modal-menu');
	const modal = modals.get('modal-primary');

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
				Boolean(selectionGroups.length) &&
				<MenuListItemParent
					isOpen={isCategoriesOpen}
					setIsOpen={setIsCategoriesOpen}
					Icon={TableSolid}
					label="Categories"
				>
					{
						selectionGroups.map(selectionGroup => (
							<li key={selectionGroup.name} className="Menu-subItem">
								<button
									type="button"
									className="Menu-subHeading"
									onClick={() => {
										closeAllModals();
										page.setCurrentSelectionGroup(selectionGroup.id);
									}}
								>
									<div className="Menu-label">{selectionGroup.displayName}</div>
								</button>
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
					<button
						type="button"
						className="Menu-subHeading"
						onClick={() => {
							menu.close();
							modal.open({
								name: 'reviewModal',
								type: 'PANEL',
								showBackdrop: false,
								showCloseBtn: false,
								content: <ReviewConfig />,
							});
						}}
					>
						<div className="Menu-label">Review Selections</div>
					</button>
				</li>
				<li className="Menu-subItem">
					<Link href="/" as="/">
						<a className="Menu-subHeading" href="/">
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
					menu.close();
					modals.get('modal-primary').open({
						type: 'FROSTY',
						title: 'Start Over?',
						content: <StartOver />,
					});
				}}
			/>
			<MenuListItem
				Icon={DoorOpenSolid}
				iconClasses="w-5"
				label="Exit Config"
				link={{
					href: '/',
					as: '/',
				}}
			/>
		</ul>
	);
});
