import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import Router from 'next/router';

import { useMst } from '~/Stores/App.store';

export const StartOver = observer(() => {
	const { modal } = useMst();

	return (
		<div className="space-y-4">
			<p>
				Just a heads-up — you’re about to remove all the options you’ve selected and start
				from scratch. Are you sure you want to do that?
			</p>
			<div className="pt-4 -mt-4 -ml-4">
				<button
					className="Button ml-4"
					type="button"
					onClick={Router.reload}
				>
					Yes, I want to start over
				</button>
				<button
					className="Button Button--secondary mt-4 ml-4"
					type="button"
					onClick={modal.close}
				>
					Oops, no I don’t
				</button>
			</div>
		</div>
	);
});