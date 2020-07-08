import React from 'react';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutConfig } from '~/Components/LayoutConfig';
import { DummyImage } from '~/Components/DummyImage';
import { ClipboardListSolid } from '~/Components/svg/ClipboardListSolid.svg';
import { Selector } from '~/Components/Selector';

export default () => {
	return (
		<Provider value={appStore}>
			<LayoutConfig>
				<main className="Main Main--bleed">
					<div className="ConfigPreview space-y-12">
						<div className="ConfigImage">
							<DummyImage width="1000" height="1000" />
						</div>
						<div className="px-4">
							<button
								className="Button Button--secondarySmall w-full justify-center"
								type="button"
								onClick={() => {
									appStore.modals.get('modal-primary').open({
										type: 'PANEL',
										showBackdrop: false,
										showCloseBtn: false,
										content: <h1>ohai</h1>,
									});
								}}
							>
								<ClipboardListSolid />
								Review
							</button>
						</div>
					</div>
					{/* Product Selections */}
					<Selector />
				</main>
			</LayoutConfig>
		</Provider>
	);
};
