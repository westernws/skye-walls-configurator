import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import pull from 'lodash/pull';
import Image from 'next/image';

import { useMst } from '~/Stores/App.store';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';
import { DummyImage } from '~/Components/DummyImage';
import { OptionInfo } from '~/Components/OptionInfo';
import { Info } from '~/Components/svg/Info.svg';

export const SelectorStandard = observer(() => {
	const { page, modals, isMediaQueryXl } = useMst();
	const {
		currentSelectionGroup,
		product,
		showOptionGroupAccordion,
	} = page;
	const primaryModal = modals.get('modal-primary');
	const [openOptionGroups, setOpenOptionGroups] = useState([]);
	const isOptionGroupOpen = (optionGroupId) => {
		return openOptionGroups.includes(optionGroupId);
	};

	return (
		<div>
			{
				currentSelectionGroup.optionGroups.map((optionGroup) => {
					let maxHeight = isOptionGroupOpen(optionGroup.id) ? `${optionGroup.options.length * 150}px` : 0;
					const hasFinish = Boolean(optionGroup.selectedOption.finish);

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
							}
							<ul
								style={{ maxHeight }}
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
													<div className="flex w-full xl:justify-between">
														<div className="flex-shrink-0 xl:w-1/2">
															<DummyImage width="120" height="120" />
														</div>
														<div className="OptionGroup-optionName">
															<span className="block">{`${option.displayName}${(hasFinish ? ',' : '')}`}</span>
															{
																hasFinish &&
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
						</div>
					);
				})
			}
			{
				!currentSelectionGroup.optionGroups?.length && Boolean(currentSelectionGroup.description) &&
				<p>{currentSelectionGroup.description}</p>
			}
		</div>
	);
});
