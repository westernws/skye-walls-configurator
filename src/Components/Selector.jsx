import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';
import pull from 'lodash/pull';

import { useMst } from '~/Stores/App.store';
import { SelectorNav } from '~/Components/SelectorNav';
import { Color } from '~/Components/Color';
import { DummyImage } from '~/Components/DummyImage';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';
import { InfoCircleSolid } from '~/Components/svg/InfoCircleSolid.svg';
import { OptionInfo } from '~/Components/OptionInfo';
import { ReviewConfig } from '~/Components/ReviewConfig';

export const Selector = observer(() => {
	const { page, modals, isMediaQueryXl } = useMst();
	const {
		currentSelectionGroup,
		product,
		showOptionGroupAccordion,
	} = page;
	const primaryModal = modals.get('modal-primary');
	const selectorPanel = useRef(null);
	const [openOptionGroups, setOpenOptionGroups] = useState([]);
	const isOptionGroupOpen = (optionGroupId) => {
		return openOptionGroups.includes(optionGroupId);
	};

	if (!product) {
		return null;
	}

	useEffect(() => {
		selectorPanel.current.scrollTop = 0;
	}, [currentSelectionGroup]);

	return (
		<div className="SelectorPanelContainer">
			<div className="SelectorPanelNav xl:hidden">
				<div className="text-base px-4 h-8 flex justify-between items-center">
					<h2 className="font-bold uppercase">{currentSelectionGroup.displayName}</h2>
					<SelectorNav />
				</div>
			</div>
			<div className="SelectorPanel" ref={selectorPanel}>
				<div className="SelectorPanel-inside space-y-10">
					{
						currentSelectionGroup.name === 'color' &&
						<div>
							<h3 className="text-right border-b border-gray-light50 border-solid pb-2">
								{product.selectedColor.displayName}
							</h3>
							<Color product={product} hideLegend type="selector" />
						</div>
					}
					{
						currentSelectionGroup.name !== 'color' &&
						<div>
							{
								currentSelectionGroup.optionGroups.map((optionGroup) => {
									let maxHeight = isOptionGroupOpen(optionGroup.id) ? `${optionGroup.options.length * 150}px` : 0;

									if (isMediaQueryXl) {
										maxHeight = 'none';
									}

									return (
										<div key={optionGroup.id} className="mb-4">
											{
												showOptionGroupAccordion &&
												<button
													type="button"
													className={cn('flex mb-4 justify-between w-full p-2 border-b-4 border-solid leading-tight border-gray-light100', {
														'bg-white': !isOptionGroupOpen(optionGroup.id),
														'bg-gray-light50': isOptionGroupOpen(optionGroup.id),
													})}
													onClick={() => {
														setOpenOptionGroups((prevState) => {
															const temp = [...prevState];
															const { id } = optionGroup;

															if (temp.includes(id)) {
																pull(temp, id);
															} else {
																temp.push(id);
															}
															return temp;
														});
													}}
												>
													<h4 className="uppercase font-bold">{optionGroup.displayName}</h4>
													<div>
														{
															isOptionGroupOpen(optionGroup.id) &&
															<div className="w-4 mr-1">
																<ChevronSolid />
															</div>
														}
														{
															!isOptionGroupOpen(optionGroup.id) &&
															<div className="font-bold">{`(${optionGroup.options?.length || 1})`}</div>
														}
													</div>
												</button>
											}
											{
												!showOptionGroupAccordion &&
												<h4 className="uppercase font-bold mb-4">{optionGroup.displayName}</h4>
											}
											<ul
												style={{
													maxHeight,
												}}
												className={cn('OptionGroup space-y-4 xl:space-y-0 h-auto transition-all duration-300 ease-in-out', {
													'overflow-hidden': !isMediaQueryXl,
												})}
											>
												{
													optionGroup.options.map((option) => {
														const isSelected = optionGroup.options.find(o => o.selected).name === option.name;

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
																	<div className="flex pr-2 space-x-4 w-full xl:space-x-2">
																		<div className="flex-shrink-0 xl:w-1/3">
																			<DummyImage width="120" height="120" />
																		</div>
																		<div className="flex-grow text-left xl:text-sm">
																			{option.displayName}
																		</div>
																	</div>
																	{
																		isSelected &&
																		<div className="OptionGroup-checkmark">
																			<div className="bg-red rounded-full border-white w-5 p-1">
																				<img src="/images/check-solid-white.svg" alt="" />
																			</div>
																		</div>
																	}
																</button>
																{
																	Boolean(option.description) &&
																	<button
																		type="button"
																		style={{ bottom: '0.5rem', right: '0.5rem' }}
																		className="absolute bottom-0 right-0 w-5"
																		onClick={() => {
																			primaryModal.open({
																				name: 'optionInfoModal',
																				type: isMediaQueryXl ? 'SLIDER_TERTIARY' : 'MODAL_TIGHT',
																				showCloseBtnText: true,
																				content: (
																					<OptionInfo
																						optionGroup={optionGroup}
																						option={option}
																						isSelected={isSelected}
																					/>
																				),
																			});
																		}}
																	>
																		<InfoCircleSolid />
																	</button>
																}
															</li>
														);
													})
												}
											</ul>
										</div>
									);
								})
							}
							{
								!currentSelectionGroup.optionGroups?.length && Boolean(currentSelectionGroup.description) &&
								<p>{currentSelectionGroup.description}</p>
							}
						</div>
					}
					{
						Boolean(page.nextSelectionGroup) &&
						<button
							type="button"
							className="Button Button--secondary w-full xl:w-auto xl:px-12"
							onClick={() => {
								page.setCurrentSelectionGroup(page.nextSelectionGroup.id);
							}}
						>
							Next: {page.nextSelectionGroup.displayName}
						</button>
					}
					{
						!page.nextSelectionGroup &&
						<>
							<div className="pt-10 text-lg text-center italic">We like your style! Let’s take a look at your product.</div>
							<button
								type="button"
								className="Button w-full xl:w-auto xl:px-12"
								onClick={() => {
									primaryModal.open({
										name: 'reviewModal',
										type: 'PANEL',
										showBackdrop: false,
										showCloseBtn: false,
										content: <ReviewConfig />,
									});
								}}
							>
								Review
							</button>
						</>
					}
				</div>
			</div>
		</div>
	);
});
