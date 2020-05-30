import React from 'react';
import { DummyImage } from '~/Components/DummyImage';

export const Panel = ({ tagName = 'li', title, shortDesc }) => {
	const TagName = tagName;

	return (
		<TagName className="Panel space-y-6">
			<div className="Panel-details space-y-6">
				<div className="Panel-img w-full">
					<DummyImage width="720" height="546" />
				</div>
				<div className="Panel-title text-2xl lg:text-4xl">{title}</div>
				<p className="Panel-short-desc">{shortDesc}</p>
			</div>
			<div className="Panel-cta">
				<button className="Button w-full" type="button"><strong>Design Yours</strong></button>
			</div>
		</TagName>
	);
};
