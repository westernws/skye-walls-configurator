import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

import { TimesSolid } from '~/Components/svg/TimesSolid.svg';
import { themeConfig } from '~/util/themeConfig';

export const Modal = observer(({ modal }) => {
	const {
		backdropOffset, close, content, isOpen, type, title,
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
		})}
		>
			<div
				className="Modal-backdrop"
				style={{
					left: `${backdropOffset.left}px`,
					top: `${backdropOffset.top}px`,
				}}
			/>
			{ type === 'MODAL' && closeBtn }
			<div
				className="Modal-container"
				style={{
					...(type === 'MENU') && {
						top: `${backdropOffset.top}px`,
					},
				}}
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
