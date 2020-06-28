import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

export const Modal = observer(({ modal }) => {
	const { isOpen, close, content } = modal;

	return (
		<div className={cn('Modal', { hidden: !isOpen })}>
			<div className="Modal-backdrop" />
			<button
				className="Modal-closeBtn"
				type="button"
				onClick={close}
			>
				<img className="Modal-closeBtnImg" src="/images/times-solid.svg" alt="Close modal" />
			</button>
			<div className="Modal-container">
				<div className="Modal-content">{content}</div>
			</div>
		</div>
	);
});
