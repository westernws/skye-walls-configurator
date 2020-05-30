import React from 'react';

export const PanelGroup = ({ children }) => {
	return (
		<div className="overflow-x-hidden">
			<ul className="PanelGroup">
				{children}
			</ul>
		</div>
	);
};
