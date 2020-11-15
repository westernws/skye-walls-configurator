import React from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

export const PanelGroup = observer(({ className = '', children }) => {
	return (
		<div className="overflow-x-hidden">
			<ul className={cn('PanelGroup', className)}>
				{children}
			</ul>
		</div>
	);
});
