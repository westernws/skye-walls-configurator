import React from 'react';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { useMst } from '~/Stores/App.store';

export const OptionInfo = observer(({ option }) => {
	const { isMediaQueryXl } = useMst();
	const { displayName, description } = option;
	const width = isMediaQueryXl ? '420' : '825';
	const height = width;

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
			<div className="px-12">
				<div className="xl:px-4 space-y-2 mb-4">
					<h1 className="text-3xl text-blue">{displayName}</h1>
					<div className="Divider Divider--fade" />
				</div>
				<div className="xl:p-4">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
});
