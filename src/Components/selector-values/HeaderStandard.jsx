import React from 'react';

export const HeaderStandard = ({ optionGroup }) => {
	const hasFinish = Boolean(optionGroup.selectedOption.finish);

	return (
		<div className="mb-8">
			<div className="flex justify-between items-baseline">
				<h2 className="text-blue text-3xl">{optionGroup.displayName}</h2>
				<h3 className="text-right pb-2">
					<span className="font-bold">{`${optionGroup.selectedOption.displayName}${(hasFinish ? ', ' : '')}`}</span>
					{
						hasFinish &&
						<span className="italic">{optionGroup.selectedOption.finish}</span>
					}
				</h3>
			</div>
			<div className="Divider" />
		</div>
	);
};
