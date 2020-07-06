import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

import { TimesSolid } from '~/Components/svg/TimesSolid.svg';
import { themeConfig } from '~/util/themeConfig';

export const Modal = observer(({ modal }) => {
	const {
		close, content, isOpen, type, title,
	} = modal;
	const closeBtn = (
		<button
			className="Modal-closeBtn"
			type="button"
			onClick={close}
		>
			<div className="Modal-closeBtnImg">
				<TimesSolid color={type === 'FROSTY' ? themeConfig.theme.colors.gray : themeConfig.theme.colors.white} />
			</div>
		</button>
	);

	return (
		<div className={cn('Modal', {
			'is-open': isOpen,
			'is-closed': !isOpen,
			'Modal--menu': type === 'MENU',
			'Modal--frosty': type === 'FROSTY',
			'Modal--slider': type === 'SLIDER',
			'-z-10': !isOpen,
			'z-10': isOpen && type !== 'SLIDER',
			'z-30': isOpen && type === 'SLIDER',
		})}
		>
			<div
				className="Modal-backdrop"
				role="button"
				onClick={close}
				tabIndex="0"
				aria-label="Close modal"
			/>
			{ type === 'MODAL' && closeBtn }
			<div
				className="Modal-container"
			>
				{ type === 'FROSTY' && closeBtn }
				<div className="Modal-content">
					{
						Boolean(title) &&
						<h1 className="text-4xl pb-4">{title}</h1>
					}
					{content}
				</div>
			</div>
		</div>
	);
});
