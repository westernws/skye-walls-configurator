import React from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useMst } from '~/Stores/App.store';

export const OptionInfo = observer(({ option }) => {
	const { isMediaQueryXl } = useMst();
	const {
		displayName = '',
		description = '',
		finish = '',
	} = option;
	const width = isMediaQueryXl ? 420 : 825;
	const height = width;
	const descHeight = isMediaQueryXl ? height : 0;
	const hasFinish = Boolean(finish);

	return (
		<div className="space-y-6 pb-8">
			{
				Boolean(option.detailImage) &&
				<Image
					src={option.detailImage.src}
					srcSet={option.detailImage.srcSet}
					alt={option.displayName}
					layout="responsive"
					width={width}
					height={height}
				/>
			}
			<div className="px-12 xl:pb-12 xl:overflow-auto" style={{ height: `calc(100vh - ${descHeight}px)` }}>
				<div className="xl:px-4 space-y-2 mb-4">
					<h1 className="text-3xl text-blue">
						<span className="block">{`${displayName}${(hasFinish ? ',' : '')}`}</span>
						{
							hasFinish &&
							<span className="italic">{finish}</span>
						}
					</h1>
					<div className="Divider Divider--fade" />
				</div>
				<div className="xl:p-4">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
});
