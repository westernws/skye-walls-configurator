import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

import { useMst } from '~/Stores/App.store';
import { SelectorNav } from '~/Components/SelectorNav';
import { Color } from '~/Components/Color';
import { DummyImage } from '~/Components/DummyImage';
import { InfoCircleSolid } from '~/Components/svg/InfoCircleSolid.svg';
import { OptionInfo } from '~/Components/OptionInfo';

export const Selector = observer(() => {
	const { page, modals } = useMst();
	const { currentOptionGroup, currentSelectedOption, product } = page;
	const primaryModal = modals.get('modal-primary');

	if (!currentOptionGroup || !product) {
		return null;
	}

	return (
		<>
			<div className="bg-gray-light100 InsetDivider">
				<div className="text-base px-4 h-8 flex justify-between items-center">
					<h2 className="font-bold uppercase">{currentOptionGroup.displayName}</h2>
					<SelectorNav />
				</div>
			</div>
			<div className="SelectorPanel">
				<div className="SelectorPanel-inside space-y-10">
					{
						currentOptionGroup.name === 'color' &&
						<div>
							<h3 className="text-right border-b border-gray-light50 border-solid pb-2">
								{product.selectedColor.displayName}
							</h3>
							<Color product={product} hideLegend type="selector" />
						</div>
					}
					{
						['floor-tracks', 'handles', 'screen'].includes(currentOptionGroup.name) &&
						<div>
							{
								Boolean(currentOptionGroup.options?.length) &&
								<ul className="space-y-4">
									{
										currentOptionGroup.options.map((option) => {
											const isSelected = currentSelectedOption?.name === option.name;

											return (
												<li
													key={option.name}
													className={cn('relative p-2 bg-white border-b-4 border-solid', {
														'border-gray-light100': !isSelected,
														'border-red': isSelected,
													})}
												>
													<button
														className="flex justify-between items-center w-full"
														type="button"
														onClick={() => {
															product.setOption(currentOptionGroup.name, option.name);
														}}
													>
														<div className="flex pr-2 space-x-4 w-full">
															<div className="flex-shrink-0">
																<DummyImage width="120" height="120" />
															</div>
															<div className="flex-grow text-left">
																{option.displayName}
															</div>
														</div>
														{
															isSelected &&
															<div>
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
																	type: 'MODAL_TIGHT',
																	content: (
																		<OptionInfo
																			optionGroup={currentOptionGroup}
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
							}
							{
								!currentOptionGroup.options?.length && Boolean(currentOptionGroup.description) &&
								<p>{currentOptionGroup.description}</p>
							}
						</div>
					}
					{
						Boolean(page.nextOptionGroup) &&
						<button
							type="button"
							className="Button Button--secondary w-full"
							onClick={() => {
								page.setCurrentOptionGroup(page.nextOptionGroup.id);
							}}
						>
							Next: {page.nextOptionGroup.displayName}
						</button>
					}
					{
						!page.nextOptionGroup &&
						<>
							<div className="pt-10 text-lg text-center italic">We like your style! Let’s take a look at your product.</div>
							<button
								type="button"
								className="Button w-full"
							>
								Review
							</button>
						</>
					}
				</div>
			</div>
		</>
	);
});