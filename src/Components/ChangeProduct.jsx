import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { ExchangeAltSolid } from '~/Components/svg/ExchangeAltSolid.svg';
import { useMst } from '~/Stores/App.store';

export const ChangeProduct = observer(() => {
	const { modal } = useMst();

	return (
		<div className="flex space-x-4">
			<div className="w-1/2 p-4 overflow-auto">
				<div className="flex flex-col items-center p-32">
					<div className="text-gray-light w-16">
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
						onClick={modal.close}
					>
						Back to Build
					</button>
				</div>
			</div>
			<div className="w-1/2">
				Right col
			</div>
		</div>
	);
});
