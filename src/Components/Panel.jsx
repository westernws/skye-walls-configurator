import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

export const Panel = ({
	tagName = 'li', title, shortDesc, link, className = '', image = {}, animatedImage = {},
}) => {
	const TagName = tagName;
	const imageSizes = '(min-width: 1500px) 350px, (min-width: 1340px) 291px, (min-width: 1280px) 332px, (min-width: 1020px) calc(-7.5vw + 427px), (min-width: 780px) calc(41.82vw - 68px), (min-width: 520px) 350px, calc(97vw - 135px)';

	return (
		<TagName className={cn('Panel', className)}>
			<div className="Panel-details space-y-6">
				<div
					className="relative m-auto"
					style={{
						width: `${Math.max(image.width, animatedImage.width)}px`,
						height: `${Math.max(image.height, animatedImage.height)}px`,
					}}
				>
					<div className="Panel-img">
						<Image
							src={image.src}
							width={image.width}
							height={image.height}
							layout="intrinsic"
							className="Panel-image"
							sizes={imageSizes}
							alt=""
						/>
					</div>
					<div className="Panel-img">
						<Image
							src={animatedImage.src}
							width={animatedImage.width}
							height={animatedImage.height}
							layout="intrinsic"
							className="Panel-animatedImage"
							sizes={imageSizes}
							alt=""
						/>
					</div>
				</div>
				<div className="px-12 space-y-6">
					<h2 className="Panel-text font-semibold leading-tight text-2xl lg:text-3xl">{title}</h2>
					<p className="Panel-desc">{shortDesc}</p>
				</div>
			</div>
			<div className="p-12 pt-0">
				<div className="Divider my-12" />
				{
					Boolean(link?.href) && Boolean(link?.as) &&
					<div className="Panel-cta">
						<Link href={link.href} as={link.as}>
							<a className="ButtonHollow w-full"><strong>Design Yours</strong></a>
						</Link>
					</div>
				}
			</div>
		</TagName>
	);
};
