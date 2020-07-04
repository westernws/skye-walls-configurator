import React from 'react';

import { DummyImage } from '~/Components/DummyImage';

export const MenuListItemProduct = ({ product, isSelected = false }) => {
	const { displayName } = product;

	return (
		<li className="bg-white">
			<button
				className="p-4 w-full flex items-center"
				type="button"
				onClick={() => {
					console.log('click');
				}}
			>
				<div className="flex">
					<DummyImage className="Menu-itemModelProductImg" width="100" height="88" />
					<div className="text-sm text-left">{displayName}</div>
				</div>
				<div>{isSelected && '!!'}</div>
			</button>
		</li>
	);
};
