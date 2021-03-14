import React from 'react';

export const HeaderStandard = ({ optionGroup }) => {
	const {
		displayName = '',
		selectedOption: {
			displayName: selectedDisplayName = '',
			finish = '',
		} = {},
	} = optionGroup;
	const hasFinish = Boolean(finish);

	return (
		<div className="mb-8">
			<div className="flex justify-between items-baseline">
				<h2 className="text-blue text-3xl">{displayName}</h2>
				<h3 className="text-right pb-2">
					<span className="font-semibold">{`${selectedDisplayName}${(hasFinish ? ', ' : '')}`}</span>
					{
						hasFinish &&
						<span className="italic">{finish}</span>
					}
				</h3>
			</div>
			<div className="Divider" />
		</div>
	);
};
