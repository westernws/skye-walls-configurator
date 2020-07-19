import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

import { TimesSolid } from '~/Components/svg/TimesSolid.svg';
import { themeConfig } from '~/util/themeConfig';

export const Modal = observer(({ modal }) => {
	const {
		close, content, isOpen, isClosing, type, showCloseBtnText, title, showBackdrop, showCloseBtn,
	} = modal;
	const closeBtn = (
		<button
			className="Modal-closeBtn"
			type="button"
			onClick={close}
		>
			{
				showCloseBtnText &&
				<div className="Modal-closeBtnText">Close</div>
			}
			<div className="Modal-closeBtnImg">
				<TimesSolid color={type === 'FROSTY' ? themeConfig.theme.colors.gray : themeConfig.theme.colors.white} />
			</div>
		</button>
	);

	return (
		<div className={cn('Modal', {
			'is-open': isOpen,
			'is-closed': !isOpen && !isClosing,
			'Modal--tight': type === 'MODAL_TIGHT',
			'Modal--menu': type === 'MENU',
			'Modal--frosty': type === 'FROSTY',
			'Modal--slider': type === 'SLIDER',
			'Modal--sliderSecondary': type === 'SLIDER_SECONDARY',
			'Modal--sliderTertiary': type === 'SLIDER_TERTIARY',
			'Modal--panel': type === 'PANEL',
		})}
		>
			{
				showBackdrop &&
				<div
					className="Modal-backdrop"
					role="button"
					onClick={close}
					tabIndex="0"
					aria-label="Close modal"
				/>
			}
			{ (type === 'MODAL' || type === 'MODAL_TIGHT') && showCloseBtn && closeBtn }
			<div
				className="Modal-container"
			>
				{
					showCloseBtn
					&& (
						type === 'FROSTY'
						|| type === 'SLIDER'
						|| type === 'SLIDER_SECONDARY'
						|| type === 'SLIDER_TERTIARY'
					) &&
					closeBtn
				}
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
