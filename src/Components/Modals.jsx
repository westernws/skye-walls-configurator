import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { Modal } from '~/Components/Modal';

export const Modals = observer(() => {
	const { modals } = useMst();

	return [...modals.values()].map(modal => <Modal key={modal.id} modal={modal} />);
});
