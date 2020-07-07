import React from 'react';
import cn from 'classnames';

import { DummyImage } from '~/Components/DummyImage';
import { ChangeProductConfirm } from '~/Components/ChangeProductConfirm';
import { useMst } from '~/Stores/App.store';

export const MenuListItemProduct = ({ product, isSelected = false }) => {
	const { modals } = useMst();
	const { displayName } = product;
	const modal = modals.get('modal-primary');

	return (
		<li className={cn('bg-white', {
			'border-b-4': isSelected,
			'border-red': isSelected,
		})}
		>
			<button
				className="p-4 w-full flex items-center justify-between"
				type="button"
				disabled={isSelected}
				onClick={() => {
					modal.open({
						type: 'MODAL',
						name: 'changeProductConfirm',
						content: <ChangeProductConfirm />,
					});
				}}
			>
				<div className="flex">
					<DummyImage className="Menu-itemModelProductImg" width="100" height="88" />
					<div className="text-sm text-left">{displayName}</div>
				</div>
				{
					isSelected &&
					<div className="Menu-rightCol">
						<div className="bg-red rounded-full border-white w-5 p-1">
							<img src="/images/check-solid-white.svg" alt="" />
						</div>
					</div>
				}
			</button>
		</li>
	);
};
