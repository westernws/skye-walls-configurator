import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

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
						content: <ChangeProductConfirm newProductLink={product.configLink} />,
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
						<div className="CheckmarkWhiteOnRed">
							<Image
								src="/images/check-solid-white.svg"
								alt=""
								unoptimized
								width="12"
								height="12"
							/>
						</div>
					</div>
				}
			</button>
		</li>
	);
};
