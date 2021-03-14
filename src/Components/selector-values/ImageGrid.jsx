import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import Image from 'next/image';

import { DummyImage } from '~/Components/DummyImage';
import { useMst } from '~/Stores/App.store';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';
import { HeaderStandard } from '~/Components/selector-values/HeaderStandard';
import { HeaderSimple } from '~/Components/selector-values/HeaderSimple';

export const ImageGrid = observer(({ optionGroup, simpleHeader = false, alwaysOpen = false }) => {
	const { page, isMediaQueryXl } = useMst();
	const {
		product,
		showOptionGroupAccordion,
	} = page;
	const [isOpen, setIsOpen] = useState(false);
	let maxHeight = isOpen ? `${optionGroup.options.length * 150}px` : 0;

	if (isMediaQueryXl || alwaysOpen) {
		maxHeight = 'none';
	}

	return (
		<>
			{
				showOptionGroupAccordion &&
				<button
					type="button"
					className={cn('flex mb-4 justify-between w-full p-2 border-b-4 border-solid leading-tight border-gray-light100', {
						'bg-white': !isOpen && !alwaysOpen,
						'bg-gray-light50': isOpen || alwaysOpen,
					})}
					onClick={() => {
						if (alwaysOpen) {
							return;
						}
						setIsOpen(!isOpen);
					}}
				>
					<h4 className="uppercase font-semibold">{optionGroup.displayName}</h4>
					<div>
						{
							isOpen && !alwaysOpen &&
							<div className="w-4 mr-1">
								<ChevronSolid />
							</div>
						}
						{
							!isOpen && !alwaysOpen &&
							<div className="font-semibold">{`(${optionGroup.options?.length || 1})`}</div>
						}
					</div>
				</button>
			}
			{
				!showOptionGroupAccordion && simpleHeader &&
				<HeaderSimple optionGroup={optionGroup} />
			}
			{
				!showOptionGroupAccordion && !simpleHeader &&
				<HeaderStandard optionGroup={optionGroup} />
			}
			<ul
				style={{ maxHeight }}
				className={cn('ImageGrid transition-all duration-300 ease-in-out', {
					'overflow-hidden': !isMediaQueryXl,
				})}
			>
				{
					optionGroup.options.map((option) => {
						const isSelected = optionGroup.options.find(o => o.selected)?.name === option.name;

						return (
							<li
								key={option.name}
								data-tip={option.displayName}
								className={cn('ImageGrid-item', {
									'is-selected': isSelected,
								})}
							>
								<button
									type="button"
									className="w-full"
									onClick={() => {
										product.setOption(optionGroup.name, option.name);
									}}
								>
									<div>
										{
											Boolean(option.thumb) &&
											<Image
												src={option.thumb.src}
												srcSet={option.thumb.srcSet}
												alt={option.displayName}
												layout="intrinsic"
												width="120"
												height="120"
											/>
										}
										{
											!option.thumb &&
											<DummyImage className="block" width="120" height="120" text="Image missing" />
										}
									</div>
									{
										isSelected &&
										<div className="ImageGrid-checkmark">
											<div className="CheckmarkWhiteOnBlue">
												<Image
													src="/images/check-solid-white.svg"
													alt=""
													unoptimized
													width="12"
													height="12"
												/>
											</div>
										</div>
									}
								</button>
							</li>
						);
					})
				}
			</ul>
		</>
	);
});
