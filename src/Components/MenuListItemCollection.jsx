import React from 'react';
import cn from 'classnames';

import { DummyImage } from '~/Components/DummyImage';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const MenuListItemCollection = ({
	productCollection, isOpen, setIsOpen, children,
}) => {
	const { displayName } = productCollection;

	return (
		<li>
			<button
				className="p-4 w-full flex items-center"
				type="button"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				<div className="Menu-leftCol space-x-4">
					<DummyImage className="Menu-itemModelCollectionImg" width="125" height="70" />
					<div className="text-sm font-semibold uppercase text-left">{displayName}</div>
				</div>
				<div className="Menu-rightCol">
					<div className={cn('Menu-control', {
						'opacity-0': !isOpen,
						'opacity-100': isOpen,
					})}
					>
						<ChevronSolid />
					</div>
				</div>
			</button>
			{children}
		</li>
	);
};
