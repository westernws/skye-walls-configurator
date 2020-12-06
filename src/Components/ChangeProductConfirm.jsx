import React from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import { useMst } from '~/Stores/App.store';
import { DummyImage } from '~/Components/DummyImage';

export const ChangeProductConfirm = observer(({ newProductLink, onDeclineClick, showProductImagery = true }) => {
	const { closeAllModals } = useMst();

	return (
		<div className="space-y-4 xl:pb-4">
			{
				showProductImagery &&
				<div className="ChangeProductImagery xl:m-4">
					<div className="ChangeProductImagery-before">
						<DummyImage width="130" height="130" />
					</div>
					<div className="ChangeProductImagery-after">
						<DummyImage width="210" height="200" />
					</div>
				</div>
			}
			<p className="py-4 xl:px-4">
				Are you sure you want to change your build?
				You will lose your current configurations and start from scratch.
			</p>
			<div className="pt-4 -mt-4 -ml-4 xl:px-4">
				<Link href={newProductLink.href} as={newProductLink.as}>
					<a className="Button ml-4" href={newProductLink.href}>
						Yes, start over
					</a>
				</Link>
				<button
					className="Button mt-4 ml-4"
					type="button"
					onClick={() => {
						if (onDeclineClick) {
							onDeclineClick?.();
						} else {
							closeAllModals();
						}
					}}
				>
					No, keep my build
				</button>
			</div>
		</div>
	);
});
