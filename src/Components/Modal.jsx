import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

import { TimesSolid } from '~/Components/svg/TimesSolid.svg';

export const Modal = observer(({ modal }) => {
	const {
		backdropOffset, close, content, isOpen, type,
	} = modal;

	return (
		<div className={cn('Modal', {
			'is-open': isOpen,
			'is-closed': !isOpen,
			'Modal--menu': type === 'MENU',
		})}
		>
			<div
				className="Modal-backdrop"
				style={{
					left: `${backdropOffset.left}px`,
					top: `${backdropOffset.top}px`,
				}}
			/>
			<button
				className="Modal-closeBtn"
				type="button"
				onClick={close}
			>
				<div className="Modal-closeBtnImg">
					<TimesSolid />
				</div>
			</button>
			<div
				className="Modal-container"
				style={{
					...(type === 'MENU') && {
						top: `${backdropOffset.top}px`,
					},
				}}
			>
				<div className="Modal-content">{content}</div>
			</div>
		</div>
	);
});
