import React from 'react';

export const Tooltip = ({ children }) => {
	return (
		<div className="Tooltip">
			<div className="Tooltip-body">
				{children}
			</div>
			<div className="Tooltip-triangleDown" />
		</div>
	);
};
