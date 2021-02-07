import React from 'react';
import isEmpty from 'lodash/isEmpty';
import getRawBody from 'raw-body';
import { applySnapshot } from 'mobx-state-tree';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutConfig } from '~/Components/LayoutConfig';
import { ConfigProductImagery } from '~/Components/ConfigProductImagery';
import { ClipboardListSolid } from '~/Components/svg/ClipboardListSolid.svg';
import { SelectorPanel } from '~/Components/selectors/SelectorPanel';
import { ReviewConfig } from '~/Components/ReviewConfig';
import { SelectorMenu } from '~/Components/selectors/SelectorMenu';

const ConfigProduct = ({ snapshot = null, productSlug = '' }) => {
	if (!isEmpty(snapshot)) {
		applySnapshot(appStore, JSON.parse(snapshot));
	} else {
		appStore.setConfigPage(productSlug);
	}
	if (process.browser) {
		appStore.setIsMediaQueryXl(appStore.matchXlMq.matches);
	}
	return (
		<Provider value={appStore}>
			<LayoutConfig>
				<main className="MainComponent MainComponent--bleed">
					<SelectorMenu />
					<div className="block xl:flex xl:border-t-4 xl:border-solid xl:border-blue-100">
						<div className="ConfigPreview">
							<div className="ConfigImage">
								<ConfigProductImagery />
							</div>
							<div className="ConfigReview xl:hidden print:hidden">
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
						<SelectorPanel />
					</div>
				</main>
			</LayoutConfig>
		</Provider>
	);
};

export const getServerSideProps = async (context) => {
	let snapshot = null;

	appStore.setConfigPage(context.query.product);
	if (context.req.method === 'POST') {
		const body = await getRawBody(context.req);

		snapshot = body.toString('utf-8');
	}
	return {
		props: {
			snapshot,
			productSlug: context.query.product,
		},
	};
};

export default ConfigProduct;
