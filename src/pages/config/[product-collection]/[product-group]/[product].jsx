import React from 'react';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutConfig } from '~/Components/LayoutConfig';
import { ConfigProductImagery } from '~/Components/ConfigProductImagery';
import { ClipboardListSolid } from '~/Components/svg/ClipboardListSolid.svg';
import { Selector } from '~/Components/Selector';
import { ReviewConfig } from '~/Components/ReviewConfig';
import { SelectorMenu } from '~/Components/SelectorMenu';

const ConfigProduct = () => {
	return (
		<Provider value={appStore}>
			<LayoutConfig>
				<main className="MainComponent MainComponent--bleed">
					<SelectorMenu />
					<div className="block xl:flex">
						<div className="ConfigPreview">
							<div className="ConfigImage">
								<ConfigProductImagery />
							</div>
							<div className="ConfigReview xl:hidden">
								<button
									className="Button Button--secondarySmall w-full justify-center"
									type="button"
									onClick={() => {
										appStore.modals.get('modal-primary').open({
											type: 'PANEL',
											showBackdrop: false,
											showCloseBtn: false,
											content: <ReviewConfig />,
										});
									}}
								>
									<ClipboardListSolid />
									Review
								</button>
							</div>
						</div>
						<Selector />
					</div>
				</main>
			</LayoutConfig>
		</Provider>
	);
};

export default ConfigProduct;
