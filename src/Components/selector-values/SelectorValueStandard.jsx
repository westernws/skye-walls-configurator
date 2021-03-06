import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import Image from 'next/image';

import { OptionInfo } from '~/Components/OptionInfo';
import { Info } from '~/Components/svg/Info.svg';
import { useMst } from '~/Stores/App.store';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';
import { HeaderStandard } from '~/Components/selector-values/HeaderStandard';
import { HeaderSimple } from '~/Components/selector-values/HeaderSimple';

export const SelectorValueStandard = observer(({ optionGroup, simpleHeader = false, alwaysOpen = false }) => {
	const { page, modals, isMediaQueryXl } = useMst();
	const {
		selectedOption: {
			finish = null,
		} = {},
	} = optionGroup;
	const hasFinish = Boolean(finish);
	const {
		product,
		showOptionGroupAccordion,
	} = page;
	const primaryModal = modals.get('modal-primary');
	const [isOpen, setIsOpen] = useState(false);
	let optionsToUse = optionGroup.options;
	if (product.isVinyl && optionGroup.name === 'handles') {
		optionsToUse = product.vinylHandleOptions;
	}
	let maxHeight = isOpen ? `${optionsToUse.length * 150}px` : 0;

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
						'bg-white': !isOpen,
						'bg-gray-light50': isOpen,
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
							<div className="font-semibold">{`(${optionsToUse?.length || 1})`}</div>
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
				className={cn('OptionGroup space-y-4 xl:space-y-0 h-auto transition-all duration-300 ease-in-out', {
					'overflow-hidden': !isMediaQueryXl,
				})}
			>
				{
					optionsToUse.map((option) => {
						const isSelected = optionsToUse.find(o => o.selected)?.name === option.name;

						return (
							<li
								key={option.name}
								className={cn('OptionGroup-option', {
									'is-selected': isSelected,
								})}
							>
								<button
									className="flex justify-between items-center w-full"
									type="button"
									onClick={() => {
										product.setOption(optionGroup.name, option.name);
									}}
								>
									<div className="flex w-full xl:justify-between">
										<div className="flex-shrink-0 xl:w-1/2">
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
										</div>
										<div className="OptionGroup-optionName">
											<span className="block">{`${option.displayName}${(hasFinish ? ',' : '')}`}</span>
											{
												Boolean(option.finish) &&
												<span className="italic">{option.finish}</span>
											}
										</div>
									</div>
									{
										isSelected &&
										<div className="OptionGroup-checkmark">
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
								{
									Boolean(option.description) &&
									<button
										type="button"
										style={{ bottom: '0.5rem', right: '0.5rem' }}
										className="absolute bottom-0 right-0"
										onClick={() => {
											primaryModal.open({
												name: 'optionInfoModal',
												type: isMediaQueryXl ? 'SLIDER_TERTIARY' : 'MODAL_TIGHT',
												showCloseBtnText: true,
												content: <OptionInfo option={option} />,
											});
										}}
									>
										<Info />
									</button>
								}
							</li>
						);
					})
				}
			</ul>
		</>
	);
});
