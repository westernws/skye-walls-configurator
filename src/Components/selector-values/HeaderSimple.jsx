import React from 'react';

export const HeaderSimple = ({ optionGroup }) => {
	return (
		<h3 className="text-xl pb-4">
			{optionGroup.displayName}
		</h3>
	);
};
