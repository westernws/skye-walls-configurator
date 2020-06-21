import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

export const Modal = observer(({ appStore }) => {
	const { isModalOpen, closeModal } = appStore;

	return (
		<div className={cn('Modal', { hidden: !isModalOpen })}>
			<div className="Modal-backdrop" />
			<div className="Modal-container">
				<button
					className="Modal-closeBtn"
					type="button"
					onClick={closeModal}
				>
					<img className="Modal-closeBtnImg" src="/images/times-solid.svg" alt="Close modal" />
				</button>
			</div>
		</div>
	);
});
