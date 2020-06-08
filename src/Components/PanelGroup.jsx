import React from 'react';
import cn from 'classnames';

export const PanelGroup = ({ children, className = '' }) => {
	return (
		<div className="overflow-x-hidden">
			<ul className={cn('PanelGroup', className)}>
				{children}
			</ul>
		</div>
	);
};
