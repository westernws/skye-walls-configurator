import React from 'react';

export const ProductSummary = ({ product }) => {
	console.log(product);
	const { displayName, description } = product;
	return (
		<div className="ProductSummary space-y-5">
			<div>
				<h2 className="Heading font-bold uppercase flex-col text-l md:text-2xl lg:flex-row">
					{displayName}
				</h2>
				<p className="text-sm">{description}</p>
			</div>
			<span className="Rule block mt-2" />
			<div className="space-y-5 xl:flex xl:space-y-0 xl:flex-wrap">
				{
					product.optionGroups?.map?.((optionGroup) => {
						if (!optionGroup.options?.length) {
							return null;
						}
						return (
							<div key={optionGroup.name} className="ml-2 md:ml-8">
								<h3 className="text-xs uppercase font-bold mb-4">
									{optionGroup.summaryDisplayName || optionGroup.displayName}
								</h3>
								<ul className="Checklist text-xs">
									{
										Boolean(optionGroup.summaryOptions) &&
										optionGroup.summaryOptions.map(option => (
											<li key={option.displayName}>{option.displayName}</li>
										))
									}
									{
										!optionGroup.summaryOptions &&
										optionGroup.options.map(option => (
											<li key={option.name}>{option.displayName}</li>
										))
									}
								</ul>
							</div>
						);
					})
				}
			</div>
		</div>
	);
};
