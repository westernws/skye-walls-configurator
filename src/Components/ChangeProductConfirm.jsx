import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import Router from 'next/router';

import { useMst } from '~/Stores/App.store';

export const ChangeProductConfirm = observer(() => {
	const { modals } = useMst();

	return (
		<div className="space-y-4">
			<p>
				Are you sure you want to change your build?
				You will lose your current configurations and start from scratch.
			</p>
			<div className="pt-4 -mt-4 -ml-4">
				<button
					className="Button ml-4"
					type="button"
					onClick={Router.reload}
				>
					Yes, start over
				</button>
				<button
					className="Button mt-4 ml-4"
					type="button"
					onClick={modals.get('modal-primary').close}
				>
					No, keep my build
				</button>
			</div>
		</div>
	);
});
