import React from 'react';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutConfig } from '~/Components/LayoutConfig';
import { DummyImage } from '~/Components/DummyImage';
import { ClipboardListSolid } from '~/Components/svg/ClipboardListSolid.svg';
import { Selector } from '~/Components/Selector';
import { ReviewConfig } from '~/Components/ReviewConfig';
import { SelectorMenu } from '~/Components/SelectorMenu';

export default () => {
	return (
		<Provider value={appStore}>
			<LayoutConfig>
				<main className="MainComponent MainComponent--bleed">
					<SelectorMenu />
					<div className="block xl:flex">
						<div className="ConfigPreview">
							<div className="ConfigImage is-debug">
								<DummyImage width="1000" height="1000" />
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
