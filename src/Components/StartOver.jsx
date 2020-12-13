import React from 'react';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import { useMst } from '~/Stores/App.store';

export const StartOver = observer(() => {
	const { modals } = useMst();

	return (
		<div className="space-y-4">
			<p>
				Just a heads-up — you’re about to remove all the options you’ve selected and start
				from scratch. Are you sure you want to do that?
			</p>
			<div className="pt-4 -mt-4 -ml-4">
				<Link href="/">
					<a className="Button ml-4">Yes, I want to start over</a>
				</Link>
				<button
					className="Button Button--secondary mt-4 ml-4"
					type="button"
					onClick={modals.get('modal-primary').close}
				>
					Oops, no I don’t
				</button>
			</div>
		</div>
	);
});
