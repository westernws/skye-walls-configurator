import React from 'react';
import isEmpty from 'lodash/isEmpty';
import getRawBody from 'raw-body';
import { applySnapshot, getSnapshot } from 'mobx-state-tree';

import { Provider, appStore } from '~/Stores/App.store';
import { LayoutConfig } from '~/Components/LayoutConfig';
import { ConfigProductImagery } from '~/Components/ConfigProductImagery';
import { ClipboardListSolid } from '~/Components/svg/ClipboardListSolid.svg';
import { SelectorPanel } from '~/Components/selectors/SelectorPanel';
import { ReviewConfig } from '~/Components/ReviewConfig';
import { SelectorMenu } from '~/Components/selectors/SelectorMenu';

const ConfigProduct = ({ snapshot = null }) => {
	if (!isEmpty(snapshot)) {
		console.log('snapshot exists');
		applySnapshot(appStore, JSON.parse(snapshot));
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
						<SelectorPanel />
					</div>
				</main>
			</LayoutConfig>
		</Provider>
	);
};

export const getServerSideProps = async (context) => {
	/* eslint-disable */
	const stub = {
		"id": "AppModel_main",
		"productCollections": [
			{
				"id": "ProductCollectionModel_sliding",
				"name": "sliding",
				"displayName": "Sliding",
				"displayGroupName": "Sliding Door",
				"description": "\n\t\t\tAlso called multi-slide or panoramic doors, our sliding doors feature large panels that slide open and stack\n\t\t\tor tuck away out of sight to connect the indoors with the outside. Panels can move in one direction or part\n\t\t\tin the center.\n\t\t",
				"productGroups": [
					{
						"id": "ProductGroupModel_aluminum-sliding",
						"name": "aluminum-sliding",
						"displayName": "Aluminum",
						"displayGroupName": "Aluminum Sliding Door",
						"description": "\n\t\t\tUsed in contemporary living spaces, it can be finished in a variety of colors and does not require\n\t\t\tregular maintenance.\n\t\t",
						"products": [
							{
								"id": "ProductModel_camsd",
								"name": "camsd",
								"displayName": "Classic Aluminum Sliding Door",
								"description": "Smooth operation meets clean design.",
								"features": [
									"Low-E dual pane argon-filled glass for energy efficiency",
									"Wide panels for more light and glass",
									"Panels can move in one direction or part in the center",
									"Panels can stack within the frame or conceal within a wall pocket",
									"Stainless steel ball bearing rollers for easy operation",
									"Concealed multi-point locking system",
									"Contemporary hardware",
									"After-market screening solution"
								],
								"illustrationAnimated": null,
								"illustrationStatic": null,
								"images": [
									{
										"id": "ProductImageModel_OptionColorModel_camsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdan",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdan",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdan",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdan",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbb",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbb",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbb",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbb",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbriar",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbriar",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbriar",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdbriar",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdba",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdba",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdba",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdba",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdct",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdct",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdct",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdct",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdhb",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdhb",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdhb",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdhb",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdnw",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdnw",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdnw",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdnw",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsa",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsa",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsa",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsa",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsb",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsb",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsb",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdsb",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwarmtone",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwarmtone",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwarmtone",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwarmtone",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwhite",
										"handle": "OptionModel_camsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwhite",
										"handle": "OptionModel_camsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwhite",
										"handle": "OptionModel_camsdpb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_camsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_camsdwhite",
										"handle": "OptionModel_camsdpbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									}
								],
								"inheritedFeatures": "",
								"inheritedFeaturesLong": "",
								"isActive": false,
								"selectionGroups": [
									{
										"id": "SelectionGroupModel_colorcamsd",
										"name": "color",
										"displayName": "Door Colors",
										"displayNameSingular": "Door Color",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_camsdcolor",
												"name": "color",
												"displayName": "Color",
												"description": "",
												"options": [
													{
														"id": "OptionColorModel_camsdba",
														"name": "ba",
														"displayName": "Bronze Anodized",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "424143"
													},
													{
														"id": "OptionColorModel_camsdsa",
														"name": "sa",
														"displayName": "Satin Anodized",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "D0D0CF"
													},
													{
														"id": "OptionColorModel_camsdwarmtone",
														"name": "warmtone",
														"displayName": "Warmtone",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "978C7B"
													},
													{
														"id": "OptionColorModel_camsdwhite",
														"name": "white",
														"displayName": "White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "fff"
													},
													{
														"id": "OptionColorModel_camsdan",
														"name": "an",
														"displayName": "Autumn Night",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "9C674F"
													},
													{
														"id": "OptionColorModel_camsdbb",
														"name": "bb",
														"displayName": "Bison Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "8D806F"
													},
													{
														"id": "OptionColorModel_camsdbriar",
														"name": "briar",
														"displayName": "Briar",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "6B4C38"
													},
													{
														"id": "OptionColorModel_camsdct",
														"name": "ct",
														"displayName": "Cinnamon Toast",
														"description": "",
														"finish": "",
														"selected": true,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "7B2022"
													},
													{
														"id": "OptionColorModel_camsdhb",
														"name": "hb",
														"displayName": "Hillside Bronze",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "3C2B13"
													},
													{
														"id": "OptionColorModel_camsdnw",
														"name": "nw",
														"displayName": "Navajo White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "F5EDE0"
													},
													{
														"id": "OptionColorModel_camsdsb",
														"name": "sb",
														"displayName": "Stonish Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "B5A48B"
													}
												],
												"useTooltip": true
											}
										]
									},
									{
										"id": "SelectionGroupModel_floor-sillscamsd",
										"name": "floor-sills",
										"displayName": "Floor Sills",
										"displayNameSingular": "Floor Sill",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_camsdfloor-sills",
												"name": "floor-sills",
												"displayName": "Floor Sills",
												"description": "",
												"options": [
													{
														"id": "OptionModel_camsdwbs",
														"name": "wbs",
														"displayName": "Water Barrier Sill",
														"description": "Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_camsdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Water-Barrier.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_camsdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Water-Barrier.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_camsdfs",
														"name": "fs",
														"displayName": "Flush Sill",
														"description": "When ease of entry is more important than performance against the elements. Lines up with most interior flooring.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_camsdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Flush.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_camsdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Flush.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_camsdts",
														"name": "ts",
														"displayName": "Thinline Sill",
														"description": "Ideal for projects where a continuation of flooring from the inside to the outdoors needs to appear virtually seamless.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_camsdts",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Thinline.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_camsdts",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Thinline.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_handlescamsd",
										"name": "handles",
										"displayName": "Handles",
										"displayNameSingular": "Handle",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_camsdhandles",
												"name": "handles",
												"displayName": "Handles",
												"description": "",
												"options": [
													{
														"id": "OptionModel_camsdfmbn",
														"name": "fmbn",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_camsdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_camsdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_camsdfmb",
														"name": "fmb",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_camsdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_camsdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_camsdpbn",
														"name": "pbn",
														"displayName": "Premium",
														"description": "Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_camsdpbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Premium-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_camsdpbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Premium-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_camsdpb",
														"name": "pb",
														"displayName": "Premium",
														"description": "Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_camsdpb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Premium-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_camsdpb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Premium-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_environmentcamsd",
										"name": "environment",
										"displayName": "Environment",
										"displayNameSingular": "",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_camsdview",
												"name": "view",
												"displayName": "View",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_camsdcityscape",
														"name": "cityscape",
														"displayName": "Cityscape",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdcityscape",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Cityscape.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdcityscape",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Cityscape.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsddesert",
														"name": "desert",
														"displayName": "Desert",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsddesert",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Desert.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsddesert",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Desert.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdmv",
														"name": "mv",
														"displayName": "Mountain View",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdmv",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Mountain-View.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdmv",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Mountain-View.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdoceanside",
														"name": "oceanside",
														"displayName": "Oceanside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdoceanside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Oceanside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdoceanside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Oceanside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdpoolside",
														"name": "poolside",
														"displayName": "Poolside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdpoolside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Poolside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdpoolside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Poolside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdwt",
														"name": "wt",
														"displayName": "Wild Thing",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdwt",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Wild-Thing.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdwt",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Wild-Thing.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_camsdwall",
												"name": "wall",
												"displayName": "Wall Color",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_camsdconch",
														"name": "conch",
														"displayName": "Conch",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdconch",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "Wall-Color-Horizon.jpg",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "F5EEE9"
													},
													{
														"id": "OptionEnvironmentModel_camsdpistachio",
														"name": "pistachio",
														"displayName": "Pistachio",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdpistachio",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E6EBE4"
													},
													{
														"id": "OptionEnvironmentModel_camsdiceberg",
														"name": "iceberg",
														"displayName": "Iceberg",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdiceberg",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E0E7E9"
													},
													{
														"id": "OptionEnvironmentModel_camsdpebble",
														"name": "pebble",
														"displayName": "Pebble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdpebble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "CFC4AA"
													},
													{
														"id": "OptionEnvironmentModel_camsdmeadow",
														"name": "meadow",
														"displayName": "Meadow",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdmeadow",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "BFC5B1"
													},
													{
														"id": "OptionEnvironmentModel_camsdhorizon",
														"name": "horizon",
														"displayName": "Horizon",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdhorizon",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1C3C8"
													},
													{
														"id": "OptionEnvironmentModel_camsdsmoke",
														"name": "smoke",
														"displayName": "Smoke",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdsmoke",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1B9B7"
													},
													{
														"id": "OptionEnvironmentModel_camsdjute",
														"name": "jute",
														"displayName": "Jute",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdjute",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E3D9D1"
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_camsdfloor",
												"name": "floor",
												"displayName": "Floor",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_camsdnatural",
														"name": "natural",
														"displayName": "Natural",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Natural.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Natural.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdjacobean",
														"name": "jacobean",
														"displayName": "Jacobean",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Jacobean.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Jacobean.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdsw",
														"name": "sw",
														"displayName": "Simply White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Simply-White.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Simply-White.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdwo",
														"name": "wo",
														"displayName": "White Oak",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-White-Oak.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-White-Oak.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdtile",
														"name": "tile",
														"displayName": "Tile",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Tile.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Tile.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_camsdmarble",
														"name": "marble",
														"displayName": "Marble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_camsdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Marble.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_camsdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Marble.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											}
										]
									}
								]
							},
							{
								"id": "ProductModel_pamsd",
								"name": "pamsd",
								"displayName": "Performance Aluminum Sliding Door",
								"description": "Energy effeciency and strength.",
								"features": [
									"Available in bigger and taller sizes",
									"Design pressure (DP) rating of 50 for durability",
									"Compliant with California’s rigorous Title 24 requirements"
								],
								"illustrationAnimated": null,
								"illustrationStatic": null,
								"images": [
									{
										"id": "ProductImageModel_OptionColorModel_pamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdan",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdan",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdan",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdan",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-autumn-night-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbb",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbb",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbb",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbb",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bison-beige-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbriar",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbriar",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbriar",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbriar",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-briar-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdba",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdba",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdba",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdba",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-bronze-anodized-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdct",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdct",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdct",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdct",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-cinnamon-toast-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdhb",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdhb",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdhb",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdhb",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-hillside-bronze-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdnw",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdnw",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdnw",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdnw",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-navajo-white-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsa",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsa",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsa",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsa",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-satin-anodized-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsb",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsb",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsb",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsb",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-stonish-beige-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwarmtone",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwarmtone",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwarmtone",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwarmtone",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-warmtone-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-contemporary-black-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwhite",
										"handle": "OptionModel_pamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-contemporary-brushed-nickel-non-pocketing-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwhite",
										"handle": "OptionModel_pamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwhite",
										"handle": "OptionModel_pamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwhite",
										"handle": "OptionModel_pamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-premium-black-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/classic-performance",
										"fileName": "7600-aluminum-white-premium-brushed-nickel-non-pocketing-classic.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pamsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									}
								],
								"inheritedFeatures": "Everything in Classic, PLUS",
								"inheritedFeaturesLong": "Including everything from our CLASSIC models and more.",
								"isActive": false,
								"selectionGroups": [
									{
										"id": "SelectionGroupModel_colorpamsd",
										"name": "color",
										"displayName": "Door Colors",
										"displayNameSingular": "Door Color",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_pamsdcolor",
												"name": "color",
												"displayName": "Color",
												"description": "",
												"options": [
													{
														"id": "OptionColorModel_pamsdba",
														"name": "ba",
														"displayName": "Bronze Anodized",
														"description": "",
														"finish": "",
														"selected": true,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "424143"
													},
													{
														"id": "OptionColorModel_pamsdsa",
														"name": "sa",
														"displayName": "Satin Anodized",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "D0D0CF"
													},
													{
														"id": "OptionColorModel_pamsdwarmtone",
														"name": "warmtone",
														"displayName": "Warmtone",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "978C7B"
													},
													{
														"id": "OptionColorModel_pamsdwhite",
														"name": "white",
														"displayName": "White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "fff"
													},
													{
														"id": "OptionColorModel_pamsdan",
														"name": "an",
														"displayName": "Autumn Night",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "9C674F"
													},
													{
														"id": "OptionColorModel_pamsdbb",
														"name": "bb",
														"displayName": "Bison Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "8D806F"
													},
													{
														"id": "OptionColorModel_pamsdbriar",
														"name": "briar",
														"displayName": "Briar",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "6B4C38"
													},
													{
														"id": "OptionColorModel_pamsdct",
														"name": "ct",
														"displayName": "Cinnamon Toast",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "7B2022"
													},
													{
														"id": "OptionColorModel_pamsdhb",
														"name": "hb",
														"displayName": "Hillside Bronze",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "3C2B13"
													},
													{
														"id": "OptionColorModel_pamsdnw",
														"name": "nw",
														"displayName": "Navajo White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "F5EDE0"
													},
													{
														"id": "OptionColorModel_pamsdsb",
														"name": "sb",
														"displayName": "Stonish Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "B5A48B"
													}
												],
												"useTooltip": true
											}
										]
									},
									{
										"id": "SelectionGroupModel_floor-sillspamsd",
										"name": "floor-sills",
										"displayName": "Floor Sills",
										"displayNameSingular": "Floor Sill",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_pamsdfloor-sills",
												"name": "floor-sills",
												"displayName": "Floor Sills",
												"description": "",
												"options": [
													{
														"id": "OptionModel_pamsdwbs",
														"name": "wbs",
														"displayName": "Water Barrier Sill",
														"description": "Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pamsdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Water-Barrier.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pamsdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Water-Barrier.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_pamsdfs",
														"name": "fs",
														"displayName": "Flush Sill",
														"description": "When ease of entry is more important than performance against the elements. Lines up with most interior flooring.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pamsdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Flush.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pamsdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Flush.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_pamsdts",
														"name": "ts",
														"displayName": "Thinline Sill",
														"description": "Ideal for projects where a continuation of flooring from the inside to the outdoors needs to appear virtually seamless.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pamsdts",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Thinline.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pamsdts",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Thinline.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_handlespamsd",
										"name": "handles",
										"displayName": "Handles",
										"displayNameSingular": "Handle",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_pamsdhandles",
												"name": "handles",
												"displayName": "Handles",
												"description": "",
												"options": [
													{
														"id": "OptionModel_pamsdfmbn",
														"name": "fmbn",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pamsdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pamsdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_pamsdfmb",
														"name": "fmb",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pamsdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pamsdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_pamsdcbn",
														"name": "cbn",
														"displayName": "Contemporary",
														"description": "Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pamsdcbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Contemporary-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pamsdcbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Contemporary-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_pamsdcb",
														"name": "cb",
														"displayName": "Contemporary",
														"description": "Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pamsdcb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pamsdcb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_environmentpamsd",
										"name": "environment",
										"displayName": "Environment",
										"displayNameSingular": "",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_pamsdview",
												"name": "view",
												"displayName": "View",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_pamsdcityscape",
														"name": "cityscape",
														"displayName": "Cityscape",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdcityscape",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Cityscape.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdcityscape",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Cityscape.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsddesert",
														"name": "desert",
														"displayName": "Desert",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsddesert",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Desert.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsddesert",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Desert.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdmv",
														"name": "mv",
														"displayName": "Mountain View",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdmv",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Mountain-View.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdmv",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Mountain-View.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdoceanside",
														"name": "oceanside",
														"displayName": "Oceanside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdoceanside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Oceanside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdoceanside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Oceanside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdpoolside",
														"name": "poolside",
														"displayName": "Poolside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdpoolside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Poolside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdpoolside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Poolside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdwt",
														"name": "wt",
														"displayName": "Wild Thing",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdwt",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Wild-Thing.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdwt",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Wild-Thing.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_pamsdwall",
												"name": "wall",
												"displayName": "Wall Color",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_pamsdconch",
														"name": "conch",
														"displayName": "Conch",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdconch",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "Wall-Color-Horizon.jpg",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "F5EEE9"
													},
													{
														"id": "OptionEnvironmentModel_pamsdpistachio",
														"name": "pistachio",
														"displayName": "Pistachio",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdpistachio",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E6EBE4"
													},
													{
														"id": "OptionEnvironmentModel_pamsdiceberg",
														"name": "iceberg",
														"displayName": "Iceberg",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdiceberg",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E0E7E9"
													},
													{
														"id": "OptionEnvironmentModel_pamsdpebble",
														"name": "pebble",
														"displayName": "Pebble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdpebble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "CFC4AA"
													},
													{
														"id": "OptionEnvironmentModel_pamsdmeadow",
														"name": "meadow",
														"displayName": "Meadow",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdmeadow",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "BFC5B1"
													},
													{
														"id": "OptionEnvironmentModel_pamsdhorizon",
														"name": "horizon",
														"displayName": "Horizon",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdhorizon",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1C3C8"
													},
													{
														"id": "OptionEnvironmentModel_pamsdsmoke",
														"name": "smoke",
														"displayName": "Smoke",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdsmoke",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1B9B7"
													},
													{
														"id": "OptionEnvironmentModel_pamsdjute",
														"name": "jute",
														"displayName": "Jute",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdjute",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E3D9D1"
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_pamsdfloor",
												"name": "floor",
												"displayName": "Floor",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_pamsdnatural",
														"name": "natural",
														"displayName": "Natural",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Natural.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Natural.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdjacobean",
														"name": "jacobean",
														"displayName": "Jacobean",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Jacobean.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Jacobean.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdsw",
														"name": "sw",
														"displayName": "Simply White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Simply-White.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Simply-White.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdwo",
														"name": "wo",
														"displayName": "White Oak",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-White-Oak.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-White-Oak.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdtile",
														"name": "tile",
														"displayName": "Tile",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Tile.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Tile.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pamsdmarble",
														"name": "marble",
														"displayName": "Marble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pamsdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Marble.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pamsdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Marble.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											}
										]
									}
								]
							},
							{
								"id": "ProductModel_ssamsd",
								"name": "ssamsd",
								"displayName": "Simulated Steel Aluminum Sliding Door",
								"description": "The look of steel but more affordable.",
								"features": [
									"Beveled glass stops",
									"Simulated divided lights to emulate a putty glaze"
								],
								"illustrationAnimated": {
									"id": "ImageModel_ssamsd",
									"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
									"basePath": "/images/product-illustrations",
									"fileName": "ss-sliding-door.gif",
									"width": 350,
									"useCdn": false,
									"aspectRatio": 1.24955009
								},
								"illustrationStatic": {
									"id": "ImageModel_ss-sliding-door.png",
									"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
									"basePath": "/images/product-illustrations",
									"fileName": "ss-sliding-door.png",
									"width": 350,
									"useCdn": false,
									"aspectRatio": 1.24955009
								},
								"images": [
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-autumn-night-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-autumn-night-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdan",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-autumn-night-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdan",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-autumn-night-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdan",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-autumn-night-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdan",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-autumn-night-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-autumn-night-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bison-beige-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bison-beige-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbb",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bison-beige-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbb",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bison-beige-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbb",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bison-beige-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbb",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bison-beige-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bison-beige-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-briar-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-briar-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbriar",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-briar-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbriar",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-briar-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbriar",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-briar-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbriar",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-briar-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-briar-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bronze-anodized-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bronze-anodized-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdba",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bronze-anodized-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdba",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bronze-anodized-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdba",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bronze-anodized-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdba",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bronze-anodized-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-bronze-anodized-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-cinnamon-toast-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-cinnamon-toast-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdct",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-cinnamon-toast-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdct",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-cinnamon-toast-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdct",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdct",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-cinnamon-toast-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-cinnamon-toast-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-hillside-bronze-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-hillside-bronze-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdhb",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-hillside-bronze-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdhb",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-hillside-bronze-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdhb",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-hillside-bronze-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdhb",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-hillside-bronze-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-hillside-bronze-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-navajo-white-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-navajo-white-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdnw",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-navajo-white-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdnw",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-navajo-white-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdnw",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-navajo-white-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdnw",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-navajo-white-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-navajo-white-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-satin-anodized-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-satin-anodized-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsa",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-satin-anodized-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsa",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-satin-anodized-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsa",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-satin-anodized-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsa",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-satin-anodized-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-satin-anodized-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-stonish-beige-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-stonish-beige-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsb",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-stonish-beige-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsb",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-stonish-beige-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsb",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-stonish-beige-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsb",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-stonish-beige-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-stonish-beige-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-warmtone-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-warmtone-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwarmtone",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-warmtone-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwarmtone",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-warmtone-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwarmtone",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-warmtone-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwarmtone",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-warmtone-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-warmtone-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-white-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-white-contemporary-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwhite",
										"handle": "OptionModel_ssamsdcb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-white-contemporary-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwhite",
										"handle": "OptionModel_ssamsdcbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-white-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwhite",
										"handle": "OptionModel_ssamsdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-white-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwhite",
										"handle": "OptionModel_ssamsdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-white-premium-black-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssamsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/sliding/aluminum/simulated-steel",
										"fileName": "7600-aluminum-white-premium-brushed-nickel-non-pocketing-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssamsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									}
								],
								"inheritedFeatures": "Everything in Classic and Peformance, PLUS",
								"inheritedFeaturesLong": "Including everything from our PERFORMANCE and CLASSIC models and more.",
								"isActive": false,
								"selectionGroups": [
									{
										"id": "SelectionGroupModel_colorssamsd",
										"name": "color",
										"displayName": "Door Colors",
										"displayNameSingular": "Door Color",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_ssamsdcolor",
												"name": "color",
												"displayName": "Color",
												"description": "",
												"options": [
													{
														"id": "OptionColorModel_ssamsdba",
														"name": "ba",
														"displayName": "Bronze Anodized",
														"description": "",
														"finish": "",
														"selected": true,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "424143"
													},
													{
														"id": "OptionColorModel_ssamsdsa",
														"name": "sa",
														"displayName": "Satin Anodized",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "D0D0CF"
													},
													{
														"id": "OptionColorModel_ssamsdwarmtone",
														"name": "warmtone",
														"displayName": "Warmtone",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "978C7B"
													},
													{
														"id": "OptionColorModel_ssamsdwhite",
														"name": "white",
														"displayName": "White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "fff"
													},
													{
														"id": "OptionColorModel_ssamsdan",
														"name": "an",
														"displayName": "Autumn Night",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "9C674F"
													},
													{
														"id": "OptionColorModel_ssamsdbb",
														"name": "bb",
														"displayName": "Bison Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "8D806F"
													},
													{
														"id": "OptionColorModel_ssamsdbriar",
														"name": "briar",
														"displayName": "Briar",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "6B4C38"
													},
													{
														"id": "OptionColorModel_ssamsdct",
														"name": "ct",
														"displayName": "Cinnamon Toast",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "7B2022"
													},
													{
														"id": "OptionColorModel_ssamsdhb",
														"name": "hb",
														"displayName": "Hillside Bronze",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "3C2B13"
													},
													{
														"id": "OptionColorModel_ssamsdnw",
														"name": "nw",
														"displayName": "Navajo White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "F5EDE0"
													},
													{
														"id": "OptionColorModel_ssamsdsb",
														"name": "sb",
														"displayName": "Stonish Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "B5A48B"
													}
												],
												"useTooltip": true
											}
										]
									},
									{
										"id": "SelectionGroupModel_floor-sillsssamsd",
										"name": "floor-sills",
										"displayName": "Floor Sills",
										"displayNameSingular": "Floor Sill",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_ssamsdfloor-sills",
												"name": "floor-sills",
												"displayName": "Floor Sills",
												"description": "",
												"options": [
													{
														"id": "OptionModel_ssamsdwbs",
														"name": "wbs",
														"displayName": "Water Barrier Sill",
														"description": "Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssamsdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Water-Barrier.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssamsdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Water-Barrier.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_ssamsdfs",
														"name": "fs",
														"displayName": "Flush Sill",
														"description": "When ease of entry is more important than performance against the elements. Lines up with most interior flooring.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssamsdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Flush.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssamsdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Flush.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_ssamsdts",
														"name": "ts",
														"displayName": "Thinline Sill",
														"description": "Ideal for projects where a continuation of flooring from the inside to the outdoors needs to appear virtually seamless.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssamsdts",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Thinline.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssamsdts",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Thinline.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_handlesssamsd",
										"name": "handles",
										"displayName": "Handles",
										"displayNameSingular": "Handle",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_ssamsdhandles",
												"name": "handles",
												"displayName": "Handles",
												"description": "",
												"options": [
													{
														"id": "OptionModel_ssamsdfmbn",
														"name": "fmbn",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssamsdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssamsdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_ssamsdfmb",
														"name": "fmb",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssamsdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssamsdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_ssamsdcbn",
														"name": "cbn",
														"displayName": "Contemporary",
														"description": "Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssamsdcbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Contemporary-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssamsdcbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Contemporary-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_ssamsdcb",
														"name": "cb",
														"displayName": "Contemporary",
														"description": "Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssamsdcb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssamsdcb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_environmentssamsd",
										"name": "environment",
										"displayName": "Environment",
										"displayNameSingular": "",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_ssamsdview",
												"name": "view",
												"displayName": "View",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_ssamsdcityscape",
														"name": "cityscape",
														"displayName": "Cityscape",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdcityscape",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Cityscape.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdcityscape",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Cityscape.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsddesert",
														"name": "desert",
														"displayName": "Desert",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsddesert",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Desert.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsddesert",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Desert.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdmv",
														"name": "mv",
														"displayName": "Mountain View",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdmv",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Mountain-View.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdmv",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Mountain-View.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdoceanside",
														"name": "oceanside",
														"displayName": "Oceanside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdoceanside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Oceanside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdoceanside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Oceanside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdpoolside",
														"name": "poolside",
														"displayName": "Poolside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdpoolside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Poolside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdpoolside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Poolside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdwt",
														"name": "wt",
														"displayName": "Wild Thing",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdwt",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Wild-Thing.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdwt",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Wild-Thing.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_ssamsdwall",
												"name": "wall",
												"displayName": "Wall Color",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_ssamsdconch",
														"name": "conch",
														"displayName": "Conch",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdconch",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "Wall-Color-Horizon.jpg",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "F5EEE9"
													},
													{
														"id": "OptionEnvironmentModel_ssamsdpistachio",
														"name": "pistachio",
														"displayName": "Pistachio",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdpistachio",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E6EBE4"
													},
													{
														"id": "OptionEnvironmentModel_ssamsdiceberg",
														"name": "iceberg",
														"displayName": "Iceberg",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdiceberg",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E0E7E9"
													},
													{
														"id": "OptionEnvironmentModel_ssamsdpebble",
														"name": "pebble",
														"displayName": "Pebble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdpebble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "CFC4AA"
													},
													{
														"id": "OptionEnvironmentModel_ssamsdmeadow",
														"name": "meadow",
														"displayName": "Meadow",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdmeadow",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "BFC5B1"
													},
													{
														"id": "OptionEnvironmentModel_ssamsdhorizon",
														"name": "horizon",
														"displayName": "Horizon",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdhorizon",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1C3C8"
													},
													{
														"id": "OptionEnvironmentModel_ssamsdsmoke",
														"name": "smoke",
														"displayName": "Smoke",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdsmoke",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1B9B7"
													},
													{
														"id": "OptionEnvironmentModel_ssamsdjute",
														"name": "jute",
														"displayName": "Jute",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdjute",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E3D9D1"
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_ssamsdfloor",
												"name": "floor",
												"displayName": "Floor",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_ssamsdnatural",
														"name": "natural",
														"displayName": "Natural",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Natural.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Natural.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdjacobean",
														"name": "jacobean",
														"displayName": "Jacobean",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Jacobean.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Jacobean.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdsw",
														"name": "sw",
														"displayName": "Simply White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Simply-White.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Simply-White.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdwo",
														"name": "wo",
														"displayName": "White Oak",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-White-Oak.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-White-Oak.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdtile",
														"name": "tile",
														"displayName": "Tile",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Tile.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Tile.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssamsdmarble",
														"name": "marble",
														"displayName": "Marble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssamsdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Marble.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssamsdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Marble.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											}
										]
									}
								]
							}
						],
						"image": {
							"id": "ImageModel_sliding-door.png",
							"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
							"basePath": "/images/product-illustrations",
							"fileName": "sliding-door.png",
							"width": 350,
							"useCdn": false,
							"aspectRatio": 1.24955009
						},
						"animatedImage": {
							"id": "ImageModel_sliding-door.gif",
							"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
							"basePath": "/images/product-illustrations",
							"fileName": "sliding-door.gif",
							"width": 350,
							"useCdn": false,
							"aspectRatio": 1.24955009
						}
					},
					{
						"id": "ProductGroupModel_vinyl-sliding",
						"name": "vinyl-sliding",
						"displayName": "Vinyl",
						"displayGroupName": "Vinyl Sliding Door",
						"description": "\n\t\t\tThe most economical solution to transform your home, it stands up to the elements and is\n\t\t\tnearly maintenance-free.\n\t\t",
						"products": [
							{
								"id": "ProductModel_vmsd",
								"name": "vmsd",
								"displayName": "Vinyl Sliding Door",
								"description": "\n\t\t\tThe most economical solution to transform your home, it stands up to the elements and is\n\t\t\tnearly maintenance-free.\n\t\t",
								"features": [
									"Low-E dual pane argon-filled glass for energy efficiency",
									"Wide panels allow for more light and bigger views",
									"A built-in self-drainage weep system to help safeguard against water intrusion",
									"Color-matched hardware",
									"Concealed locking system",
									"Flush-mounted handle so panels easily slide past each other",
									"After-market screening solution"
								],
								"illustrationAnimated": null,
								"illustrationStatic": null,
								"images": [
									{
										"id": "ProductImageModel_OptionColorModel_vmsdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-bronze-ano.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-satin-ano.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-warmtone.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-white.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-white.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-white.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-white.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-white.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-white.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-white.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_vmsdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product",
										"fileName": "7600-2xo-white.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_vmsdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									}
								],
								"inheritedFeatures": "",
								"inheritedFeaturesLong": "",
								"isActive": false,
								"selectionGroups": [
									{
										"id": "SelectionGroupModel_colorvmsd",
										"name": "color",
										"displayName": "Door Colors",
										"displayNameSingular": "Door Color",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_vmsdcolor",
												"name": "color",
												"displayName": "Color",
												"description": "",
												"options": [
													{
														"id": "OptionColorModel_vmsdba",
														"name": "ba",
														"displayName": "Bronze Anodized",
														"description": "",
														"finish": "",
														"selected": true,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "424143"
													},
													{
														"id": "OptionColorModel_vmsdsa",
														"name": "sa",
														"displayName": "Satin Anodized",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "D0D0CF"
													},
													{
														"id": "OptionColorModel_vmsdwarmtone",
														"name": "warmtone",
														"displayName": "Warmtone",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "978C7B"
													},
													{
														"id": "OptionColorModel_vmsdwhite",
														"name": "white",
														"displayName": "White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "fff"
													},
													{
														"id": "OptionColorModel_vmsdan",
														"name": "an",
														"displayName": "Autumn Night",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "9C674F"
													},
													{
														"id": "OptionColorModel_vmsdbb",
														"name": "bb",
														"displayName": "Bison Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "8D806F"
													},
													{
														"id": "OptionColorModel_vmsdbriar",
														"name": "briar",
														"displayName": "Briar",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "6B4C38"
													},
													{
														"id": "OptionColorModel_vmsdct",
														"name": "ct",
														"displayName": "Cinnamon Toast",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "7B2022"
													},
													{
														"id": "OptionColorModel_vmsdhb",
														"name": "hb",
														"displayName": "Hillside Bronze",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "3C2B13"
													},
													{
														"id": "OptionColorModel_vmsdnw",
														"name": "nw",
														"displayName": "Navajo White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "F5EDE0"
													},
													{
														"id": "OptionColorModel_vmsdsb",
														"name": "sb",
														"displayName": "Stonish Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "B5A48B"
													}
												],
												"useTooltip": true
											}
										]
									},
									{
										"id": "SelectionGroupModel_handlesvmsd",
										"name": "handles",
										"displayName": "Handles",
										"displayNameSingular": "Handle",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_vmsdhandles",
												"name": "handles",
												"displayName": "Handles",
												"description": "",
												"options": [
													{
														"id": "OptionModel_vmsdfmb",
														"name": "fmb",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_vmsdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_vmsdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_vmsdcpa",
														"name": "cpa",
														"displayName": "C-Pull",
														"description": "For a consistent look, this standard handle matches the color of the door frame.",
														"finish": "Almond",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_vmsdcpa",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_vmsdcpa",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_vmsdcpb",
														"name": "cpb",
														"displayName": "C-Pull",
														"description": "For a consistent look, this standard handle matches the color of the door frame.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_vmsdcpb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_vmsdcpb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_vmsdcpw",
														"name": "cpw",
														"displayName": "C-Pull",
														"description": "For a consistent look, this standard handle matches the color of the door frame.",
														"finish": "White",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_vmsdcpw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_vmsdcpw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Contemporary-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_environmentvmsd",
										"name": "environment",
										"displayName": "Environment",
										"displayNameSingular": "",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_vmsdview",
												"name": "view",
												"displayName": "View",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_vmsdcityscape",
														"name": "cityscape",
														"displayName": "Cityscape",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdcityscape",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Cityscape.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdcityscape",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Cityscape.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsddesert",
														"name": "desert",
														"displayName": "Desert",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsddesert",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Desert.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsddesert",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Desert.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdmv",
														"name": "mv",
														"displayName": "Mountain View",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdmv",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Mountain-View.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdmv",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Mountain-View.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdoceanside",
														"name": "oceanside",
														"displayName": "Oceanside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdoceanside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Oceanside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdoceanside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Oceanside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdpoolside",
														"name": "poolside",
														"displayName": "Poolside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdpoolside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Poolside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdpoolside",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Poolside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdwt",
														"name": "wt",
														"displayName": "Wild Thing",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdwt",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Wild-Thing.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdwt",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Sliding-Wild-Thing.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_vmsdwall",
												"name": "wall",
												"displayName": "Wall Color",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_vmsdconch",
														"name": "conch",
														"displayName": "Conch",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdconch",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "Wall-Color-Horizon.jpg",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "F5EEE9"
													},
													{
														"id": "OptionEnvironmentModel_vmsdpistachio",
														"name": "pistachio",
														"displayName": "Pistachio",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdpistachio",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E6EBE4"
													},
													{
														"id": "OptionEnvironmentModel_vmsdiceberg",
														"name": "iceberg",
														"displayName": "Iceberg",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdiceberg",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E0E7E9"
													},
													{
														"id": "OptionEnvironmentModel_vmsdpebble",
														"name": "pebble",
														"displayName": "Pebble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdpebble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "CFC4AA"
													},
													{
														"id": "OptionEnvironmentModel_vmsdmeadow",
														"name": "meadow",
														"displayName": "Meadow",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdmeadow",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "BFC5B1"
													},
													{
														"id": "OptionEnvironmentModel_vmsdhorizon",
														"name": "horizon",
														"displayName": "Horizon",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdhorizon",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1C3C8"
													},
													{
														"id": "OptionEnvironmentModel_vmsdsmoke",
														"name": "smoke",
														"displayName": "Smoke",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdsmoke",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1B9B7"
													},
													{
														"id": "OptionEnvironmentModel_vmsdjute",
														"name": "jute",
														"displayName": "Jute",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdjute",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E3D9D1"
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_vmsdfloor",
												"name": "floor",
												"displayName": "Floor",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_vmsdnatural",
														"name": "natural",
														"displayName": "Natural",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Natural.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Natural.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdjacobean",
														"name": "jacobean",
														"displayName": "Jacobean",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Jacobean.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Jacobean.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdsw",
														"name": "sw",
														"displayName": "Simply White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Simply-White.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Simply-White.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdwo",
														"name": "wo",
														"displayName": "White Oak",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-White-Oak.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-White-Oak.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdtile",
														"name": "tile",
														"displayName": "Tile",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Tile.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Tile.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_vmsdmarble",
														"name": "marble",
														"displayName": "Marble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_vmsdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Marble.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_vmsdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Marble.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											}
										]
									}
								]
							}
						],
						"image": {
							"id": "ImageModel_ss-sliding-door.png",
							"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
							"basePath": "/images/product-illustrations",
							"fileName": "ss-sliding-door.png",
							"width": 350,
							"useCdn": false,
							"aspectRatio": 1.24955009
						},
						"animatedImage": {
							"id": "ImageModel_ss-sliding-door.gif",
							"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
							"basePath": "/images/product-illustrations",
							"fileName": "ss-sliding-door.gif",
							"width": 350,
							"useCdn": false,
							"aspectRatio": 1.24955009
						}
					}
				],
				"products": []
			},
			{
				"id": "ProductCollectionModel_folding",
				"name": "folding",
				"displayName": "Folding",
				"displayGroupName": "Aluminum Bi-Fold Door",
				"description": "\n\t\t\tSometimes referred to as bi-fold or accordion doors, our folding doors slide open and feature panels that\n\t\t\tfold up against a wall for a true indoor-outdoor experience. Available with a swinging access door for\n\t\t\teveryday operation.\n\t\t",
				"productGroups": [
					{
						"id": "ProductGroupModel_aluminum-folding",
						"name": "aluminum-folding",
						"displayName": "Aluminum",
						"displayGroupName": "Aluminum Folding Door",
						"description": "\n\t\t\tCombining clean modern design with durability and flexibility, it’s available in a variety of finishes.\n\t\t",
						"products": [
							{
								"id": "ProductModel_cabfd",
								"name": "cabfd",
								"displayName": "Classic Aluminum Folding Door",
								"description": "Smooth operation meets clean design.",
								"features": [
									"Low-E dual pane argon-filled glass for energy efficiency",
									"Narrow shardwood for additional glass and light",
									"Stainless steel ball bearing rollers for smooth operation",
									"Concealed multi-point lock for additional protection",
									"Contemporary hardware for a sleek aesthetic",
									"Optional single swinging access door for everyday use"
								],
								"illustrationAnimated": null,
								"illustrationStatic": null,
								"images": [
									{
										"id": "ProductImageModel_OptionColorModel_cabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-autumn-night-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-autumn-night-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdan",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdan",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bison-beige-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bison-beige-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdbb",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdbb",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-briar-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-briar-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdbriar",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdbriar",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bronze-anodized-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdba",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdba",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-cinnamon-toast-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdct",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdct",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-hillside-bronze-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-hillside-bronze-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdhb",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-hillside-bronze-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdhb",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-navajo-white-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-navajo-white-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdnw",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-navajo-white-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdnw",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-satin-anodized-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-satin-anodized-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdsa",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-satin-anodized-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdsa",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-stonish-beige-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-stonish-beige-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdsb",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-stonish-beige-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdsb",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-warmtone-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-warmtone-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdwarmtone",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-warmtone-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdwarmtone",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-white-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-white-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdwhite",
										"handle": "OptionModel_cabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_cabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-white-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_cabfdwhite",
										"handle": "OptionModel_cabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									}
								],
								"inheritedFeatures": "",
								"inheritedFeaturesLong": "",
								"isActive": false,
								"selectionGroups": [
									{
										"id": "SelectionGroupModel_colorcabfd",
										"name": "color",
										"displayName": "Door Colors",
										"displayNameSingular": "Door Color",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_cabfdcolor",
												"name": "color",
												"displayName": "Color",
												"description": "",
												"options": [
													{
														"id": "OptionColorModel_cabfdba",
														"name": "ba",
														"displayName": "Bronze Anodized",
														"description": "",
														"finish": "",
														"selected": true,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "424143"
													},
													{
														"id": "OptionColorModel_cabfdsa",
														"name": "sa",
														"displayName": "Satin Anodized",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "D0D0CF"
													},
													{
														"id": "OptionColorModel_cabfdwarmtone",
														"name": "warmtone",
														"displayName": "Warmtone",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "978C7B"
													},
													{
														"id": "OptionColorModel_cabfdwhite",
														"name": "white",
														"displayName": "White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "fff"
													},
													{
														"id": "OptionColorModel_cabfdan",
														"name": "an",
														"displayName": "Autumn Night",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "9C674F"
													},
													{
														"id": "OptionColorModel_cabfdbb",
														"name": "bb",
														"displayName": "Bison Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "8D806F"
													},
													{
														"id": "OptionColorModel_cabfdbriar",
														"name": "briar",
														"displayName": "Briar",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "6B4C38"
													},
													{
														"id": "OptionColorModel_cabfdct",
														"name": "ct",
														"displayName": "Cinnamon Toast",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "7B2022"
													},
													{
														"id": "OptionColorModel_cabfdhb",
														"name": "hb",
														"displayName": "Hillside Bronze",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "3C2B13"
													},
													{
														"id": "OptionColorModel_cabfdnw",
														"name": "nw",
														"displayName": "Navajo White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "F5EDE0"
													},
													{
														"id": "OptionColorModel_cabfdsb",
														"name": "sb",
														"displayName": "Stonish Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "B5A48B"
													}
												],
												"useTooltip": true
											}
										]
									},
									{
										"id": "SelectionGroupModel_floor-sillscabfd",
										"name": "floor-sills",
										"displayName": "Floor Sills",
										"displayNameSingular": "Floor Sill",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_cabfdfloor-sills",
												"name": "floor-sills",
												"displayName": "Floor Sills",
												"description": "",
												"options": [
													{
														"id": "OptionModel_cabfdwbs",
														"name": "wbs",
														"displayName": "Water Barrier Sill",
														"description": "Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_cabfdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Water-Barrier.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_cabfdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Water-Barrier.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_cabfdfs",
														"name": "fs",
														"displayName": "Flush Sill",
														"description": "When ease of entry is more important than performance against the elements. Lines up with most interior flooring.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_cabfdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Flush.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_cabfdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Flush.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_handlescabfd",
										"name": "handles",
										"displayName": "Handles",
										"displayNameSingular": "Handle",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_cabfdhandles",
												"name": "handles",
												"displayName": "Handles",
												"description": "",
												"options": [
													{
														"id": "OptionModel_cabfdfmbn",
														"name": "fmbn",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_cabfdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_cabfdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_cabfdfmb",
														"name": "fmb",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_cabfdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_cabfdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_environmentcabfd",
										"name": "environment",
										"displayName": "Environment",
										"displayNameSingular": "",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_cabfdview",
												"name": "view",
												"displayName": "View",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_cabfdcityscape-wide",
														"name": "cityscape-wide",
														"displayName": "Cityscape",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdcityscape-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Cityscape.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdcityscape-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Cityscape.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfddesert-wide",
														"name": "desert-wide",
														"displayName": "Desert",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfddesert-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Desert.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfddesert-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Desert.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdmv-wide",
														"name": "mv-wide",
														"displayName": "Mountain View",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdmv-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Mountain-View.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdmv-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Mountain-View.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdoceanside-wide",
														"name": "oceanside-wide",
														"displayName": "Oceanside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdoceanside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Oceanside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdoceanside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Oceanside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdpoolside-wide",
														"name": "poolside-wide",
														"displayName": "Poolside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdpoolside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Poolside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdpoolside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Poolside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdwt-wide",
														"name": "wt-wide",
														"displayName": "Wild Thing",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdwt-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Wild-Thing.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdwt-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Wild-Thing.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_cabfdwall",
												"name": "wall",
												"displayName": "Wall Color",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_cabfdconch",
														"name": "conch",
														"displayName": "Conch",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdconch",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "Wall-Color-Horizon.jpg",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "F5EEE9"
													},
													{
														"id": "OptionEnvironmentModel_cabfdpistachio",
														"name": "pistachio",
														"displayName": "Pistachio",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdpistachio",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E6EBE4"
													},
													{
														"id": "OptionEnvironmentModel_cabfdiceberg",
														"name": "iceberg",
														"displayName": "Iceberg",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdiceberg",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E0E7E9"
													},
													{
														"id": "OptionEnvironmentModel_cabfdpebble",
														"name": "pebble",
														"displayName": "Pebble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdpebble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "CFC4AA"
													},
													{
														"id": "OptionEnvironmentModel_cabfdmeadow",
														"name": "meadow",
														"displayName": "Meadow",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdmeadow",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "BFC5B1"
													},
													{
														"id": "OptionEnvironmentModel_cabfdhorizon",
														"name": "horizon",
														"displayName": "Horizon",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdhorizon",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1C3C8"
													},
													{
														"id": "OptionEnvironmentModel_cabfdsmoke",
														"name": "smoke",
														"displayName": "Smoke",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdsmoke",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1B9B7"
													},
													{
														"id": "OptionEnvironmentModel_cabfdjute",
														"name": "jute",
														"displayName": "Jute",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdjute",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E3D9D1"
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_cabfdfloor",
												"name": "floor",
												"displayName": "Floor",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_cabfdnatural",
														"name": "natural",
														"displayName": "Natural",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Natural.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Natural.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdjacobean",
														"name": "jacobean",
														"displayName": "Jacobean",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Jacobean.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Jacobean.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdsw",
														"name": "sw",
														"displayName": "Simply White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Simply-White.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Simply-White.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdwo",
														"name": "wo",
														"displayName": "White Oak",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-White-Oak.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-White-Oak.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdtile",
														"name": "tile",
														"displayName": "Tile",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Tile.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Tile.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_cabfdmarble",
														"name": "marble",
														"displayName": "Marble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_cabfdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Marble.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_cabfdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Marble.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											}
										]
									}
								]
							},
							{
								"id": "ProductModel_pabfd",
								"name": "pabfd",
								"displayName": "Performance Aluminum Folding Door",
								"description": "Energy efficiency and strength",
								"features": [
									"Available in bigger and taller sizes",
									"Design pressure (DP) rating of 50 for durability",
									"Compliant with California’s rigorous Title 24 requirements"
								],
								"illustrationAnimated": null,
								"illustrationStatic": null,
								"images": [
									{
										"id": "ProductImageModel_OptionColorModel_pabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-autumn-night-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-autumn-night-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdan",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdan",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bison-beige-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bison-beige-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdbb",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdbb",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-briar-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-briar-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdbriar",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdbriar",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bronze-anodized-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdba",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdba",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-cinnamon-toast-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdct",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdct",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-hillside-bronze-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-hillside-bronze-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdhb",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-hillside-bronze-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdhb",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-navajo-white-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-navajo-white-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdnw",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-navajo-white-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdnw",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-satin-anodized-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-satin-anodized-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdsa",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-satin-anodized-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdsa",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-stonish-beige-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-stonish-beige-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdsb",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-stonish-beige-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdsb",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-warmtone-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-warmtone-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdwarmtone",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-warmtone-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdwarmtone",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-white-no-handle-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-white-flush-mounted-black-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdwhite",
										"handle": "OptionModel_pabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_pabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/classic-performance",
										"fileName": "7950-aluminum-white-flush-mounted-brushed-nickel-classic-performance.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_pabfdwhite",
										"handle": "OptionModel_pabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									}
								],
								"inheritedFeatures": "Everything in Classic",
								"inheritedFeaturesLong": "Including everything from our CLASSIC models and more.",
								"isActive": false,
								"selectionGroups": [
									{
										"id": "SelectionGroupModel_colorpabfd",
										"name": "color",
										"displayName": "Door Colors",
										"displayNameSingular": "Door Color",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_pabfdcolor",
												"name": "color",
												"displayName": "Color",
												"description": "",
												"options": [
													{
														"id": "OptionColorModel_pabfdba",
														"name": "ba",
														"displayName": "Bronze Anodized",
														"description": "",
														"finish": "",
														"selected": true,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "424143"
													},
													{
														"id": "OptionColorModel_pabfdsa",
														"name": "sa",
														"displayName": "Satin Anodized",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "D0D0CF"
													},
													{
														"id": "OptionColorModel_pabfdwarmtone",
														"name": "warmtone",
														"displayName": "Warmtone",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "978C7B"
													},
													{
														"id": "OptionColorModel_pabfdwhite",
														"name": "white",
														"displayName": "White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "fff"
													},
													{
														"id": "OptionColorModel_pabfdan",
														"name": "an",
														"displayName": "Autumn Night",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "9C674F"
													},
													{
														"id": "OptionColorModel_pabfdbb",
														"name": "bb",
														"displayName": "Bison Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "8D806F"
													},
													{
														"id": "OptionColorModel_pabfdbriar",
														"name": "briar",
														"displayName": "Briar",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "6B4C38"
													},
													{
														"id": "OptionColorModel_pabfdct",
														"name": "ct",
														"displayName": "Cinnamon Toast",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "7B2022"
													},
													{
														"id": "OptionColorModel_pabfdhb",
														"name": "hb",
														"displayName": "Hillside Bronze",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "3C2B13"
													},
													{
														"id": "OptionColorModel_pabfdnw",
														"name": "nw",
														"displayName": "Navajo White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "F5EDE0"
													},
													{
														"id": "OptionColorModel_pabfdsb",
														"name": "sb",
														"displayName": "Stonish Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "B5A48B"
													}
												],
												"useTooltip": true
											}
										]
									},
									{
										"id": "SelectionGroupModel_floor-sillspabfd",
										"name": "floor-sills",
										"displayName": "Floor Sills",
										"displayNameSingular": "Floor Sill",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_pabfdfloor-sills",
												"name": "floor-sills",
												"displayName": "Floor Sills",
												"description": "",
												"options": [
													{
														"id": "OptionModel_pabfdwbs",
														"name": "wbs",
														"displayName": "Water Barrier Sill",
														"description": "Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pabfdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Water-Barrier.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pabfdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Water-Barrier.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_pabfdfs",
														"name": "fs",
														"displayName": "Flush Sill",
														"description": "When ease of entry is more important than performance against the elements. Lines up with most interior flooring.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pabfdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Flush.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pabfdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Flush.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_handlespabfd",
										"name": "handles",
										"displayName": "Handles",
										"displayNameSingular": "Handle",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_pabfdhandles",
												"name": "handles",
												"displayName": "Handles",
												"description": "",
												"options": [
													{
														"id": "OptionModel_pabfdfmbn",
														"name": "fmbn",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pabfdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pabfdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_pabfdfmb",
														"name": "fmb",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_pabfdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_pabfdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_environmentpabfd",
										"name": "environment",
										"displayName": "Environment",
										"displayNameSingular": "",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_pabfdview",
												"name": "view",
												"displayName": "View",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_pabfdcityscape-wide",
														"name": "cityscape-wide",
														"displayName": "Cityscape",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdcityscape-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Cityscape.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdcityscape-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Cityscape.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfddesert-wide",
														"name": "desert-wide",
														"displayName": "Desert",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfddesert-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Desert.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfddesert-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Desert.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdmv-wide",
														"name": "mv-wide",
														"displayName": "Mountain View",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdmv-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Mountain-View.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdmv-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Mountain-View.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdoceanside-wide",
														"name": "oceanside-wide",
														"displayName": "Oceanside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdoceanside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Oceanside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdoceanside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Oceanside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdpoolside-wide",
														"name": "poolside-wide",
														"displayName": "Poolside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdpoolside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Poolside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdpoolside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Poolside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdwt-wide",
														"name": "wt-wide",
														"displayName": "Wild Thing",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdwt-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Wild-Thing.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdwt-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Wild-Thing.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_pabfdwall",
												"name": "wall",
												"displayName": "Wall Color",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_pabfdconch",
														"name": "conch",
														"displayName": "Conch",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdconch",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "Wall-Color-Horizon.jpg",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "F5EEE9"
													},
													{
														"id": "OptionEnvironmentModel_pabfdpistachio",
														"name": "pistachio",
														"displayName": "Pistachio",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdpistachio",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E6EBE4"
													},
													{
														"id": "OptionEnvironmentModel_pabfdiceberg",
														"name": "iceberg",
														"displayName": "Iceberg",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdiceberg",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E0E7E9"
													},
													{
														"id": "OptionEnvironmentModel_pabfdpebble",
														"name": "pebble",
														"displayName": "Pebble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdpebble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "CFC4AA"
													},
													{
														"id": "OptionEnvironmentModel_pabfdmeadow",
														"name": "meadow",
														"displayName": "Meadow",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdmeadow",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "BFC5B1"
													},
													{
														"id": "OptionEnvironmentModel_pabfdhorizon",
														"name": "horizon",
														"displayName": "Horizon",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdhorizon",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1C3C8"
													},
													{
														"id": "OptionEnvironmentModel_pabfdsmoke",
														"name": "smoke",
														"displayName": "Smoke",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdsmoke",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1B9B7"
													},
													{
														"id": "OptionEnvironmentModel_pabfdjute",
														"name": "jute",
														"displayName": "Jute",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdjute",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E3D9D1"
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_pabfdfloor",
												"name": "floor",
												"displayName": "Floor",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_pabfdnatural",
														"name": "natural",
														"displayName": "Natural",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Natural.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Natural.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdjacobean",
														"name": "jacobean",
														"displayName": "Jacobean",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Jacobean.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Jacobean.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdsw",
														"name": "sw",
														"displayName": "Simply White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Simply-White.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Simply-White.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdwo",
														"name": "wo",
														"displayName": "White Oak",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-White-Oak.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-White-Oak.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdtile",
														"name": "tile",
														"displayName": "Tile",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Tile.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Tile.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_pabfdmarble",
														"name": "marble",
														"displayName": "Marble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_pabfdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Marble.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_pabfdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Marble.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											}
										]
									}
								]
							},
							{
								"id": "ProductModel_ssabfd",
								"name": "ssabfd",
								"displayName": "Simulated Steel Aluminum Folding Door",
								"description": "The look of steel but more affordable.",
								"features": [
									"Beveled glass stops",
									"Simulated divided lights to emulate a putty glaze"
								],
								"illustrationAnimated": {
									"id": "ImageModel_ssabfd",
									"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
									"basePath": "/images/product-illustrations",
									"fileName": "ss-folding-door.gif",
									"width": 350,
									"useCdn": false,
									"aspectRatio": 1.24955009
								},
								"illustrationStatic": {
									"id": "ImageModel_ss-folding-door.png",
									"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
									"basePath": "/images/product-illustrations",
									"fileName": "ss-folding-door.png",
									"width": 350,
									"useCdn": false,
									"aspectRatio": 1.24955009
								},
								"images": [
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-autumn-night-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdan",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-autumn-night-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdan",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdan",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-autumn-night-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdan",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-bison-beige-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdbb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-bison-beige-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdbb",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdbb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-bison-beige-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdbb",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-briar-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdbriar",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-briar-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdbriar",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdbriar",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-briar-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdbriar",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-bronze-anodized-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdba",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-bronze-anodized-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdba",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdba",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-bronze-anodized-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdba",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-cinnamon-toast-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdct",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-cinnamon-toast-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdct",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdct",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdct",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-hillside-bronze-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdhb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-hillside-bronze-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdhb",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdhb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-hillside-bronze-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdhb",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-navajo-white-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdnw",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-navajo-white-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdnw",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdnw",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-navajo-white-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdnw",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-satin-anodized-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdsa",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-satin-anodized-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdsa",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdsa",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-satin-anodized-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdsa",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-stonish-beige-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdsb",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-stonish-beige-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdsb",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdsb",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-stonish-beige-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdsb",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-warmtone-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdwarmtone",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-warmtone-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdwarmtone",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdwarmtone",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-warmtone-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdwarmtone",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-white-no-handle-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdwhite",
										"handle": null,
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-white-flush-mounted-black-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdwhite",
										"handle": "OptionModel_ssabfdfmb",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									},
									{
										"id": "ProductImageModel_OptionColorModel_ssabfdwhite",
										"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
										"basePath": "/images/product/folding/aluminum/simulated-steel",
										"fileName": "7950-aluminum-white-flush-mounted-brushed-nickel-simulated-steel.png",
										"width": 1230,
										"useCdn": false,
										"aspectRatio": 1,
										"color": "OptionColorModel_ssabfdwhite",
										"handle": "OptionModel_ssabfdfmbn",
										"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
									}
								],
								"inheritedFeatures": "Everything in Performance",
								"inheritedFeaturesLong": "Including everything from our PERFORMANCE models and more.",
								"isActive": false,
								"selectionGroups": [
									{
										"id": "SelectionGroupModel_colorssabfd",
										"name": "color",
										"displayName": "Door Colors",
										"displayNameSingular": "Door Color",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_ssabfdcolor",
												"name": "color",
												"displayName": "Color",
												"description": "",
												"options": [
													{
														"id": "OptionColorModel_ssabfdba",
														"name": "ba",
														"displayName": "Bronze Anodized",
														"description": "",
														"finish": "",
														"selected": true,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "424143"
													},
													{
														"id": "OptionColorModel_ssabfdsa",
														"name": "sa",
														"displayName": "Satin Anodized",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "D0D0CF"
													},
													{
														"id": "OptionColorModel_ssabfdwarmtone",
														"name": "warmtone",
														"displayName": "Warmtone",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "978C7B"
													},
													{
														"id": "OptionColorModel_ssabfdwhite",
														"name": "white",
														"displayName": "White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "standard",
														"thumb": null,
														"detailImage": null,
														"hex": "fff"
													},
													{
														"id": "OptionColorModel_ssabfdan",
														"name": "an",
														"displayName": "Autumn Night",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "9C674F"
													},
													{
														"id": "OptionColorModel_ssabfdbb",
														"name": "bb",
														"displayName": "Bison Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "8D806F"
													},
													{
														"id": "OptionColorModel_ssabfdbriar",
														"name": "briar",
														"displayName": "Briar",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "6B4C38"
													},
													{
														"id": "OptionColorModel_ssabfdct",
														"name": "ct",
														"displayName": "Cinnamon Toast",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "7B2022"
													},
													{
														"id": "OptionColorModel_ssabfdhb",
														"name": "hb",
														"displayName": "Hillside Bronze",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "3C2B13"
													},
													{
														"id": "OptionColorModel_ssabfdnw",
														"name": "nw",
														"displayName": "Navajo White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "F5EDE0"
													},
													{
														"id": "OptionColorModel_ssabfdsb",
														"name": "sb",
														"displayName": "Stonish Beige",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "designer",
														"thumb": null,
														"detailImage": null,
														"hex": "B5A48B"
													}
												],
												"useTooltip": true
											}
										]
									},
									{
										"id": "SelectionGroupModel_floor-sillsssabfd",
										"name": "floor-sills",
										"displayName": "Floor Sills",
										"displayNameSingular": "Floor Sill",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_ssabfdfloor-sills",
												"name": "floor-sills",
												"displayName": "Floor Sills",
												"description": "",
												"options": [
													{
														"id": "OptionModel_ssabfdwbs",
														"name": "wbs",
														"displayName": "Water Barrier Sill",
														"description": "Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssabfdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Water-Barrier.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssabfdwbs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Water-Barrier.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_ssabfdfs",
														"name": "fs",
														"displayName": "Flush Sill",
														"description": "When ease of entry is more important than performance against the elements. Lines up with most interior flooring.",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssabfdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/thumb",
															"fileName": "Sill-Flush.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssabfdfs",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/sill/detail",
															"fileName": "Sill-Flush.jpg",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_handlesssabfd",
										"name": "handles",
										"displayName": "Handles",
										"displayNameSingular": "Handle",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_ssabfdhandles",
												"name": "handles",
												"displayName": "Handles",
												"description": "",
												"options": [
													{
														"id": "OptionModel_ssabfdfmbn",
														"name": "fmbn",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Brushed Nickel",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssabfdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssabfdfmbn",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-N.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													},
													{
														"id": "OptionModel_ssabfdfmb",
														"name": "fmb",
														"displayName": "Flush-Mounted",
														"description": "Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.",
														"finish": "Black",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "ImageModel_ssabfdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/thumb",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1
														},
														"detailImage": {
															"id": "ImageModel_ssabfdfmb",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/handle/detail",
															"fileName": "Handle-7600-Flush-Mount-B.png",
															"width": 400,
															"useCdn": false,
															"aspectRatio": 1
														}
													}
												],
												"useTooltip": false
											}
										]
									},
									{
										"id": "SelectionGroupModel_environmentssabfd",
										"name": "environment",
										"displayName": "Environment",
										"displayNameSingular": "",
										"description": "",
										"optionGroups": [
											{
												"id": "OptionGroupModel_ssabfdview",
												"name": "view",
												"displayName": "View",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_ssabfdcityscape-wide",
														"name": "cityscape-wide",
														"displayName": "Cityscape",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdcityscape-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Cityscape.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdcityscape-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Cityscape.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfddesert-wide",
														"name": "desert-wide",
														"displayName": "Desert",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfddesert-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Desert.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfddesert-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Desert.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdmv-wide",
														"name": "mv-wide",
														"displayName": "Mountain View",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdmv-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Mountain-View.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdmv-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Mountain-View.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdoceanside-wide",
														"name": "oceanside-wide",
														"displayName": "Oceanside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdoceanside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Oceanside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdoceanside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Oceanside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdpoolside-wide",
														"name": "poolside-wide",
														"displayName": "Poolside",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdpoolside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Poolside.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdpoolside-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Poolside.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdwt-wide",
														"name": "wt-wide",
														"displayName": "Wild Thing",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdwt-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Wild-Thing.png",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdwt-wide",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/background",
															"fileName": "View-Folding-Wild-Thing.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_ssabfdwall",
												"name": "wall",
												"displayName": "Wall Color",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_ssabfdconch",
														"name": "conch",
														"displayName": "Conch",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdconch",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "Wall-Color-Horizon.jpg",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "F5EEE9"
													},
													{
														"id": "OptionEnvironmentModel_ssabfdpistachio",
														"name": "pistachio",
														"displayName": "Pistachio",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdpistachio",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E6EBE4"
													},
													{
														"id": "OptionEnvironmentModel_ssabfdiceberg",
														"name": "iceberg",
														"displayName": "Iceberg",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdiceberg",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E0E7E9"
													},
													{
														"id": "OptionEnvironmentModel_ssabfdpebble",
														"name": "pebble",
														"displayName": "Pebble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdpebble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "CFC4AA"
													},
													{
														"id": "OptionEnvironmentModel_ssabfdmeadow",
														"name": "meadow",
														"displayName": "Meadow",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdmeadow",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "BFC5B1"
													},
													{
														"id": "OptionEnvironmentModel_ssabfdhorizon",
														"name": "horizon",
														"displayName": "Horizon",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdhorizon",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1C3C8"
													},
													{
														"id": "OptionEnvironmentModel_ssabfdsmoke",
														"name": "smoke",
														"displayName": "Smoke",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdsmoke",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "B1B9B7"
													},
													{
														"id": "OptionEnvironmentModel_ssabfdjute",
														"name": "jute",
														"displayName": "Jute",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": null,
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdjute",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/wall",
															"fileName": "wall-2.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": "E3D9D1"
													}
												],
												"useTooltip": true
											},
											{
												"id": "OptionGroupModel_ssabfdfloor",
												"name": "floor",
												"displayName": "Floor",
												"description": "",
												"options": [
													{
														"id": "OptionEnvironmentModel_ssabfdnatural",
														"name": "natural",
														"displayName": "Natural",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Natural.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdnatural",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Natural.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdjacobean",
														"name": "jacobean",
														"displayName": "Jacobean",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Jacobean.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdjacobean",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Jacobean.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdsw",
														"name": "sw",
														"displayName": "Simply White",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Simply-White.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdsw",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Simply-White.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdwo",
														"name": "wo",
														"displayName": "White Oak",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-White-Oak.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdwo",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-White-Oak.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdtile",
														"name": "tile",
														"displayName": "Tile",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Tile.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdtile",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Tile.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													},
													{
														"id": "OptionEnvironmentModel_ssabfdmarble",
														"name": "marble",
														"displayName": "Marble",
														"description": "",
														"finish": "",
														"selected": false,
														"displayOptionGroupName": "",
														"thumb": {
															"id": "EnvironmentImageModel_ssabfdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor/thumb",
															"fileName": "Floor-Marble.jpg",
															"width": 150,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"detailImage": null,
														"image": {
															"id": "EnvironmentImageModel_ssabfdmarble",
															"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
															"basePath": "/images/environment/floor",
															"fileName": "Floor-Marble.png",
															"width": 1230,
															"useCdn": false,
															"aspectRatio": 1,
															"sizes": "(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"
														},
														"hex": ""
													}
												],
												"useTooltip": true
											}
										]
									}
								]
							}
						],
						"image": {
							"id": "ImageModel_folding-door.png",
							"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
							"basePath": "/images/product-illustrations",
							"fileName": "folding-door.png",
							"width": 350,
							"useCdn": false,
							"aspectRatio": 1.24955009
						},
						"animatedImage": {
							"id": "ImageModel_folding-door.gif",
							"cdnPath": "https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=",
							"basePath": "/images/product-illustrations",
							"fileName": "folding-door.gif",
							"width": 350,
							"useCdn": false,
							"aspectRatio": 1.24955009
						}
					}
				],
				"products": []
			}
		],
		"modals": {
			"modal-primary": {
				"id": "modal-primary",
				"name": "",
				"isOpen": false,
				"isClosing": false,
				"type": "MODAL",
				"title": "",
				"closeOnBackdropClick": false,
				"showCloseBtn": true,
				"showCloseBtnText": false,
				"showBackdrop": true
			},
			"modal-secondary": {
				"id": "modal-secondary",
				"name": "",
				"isOpen": false,
				"isClosing": false,
				"type": "MODAL",
				"title": "",
				"closeOnBackdropClick": false,
				"showCloseBtn": true,
				"showCloseBtnText": false,
				"showBackdrop": true
			},
			"modal-menu": {
				"id": "modal-menu",
				"name": "",
				"isOpen": false,
				"isClosing": false,
				"type": "MODAL",
				"title": "",
				"closeOnBackdropClick": false,
				"showCloseBtn": true,
				"showCloseBtnText": false,
				"showBackdrop": true
			}
		},
		"page": {
			"id": "ConfigPageModel_main",
			"product": "ProductModel_camsd",
			"currentOptionGroup": "OptionGroupModel_camsdcolor",
			"currentSelectionGroup": "SelectionGroupModel_colorcamsd",
			"className": "Page--config"
		},
		"isMediaQueryXl": true,
		"env": "STAGING"
	};
	const stubPdf = {
		"id":"AppModel_main","productCollections":[{"id":"ProductCollectionModel_sliding","name":"sliding","displayName":"Sliding","displayGroupName":"Sliding Door","description":"\n\t\t\tAlso called multi-slide or panoramic doors, our sliding doors feature large panels that slide open and stack\n\t\t\tor tuck away out of sight to connect the indoors with the outside. Panels can move in one direction or part\n\t\t\tin the center.\n\t\t","productGroups":[{"id":"ProductGroupModel_aluminum-sliding","name":"aluminum-sliding","displayName":"Aluminum","displayGroupName":"Aluminum Sliding Door","description":"\n\t\t\tUsed in contemporary living spaces, it can be finished in a variety of colors and does not require\n\t\t\tregular maintenance.\n\t\t","products":[{"id":"ProductModel_camsd","name":"camsd","displayName":"Classic Aluminum Sliding Door","description":"Smooth operation meets clean design.","features":["Low-E dual pane argon-filled glass for energy efficiency","Wide panels for more light and glass","Panels can move in one direction or part in the center","Panels can stack within the frame or conceal within a wall pocket","Stainless steel ball bearing rollers for easy operation","Concealed multi-point locking system","Contemporary hardware","After-market screening solution"],"illustrationAnimated":null,"illustrationStatic":null,"images":[{"id":"ProductImageModel_OptionColorModel_camsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdan","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdan","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdan","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdan","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbb","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbb","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbb","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbb","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbriar","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbriar","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbriar","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdbriar","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdba","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdba","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdba","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdba","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdct","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdct","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdct","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdct","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdhb","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdhb","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdhb","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdhb","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdnw","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdnw","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdnw","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdnw","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsa","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsa","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsa","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsa","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsb","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsb","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsb","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdsb","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwarmtone","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwarmtone","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwarmtone","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwarmtone","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwhite","handle":"OptionModel_camsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwhite","handle":"OptionModel_camsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwhite","handle":"OptionModel_camsdpb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_camsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_camsdwhite","handle":"OptionModel_camsdpbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"}],"inheritedFeatures":"","inheritedFeaturesLong":"","isActive":false,"selectionGroups":[{"id":"SelectionGroupModel_colorcamsd","name":"color","displayName":"Door Colors","displayNameSingular":"Door Color","description":"","optionGroups":[{"id":"OptionGroupModel_camsdcolor","name":"color","displayName":"Color","description":"","options":[{"id":"OptionColorModel_camsdba","name":"ba","displayName":"Bronze Anodized","description":"","finish":"","selected":true,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"424143"},{"id":"OptionColorModel_camsdsa","name":"sa","displayName":"Satin Anodized","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"D0D0CF"},{"id":"OptionColorModel_camsdwarmtone","name":"warmtone","displayName":"Warmtone","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"978C7B"},{"id":"OptionColorModel_camsdwhite","name":"white","displayName":"White","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"fff"},{"id":"OptionColorModel_camsdan","name":"an","displayName":"Autumn Night","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"9C674F"},{"id":"OptionColorModel_camsdbb","name":"bb","displayName":"Bison Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"8D806F"},{"id":"OptionColorModel_camsdbriar","name":"briar","displayName":"Briar","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"6B4C38"},{"id":"OptionColorModel_camsdct","name":"ct","displayName":"Cinnamon Toast","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"7B2022"},{"id":"OptionColorModel_camsdhb","name":"hb","displayName":"Hillside Bronze","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"3C2B13"},{"id":"OptionColorModel_camsdnw","name":"nw","displayName":"Navajo White","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"F5EDE0"},{"id":"OptionColorModel_camsdsb","name":"sb","displayName":"Stonish Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"B5A48B"}],"useTooltip":true}]},{"id":"SelectionGroupModel_floor-sillscamsd","name":"floor-sills","displayName":"Floor Sills","displayNameSingular":"Floor Sill","description":"","optionGroups":[{"id":"OptionGroupModel_camsdfloor-sills","name":"floor-sills","displayName":"Floor Sills","description":"","options":[{"id":"OptionModel_camsdwbs","name":"wbs","displayName":"Water Barrier Sill","description":"Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_camsdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Water-Barrier.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_camsdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Water-Barrier.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_camsdfs","name":"fs","displayName":"Flush Sill","description":"When ease of entry is more important than performance against the elements. Lines up with most interior flooring.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_camsdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Flush.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_camsdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Flush.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_camsdts","name":"ts","displayName":"Thinline Sill","description":"Ideal for projects where a continuation of flooring from the inside to the outdoors needs to appear virtually seamless.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_camsdts","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Thinline.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_camsdts","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Thinline.jpg","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_handlescamsd","name":"handles","displayName":"Handles","displayNameSingular":"Handle","description":"","optionGroups":[{"id":"OptionGroupModel_camsdhandles","name":"handles","displayName":"Handles","description":"","options":[{"id":"OptionModel_camsdfmbn","name":"fmbn","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_camsdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_camsdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_camsdfmb","name":"fmb","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_camsdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_camsdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-B.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_camsdpbn","name":"pbn","displayName":"Premium","description":"Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_camsdpbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Premium-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_camsdpbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Premium-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_camsdpb","name":"pb","displayName":"Premium","description":"Minimal one-piece design and a comfortable grip. In brushed nickel or black. Not available on pocketing multi-slide doors.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_camsdpb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Premium-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_camsdpb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Premium-B.png","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_environmentcamsd","name":"environment","displayName":"Environment","displayNameSingular":"","description":"","optionGroups":[{"id":"OptionGroupModel_camsdview","name":"view","displayName":"View","description":"","options":[{"id":"OptionEnvironmentModel_camsdcityscape","name":"cityscape","displayName":"Cityscape","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdcityscape","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Cityscape.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdcityscape","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Cityscape.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsddesert","name":"desert","displayName":"Desert","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsddesert","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Desert.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsddesert","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Desert.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdmv","name":"mv","displayName":"Mountain View","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdmv","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Mountain-View.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdmv","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Mountain-View.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdoceanside","name":"oceanside","displayName":"Oceanside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdoceanside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Oceanside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdoceanside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Oceanside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdpoolside","name":"poolside","displayName":"Poolside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdpoolside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Poolside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdpoolside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Poolside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdwt","name":"wt","displayName":"Wild Thing","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdwt","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Wild-Thing.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdwt","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Wild-Thing.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true},{"id":"OptionGroupModel_camsdwall","name":"wall","displayName":"Wall Color","description":"","options":[{"id":"OptionEnvironmentModel_camsdconch","name":"conch","displayName":"Conch","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdconch","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"Wall-Color-Horizon.jpg","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"F5EEE9"},{"id":"OptionEnvironmentModel_camsdpistachio","name":"pistachio","displayName":"Pistachio","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdpistachio","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E6EBE4"},{"id":"OptionEnvironmentModel_camsdiceberg","name":"iceberg","displayName":"Iceberg","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdiceberg","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E0E7E9"},{"id":"OptionEnvironmentModel_camsdpebble","name":"pebble","displayName":"Pebble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdpebble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"CFC4AA"},{"id":"OptionEnvironmentModel_camsdmeadow","name":"meadow","displayName":"Meadow","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdmeadow","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"BFC5B1"},{"id":"OptionEnvironmentModel_camsdhorizon","name":"horizon","displayName":"Horizon","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdhorizon","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1C3C8"},{"id":"OptionEnvironmentModel_camsdsmoke","name":"smoke","displayName":"Smoke","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdsmoke","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1B9B7"},{"id":"OptionEnvironmentModel_camsdjute","name":"jute","displayName":"Jute","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdjute","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E3D9D1"}],"useTooltip":true},{"id":"OptionGroupModel_camsdfloor","name":"floor","displayName":"Floor","description":"","options":[{"id":"OptionEnvironmentModel_camsdnatural","name":"natural","displayName":"Natural","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Natural.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Natural.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdjacobean","name":"jacobean","displayName":"Jacobean","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Jacobean.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Jacobean.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdsw","name":"sw","displayName":"Simply White","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Simply-White.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Simply-White.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdwo","name":"wo","displayName":"White Oak","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-White-Oak.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-White-Oak.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdtile","name":"tile","displayName":"Tile","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Tile.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Tile.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_camsdmarble","name":"marble","displayName":"Marble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_camsdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Marble.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_camsdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Marble.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true}]}]},{"id":"ProductModel_pamsd","name":"pamsd","displayName":"Performance Aluminum Sliding Door","description":"Energy effeciency and strength.","features":["Available in bigger and taller sizes","Design pressure (DP) rating of 50 for durability","Compliant with California’s rigorous Title 24 requirements"],"illustrationAnimated":null,"illustrationStatic":null,"images":[{"id":"ProductImageModel_OptionColorModel_pamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdan","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdan","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdan","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdan","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-autumn-night-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbb","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbb","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbb","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbb","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bison-beige-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbriar","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbriar","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbriar","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbriar","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-briar-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdba","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdba","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdba","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdba","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-bronze-anodized-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdct","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdct","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdct","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdct","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-cinnamon-toast-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdhb","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdhb","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdhb","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdhb","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-hillside-bronze-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdnw","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdnw","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdnw","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdnw","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-navajo-white-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsa","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsa","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsa","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsa","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-satin-anodized-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsb","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsb","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsb","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsb","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-stonish-beige-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwarmtone","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwarmtone","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwarmtone","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwarmtone","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-warmtone-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-contemporary-black-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwhite","handle":"OptionModel_pamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-contemporary-brushed-nickel-non-pocketing-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwhite","handle":"OptionModel_pamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwhite","handle":"OptionModel_pamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwhite","handle":"OptionModel_pamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-premium-black-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/classic-performance","fileName":"7600-aluminum-white-premium-brushed-nickel-non-pocketing-classic.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pamsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"}],"inheritedFeatures":"Everything in Classic, PLUS","inheritedFeaturesLong":"Including everything from our CLASSIC models and more.","isActive":false,"selectionGroups":[{"id":"SelectionGroupModel_colorpamsd","name":"color","displayName":"Door Colors","displayNameSingular":"Door Color","description":"","optionGroups":[{"id":"OptionGroupModel_pamsdcolor","name":"color","displayName":"Color","description":"","options":[{"id":"OptionColorModel_pamsdba","name":"ba","displayName":"Bronze Anodized","description":"","finish":"","selected":true,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"424143"},{"id":"OptionColorModel_pamsdsa","name":"sa","displayName":"Satin Anodized","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"D0D0CF"},{"id":"OptionColorModel_pamsdwarmtone","name":"warmtone","displayName":"Warmtone","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"978C7B"},{"id":"OptionColorModel_pamsdwhite","name":"white","displayName":"White","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"fff"},{"id":"OptionColorModel_pamsdan","name":"an","displayName":"Autumn Night","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"9C674F"},{"id":"OptionColorModel_pamsdbb","name":"bb","displayName":"Bison Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"8D806F"},{"id":"OptionColorModel_pamsdbriar","name":"briar","displayName":"Briar","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"6B4C38"},{"id":"OptionColorModel_pamsdct","name":"ct","displayName":"Cinnamon Toast","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"7B2022"},{"id":"OptionColorModel_pamsdhb","name":"hb","displayName":"Hillside Bronze","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"3C2B13"},{"id":"OptionColorModel_pamsdnw","name":"nw","displayName":"Navajo White","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"F5EDE0"},{"id":"OptionColorModel_pamsdsb","name":"sb","displayName":"Stonish Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"B5A48B"}],"useTooltip":true}]},{"id":"SelectionGroupModel_floor-sillspamsd","name":"floor-sills","displayName":"Floor Sills","displayNameSingular":"Floor Sill","description":"","optionGroups":[{"id":"OptionGroupModel_pamsdfloor-sills","name":"floor-sills","displayName":"Floor Sills","description":"","options":[{"id":"OptionModel_pamsdwbs","name":"wbs","displayName":"Water Barrier Sill","description":"Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pamsdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Water-Barrier.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pamsdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Water-Barrier.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_pamsdfs","name":"fs","displayName":"Flush Sill","description":"When ease of entry is more important than performance against the elements. Lines up with most interior flooring.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pamsdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Flush.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pamsdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Flush.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_pamsdts","name":"ts","displayName":"Thinline Sill","description":"Ideal for projects where a continuation of flooring from the inside to the outdoors needs to appear virtually seamless.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pamsdts","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Thinline.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pamsdts","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Thinline.jpg","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_handlespamsd","name":"handles","displayName":"Handles","displayNameSingular":"Handle","description":"","optionGroups":[{"id":"OptionGroupModel_pamsdhandles","name":"handles","displayName":"Handles","description":"","options":[{"id":"OptionModel_pamsdfmbn","name":"fmbn","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pamsdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pamsdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_pamsdfmb","name":"fmb","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pamsdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pamsdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-B.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_pamsdcbn","name":"cbn","displayName":"Contemporary","description":"Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pamsdcbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Contemporary-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pamsdcbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Contemporary-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_pamsdcb","name":"cb","displayName":"Contemporary","description":"Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pamsdcb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Contemporary-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pamsdcb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Contemporary-B.png","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_environmentpamsd","name":"environment","displayName":"Environment","displayNameSingular":"","description":"","optionGroups":[{"id":"OptionGroupModel_pamsdview","name":"view","displayName":"View","description":"","options":[{"id":"OptionEnvironmentModel_pamsdcityscape","name":"cityscape","displayName":"Cityscape","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdcityscape","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Cityscape.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdcityscape","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Cityscape.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsddesert","name":"desert","displayName":"Desert","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsddesert","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Desert.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsddesert","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Desert.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdmv","name":"mv","displayName":"Mountain View","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdmv","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Mountain-View.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdmv","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Mountain-View.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdoceanside","name":"oceanside","displayName":"Oceanside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdoceanside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Oceanside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdoceanside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Oceanside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdpoolside","name":"poolside","displayName":"Poolside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdpoolside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Poolside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdpoolside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Poolside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdwt","name":"wt","displayName":"Wild Thing","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdwt","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Wild-Thing.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdwt","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Wild-Thing.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true},{"id":"OptionGroupModel_pamsdwall","name":"wall","displayName":"Wall Color","description":"","options":[{"id":"OptionEnvironmentModel_pamsdconch","name":"conch","displayName":"Conch","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdconch","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"Wall-Color-Horizon.jpg","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"F5EEE9"},{"id":"OptionEnvironmentModel_pamsdpistachio","name":"pistachio","displayName":"Pistachio","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdpistachio","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E6EBE4"},{"id":"OptionEnvironmentModel_pamsdiceberg","name":"iceberg","displayName":"Iceberg","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdiceberg","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E0E7E9"},{"id":"OptionEnvironmentModel_pamsdpebble","name":"pebble","displayName":"Pebble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdpebble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"CFC4AA"},{"id":"OptionEnvironmentModel_pamsdmeadow","name":"meadow","displayName":"Meadow","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdmeadow","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"BFC5B1"},{"id":"OptionEnvironmentModel_pamsdhorizon","name":"horizon","displayName":"Horizon","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdhorizon","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1C3C8"},{"id":"OptionEnvironmentModel_pamsdsmoke","name":"smoke","displayName":"Smoke","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdsmoke","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1B9B7"},{"id":"OptionEnvironmentModel_pamsdjute","name":"jute","displayName":"Jute","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdjute","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E3D9D1"}],"useTooltip":true},{"id":"OptionGroupModel_pamsdfloor","name":"floor","displayName":"Floor","description":"","options":[{"id":"OptionEnvironmentModel_pamsdnatural","name":"natural","displayName":"Natural","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Natural.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Natural.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdjacobean","name":"jacobean","displayName":"Jacobean","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Jacobean.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Jacobean.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdsw","name":"sw","displayName":"Simply White","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Simply-White.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Simply-White.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdwo","name":"wo","displayName":"White Oak","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-White-Oak.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-White-Oak.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdtile","name":"tile","displayName":"Tile","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Tile.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Tile.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pamsdmarble","name":"marble","displayName":"Marble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pamsdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Marble.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pamsdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Marble.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true}]}]},{"id":"ProductModel_ssamsd","name":"ssamsd","displayName":"Simulated Steel Aluminum Sliding Door","description":"The look of steel but more affordable.","features":["Beveled glass stops","Simulated divided lights to emulate a putty glaze"],"illustrationAnimated":{"id":"ImageModel_ssamsd","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"ss-sliding-door.gif","width":350,"useCdn":false,"aspectRatio":1.24955009},"illustrationStatic":{"id":"ImageModel_ss-sliding-door.png","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"ss-sliding-door.png","width":350,"useCdn":false,"aspectRatio":1.24955009},"images":[{"id":"ProductImageModel_OptionColorModel_ssamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-autumn-night-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-autumn-night-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdan","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-autumn-night-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdan","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-autumn-night-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdan","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-autumn-night-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdan","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-autumn-night-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-autumn-night-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bison-beige-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bison-beige-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbb","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bison-beige-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbb","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bison-beige-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbb","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bison-beige-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbb","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bison-beige-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bison-beige-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-briar-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-briar-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbriar","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-briar-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbriar","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-briar-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbriar","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-briar-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbriar","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-briar-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-briar-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bronze-anodized-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bronze-anodized-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdba","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bronze-anodized-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdba","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bronze-anodized-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdba","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bronze-anodized-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdba","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bronze-anodized-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-bronze-anodized-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-cinnamon-toast-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-cinnamon-toast-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdct","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-cinnamon-toast-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdct","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-cinnamon-toast-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdct","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdct","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-cinnamon-toast-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-cinnamon-toast-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-hillside-bronze-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-hillside-bronze-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdhb","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-hillside-bronze-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdhb","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-hillside-bronze-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdhb","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-hillside-bronze-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdhb","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-hillside-bronze-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-hillside-bronze-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-navajo-white-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-navajo-white-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdnw","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-navajo-white-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdnw","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-navajo-white-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdnw","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-navajo-white-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdnw","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-navajo-white-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-navajo-white-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-satin-anodized-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-satin-anodized-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsa","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-satin-anodized-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsa","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-satin-anodized-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsa","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-satin-anodized-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsa","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-satin-anodized-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-satin-anodized-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-stonish-beige-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-stonish-beige-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsb","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-stonish-beige-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsb","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-stonish-beige-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsb","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-stonish-beige-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsb","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-stonish-beige-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-stonish-beige-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-warmtone-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-warmtone-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwarmtone","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-warmtone-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwarmtone","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-warmtone-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwarmtone","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-warmtone-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwarmtone","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-warmtone-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-warmtone-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-white-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-white-contemporary-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwhite","handle":"OptionModel_ssamsdcb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-white-contemporary-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwhite","handle":"OptionModel_ssamsdcbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-white-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwhite","handle":"OptionModel_ssamsdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-white-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwhite","handle":"OptionModel_ssamsdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-white-premium-black-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssamsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/sliding/aluminum/simulated-steel","fileName":"7600-aluminum-white-premium-brushed-nickel-non-pocketing-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssamsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"}],"inheritedFeatures":"Everything in Classic and Peformance, PLUS","inheritedFeaturesLong":"Including everything from our PERFORMANCE and CLASSIC models and more.","isActive":false,"selectionGroups":[{"id":"SelectionGroupModel_colorssamsd","name":"color","displayName":"Door Colors","displayNameSingular":"Door Color","description":"","optionGroups":[{"id":"OptionGroupModel_ssamsdcolor","name":"color","displayName":"Color","description":"","options":[{"id":"OptionColorModel_ssamsdba","name":"ba","displayName":"Bronze Anodized","description":"","finish":"","selected":true,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"424143"},{"id":"OptionColorModel_ssamsdsa","name":"sa","displayName":"Satin Anodized","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"D0D0CF"},{"id":"OptionColorModel_ssamsdwarmtone","name":"warmtone","displayName":"Warmtone","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"978C7B"},{"id":"OptionColorModel_ssamsdwhite","name":"white","displayName":"White","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"fff"},{"id":"OptionColorModel_ssamsdan","name":"an","displayName":"Autumn Night","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"9C674F"},{"id":"OptionColorModel_ssamsdbb","name":"bb","displayName":"Bison Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"8D806F"},{"id":"OptionColorModel_ssamsdbriar","name":"briar","displayName":"Briar","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"6B4C38"},{"id":"OptionColorModel_ssamsdct","name":"ct","displayName":"Cinnamon Toast","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"7B2022"},{"id":"OptionColorModel_ssamsdhb","name":"hb","displayName":"Hillside Bronze","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"3C2B13"},{"id":"OptionColorModel_ssamsdnw","name":"nw","displayName":"Navajo White","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"F5EDE0"},{"id":"OptionColorModel_ssamsdsb","name":"sb","displayName":"Stonish Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"B5A48B"}],"useTooltip":true}]},{"id":"SelectionGroupModel_floor-sillsssamsd","name":"floor-sills","displayName":"Floor Sills","displayNameSingular":"Floor Sill","description":"","optionGroups":[{"id":"OptionGroupModel_ssamsdfloor-sills","name":"floor-sills","displayName":"Floor Sills","description":"","options":[{"id":"OptionModel_ssamsdwbs","name":"wbs","displayName":"Water Barrier Sill","description":"Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssamsdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Water-Barrier.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssamsdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Water-Barrier.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_ssamsdfs","name":"fs","displayName":"Flush Sill","description":"When ease of entry is more important than performance against the elements. Lines up with most interior flooring.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssamsdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Flush.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssamsdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Flush.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_ssamsdts","name":"ts","displayName":"Thinline Sill","description":"Ideal for projects where a continuation of flooring from the inside to the outdoors needs to appear virtually seamless.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssamsdts","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Thinline.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssamsdts","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Thinline.jpg","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_handlesssamsd","name":"handles","displayName":"Handles","displayNameSingular":"Handle","description":"","optionGroups":[{"id":"OptionGroupModel_ssamsdhandles","name":"handles","displayName":"Handles","description":"","options":[{"id":"OptionModel_ssamsdfmbn","name":"fmbn","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssamsdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssamsdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_ssamsdfmb","name":"fmb","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssamsdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssamsdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-B.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_ssamsdcbn","name":"cbn","displayName":"Contemporary","description":"Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssamsdcbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Contemporary-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssamsdcbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Contemporary-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_ssamsdcb","name":"cb","displayName":"Contemporary","description":"Easy-grip modern design. In brushed nickel or black. Not available on pocketing multi-slide doors.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssamsdcb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Contemporary-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssamsdcb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Contemporary-B.png","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_environmentssamsd","name":"environment","displayName":"Environment","displayNameSingular":"","description":"","optionGroups":[{"id":"OptionGroupModel_ssamsdview","name":"view","displayName":"View","description":"","options":[{"id":"OptionEnvironmentModel_ssamsdcityscape","name":"cityscape","displayName":"Cityscape","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdcityscape","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Cityscape.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdcityscape","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Cityscape.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsddesert","name":"desert","displayName":"Desert","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsddesert","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Desert.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsddesert","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Desert.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdmv","name":"mv","displayName":"Mountain View","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdmv","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Mountain-View.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdmv","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Mountain-View.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdoceanside","name":"oceanside","displayName":"Oceanside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdoceanside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Oceanside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdoceanside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Oceanside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdpoolside","name":"poolside","displayName":"Poolside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdpoolside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Poolside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdpoolside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Poolside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdwt","name":"wt","displayName":"Wild Thing","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdwt","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Wild-Thing.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdwt","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Wild-Thing.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true},{"id":"OptionGroupModel_ssamsdwall","name":"wall","displayName":"Wall Color","description":"","options":[{"id":"OptionEnvironmentModel_ssamsdconch","name":"conch","displayName":"Conch","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdconch","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"Wall-Color-Horizon.jpg","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"F5EEE9"},{"id":"OptionEnvironmentModel_ssamsdpistachio","name":"pistachio","displayName":"Pistachio","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdpistachio","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E6EBE4"},{"id":"OptionEnvironmentModel_ssamsdiceberg","name":"iceberg","displayName":"Iceberg","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdiceberg","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E0E7E9"},{"id":"OptionEnvironmentModel_ssamsdpebble","name":"pebble","displayName":"Pebble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdpebble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"CFC4AA"},{"id":"OptionEnvironmentModel_ssamsdmeadow","name":"meadow","displayName":"Meadow","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdmeadow","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"BFC5B1"},{"id":"OptionEnvironmentModel_ssamsdhorizon","name":"horizon","displayName":"Horizon","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdhorizon","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1C3C8"},{"id":"OptionEnvironmentModel_ssamsdsmoke","name":"smoke","displayName":"Smoke","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdsmoke","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1B9B7"},{"id":"OptionEnvironmentModel_ssamsdjute","name":"jute","displayName":"Jute","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdjute","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E3D9D1"}],"useTooltip":true},{"id":"OptionGroupModel_ssamsdfloor","name":"floor","displayName":"Floor","description":"","options":[{"id":"OptionEnvironmentModel_ssamsdnatural","name":"natural","displayName":"Natural","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Natural.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Natural.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdjacobean","name":"jacobean","displayName":"Jacobean","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Jacobean.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Jacobean.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdsw","name":"sw","displayName":"Simply White","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Simply-White.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Simply-White.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdwo","name":"wo","displayName":"White Oak","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-White-Oak.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-White-Oak.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdtile","name":"tile","displayName":"Tile","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Tile.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Tile.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssamsdmarble","name":"marble","displayName":"Marble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssamsdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Marble.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssamsdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Marble.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true}]}]}],"image":{"id":"ImageModel_sliding-door.png","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"sliding-door.png","width":350,"useCdn":false,"aspectRatio":1.24955009},"animatedImage":{"id":"ImageModel_sliding-door.gif","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"sliding-door.gif","width":350,"useCdn":false,"aspectRatio":1.24955009}},{"id":"ProductGroupModel_vinyl-sliding","name":"vinyl-sliding","displayName":"Vinyl","displayGroupName":"Vinyl Sliding Door","description":"\n\t\t\tThe most economical solution to transform your home, it stands up to the elements and is\n\t\t\tnearly maintenance-free.\n\t\t","products":[{"id":"ProductModel_vmsd","name":"vmsd","displayName":"Vinyl Sliding Door","description":"\n\t\t\tThe most economical solution to transform your home, it stands up to the elements and is\n\t\t\tnearly maintenance-free.\n\t\t","features":["Low-E dual pane argon-filled glass for energy efficiency","Wide panels allow for more light and bigger views","A built-in self-drainage weep system to help safeguard against water intrusion","Color-matched hardware","Concealed locking system","Flush-mounted handle so panels easily slide past each other","After-market screening solution"],"illustrationAnimated":null,"illustrationStatic":null,"images":[{"id":"ProductImageModel_OptionColorModel_vmsdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-bronze-ano.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-satin-ano.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-warmtone.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-white.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-white.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-white.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-white.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-white.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-white.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-white.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_vmsdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product","fileName":"7600-2xo-white.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_vmsdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"}],"inheritedFeatures":"","inheritedFeaturesLong":"","isActive":false,"selectionGroups":[{"id":"SelectionGroupModel_colorvmsd","name":"color","displayName":"Door Colors","displayNameSingular":"Door Color","description":"","optionGroups":[{"id":"OptionGroupModel_vmsdcolor","name":"color","displayName":"Color","description":"","options":[{"id":"OptionColorModel_vmsdba","name":"ba","displayName":"Bronze Anodized","description":"","finish":"","selected":true,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"424143"},{"id":"OptionColorModel_vmsdsa","name":"sa","displayName":"Satin Anodized","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"D0D0CF"},{"id":"OptionColorModel_vmsdwarmtone","name":"warmtone","displayName":"Warmtone","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"978C7B"},{"id":"OptionColorModel_vmsdwhite","name":"white","displayName":"White","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"fff"},{"id":"OptionColorModel_vmsdan","name":"an","displayName":"Autumn Night","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"9C674F"},{"id":"OptionColorModel_vmsdbb","name":"bb","displayName":"Bison Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"8D806F"},{"id":"OptionColorModel_vmsdbriar","name":"briar","displayName":"Briar","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"6B4C38"},{"id":"OptionColorModel_vmsdct","name":"ct","displayName":"Cinnamon Toast","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"7B2022"},{"id":"OptionColorModel_vmsdhb","name":"hb","displayName":"Hillside Bronze","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"3C2B13"},{"id":"OptionColorModel_vmsdnw","name":"nw","displayName":"Navajo White","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"F5EDE0"},{"id":"OptionColorModel_vmsdsb","name":"sb","displayName":"Stonish Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"B5A48B"}],"useTooltip":true}]},{"id":"SelectionGroupModel_handlesvmsd","name":"handles","displayName":"Handles","displayNameSingular":"Handle","description":"","optionGroups":[{"id":"OptionGroupModel_vmsdhandles","name":"handles","displayName":"Handles","description":"","options":[{"id":"OptionModel_vmsdfmb","name":"fmb","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_vmsdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_vmsdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-B.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_vmsdcpa","name":"cpa","displayName":"C-Pull","description":"For a consistent look, this standard handle matches the color of the door frame.","finish":"Almond","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_vmsdcpa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Contemporary-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_vmsdcpa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Contemporary-B.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_vmsdcpb","name":"cpb","displayName":"C-Pull","description":"For a consistent look, this standard handle matches the color of the door frame.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_vmsdcpb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Contemporary-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_vmsdcpb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Contemporary-B.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_vmsdcpw","name":"cpw","displayName":"C-Pull","description":"For a consistent look, this standard handle matches the color of the door frame.","finish":"White","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_vmsdcpw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Contemporary-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_vmsdcpw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Contemporary-B.png","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_environmentvmsd","name":"environment","displayName":"Environment","displayNameSingular":"","description":"","optionGroups":[{"id":"OptionGroupModel_vmsdview","name":"view","displayName":"View","description":"","options":[{"id":"OptionEnvironmentModel_vmsdcityscape","name":"cityscape","displayName":"Cityscape","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdcityscape","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Cityscape.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdcityscape","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Cityscape.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsddesert","name":"desert","displayName":"Desert","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsddesert","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Desert.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsddesert","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Desert.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdmv","name":"mv","displayName":"Mountain View","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdmv","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Mountain-View.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdmv","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Mountain-View.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdoceanside","name":"oceanside","displayName":"Oceanside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdoceanside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Oceanside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdoceanside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Oceanside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdpoolside","name":"poolside","displayName":"Poolside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdpoolside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Poolside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdpoolside","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Poolside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdwt","name":"wt","displayName":"Wild Thing","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdwt","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Wild-Thing.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdwt","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Sliding-Wild-Thing.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true},{"id":"OptionGroupModel_vmsdwall","name":"wall","displayName":"Wall Color","description":"","options":[{"id":"OptionEnvironmentModel_vmsdconch","name":"conch","displayName":"Conch","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdconch","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"Wall-Color-Horizon.jpg","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"F5EEE9"},{"id":"OptionEnvironmentModel_vmsdpistachio","name":"pistachio","displayName":"Pistachio","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdpistachio","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E6EBE4"},{"id":"OptionEnvironmentModel_vmsdiceberg","name":"iceberg","displayName":"Iceberg","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdiceberg","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E0E7E9"},{"id":"OptionEnvironmentModel_vmsdpebble","name":"pebble","displayName":"Pebble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdpebble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"CFC4AA"},{"id":"OptionEnvironmentModel_vmsdmeadow","name":"meadow","displayName":"Meadow","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdmeadow","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"BFC5B1"},{"id":"OptionEnvironmentModel_vmsdhorizon","name":"horizon","displayName":"Horizon","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdhorizon","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1C3C8"},{"id":"OptionEnvironmentModel_vmsdsmoke","name":"smoke","displayName":"Smoke","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdsmoke","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1B9B7"},{"id":"OptionEnvironmentModel_vmsdjute","name":"jute","displayName":"Jute","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdjute","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E3D9D1"}],"useTooltip":true},{"id":"OptionGroupModel_vmsdfloor","name":"floor","displayName":"Floor","description":"","options":[{"id":"OptionEnvironmentModel_vmsdnatural","name":"natural","displayName":"Natural","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Natural.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Natural.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdjacobean","name":"jacobean","displayName":"Jacobean","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Jacobean.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Jacobean.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdsw","name":"sw","displayName":"Simply White","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Simply-White.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Simply-White.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdwo","name":"wo","displayName":"White Oak","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-White-Oak.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-White-Oak.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdtile","name":"tile","displayName":"Tile","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Tile.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Tile.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_vmsdmarble","name":"marble","displayName":"Marble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_vmsdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Marble.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_vmsdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Marble.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true}]}]}],"image":{"id":"ImageModel_ss-sliding-door.png","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"ss-sliding-door.png","width":350,"useCdn":false,"aspectRatio":1.24955009},"animatedImage":{"id":"ImageModel_ss-sliding-door.gif","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"ss-sliding-door.gif","width":350,"useCdn":false,"aspectRatio":1.24955009}}],"products":[]},{"id":"ProductCollectionModel_folding","name":"folding","displayName":"Folding","displayGroupName":"Aluminum Bi-Fold Door","description":"\n\t\t\tSometimes referred to as bi-fold or accordion doors, our folding doors slide open and feature panels that\n\t\t\tfold up against a wall for a true indoor-outdoor experience. Available with a swinging access door for\n\t\t\teveryday operation.\n\t\t","productGroups":[{"id":"ProductGroupModel_aluminum-folding","name":"aluminum-folding","displayName":"Aluminum","displayGroupName":"Aluminum Folding Door","description":"\n\t\t\tCombining clean modern design with durability and flexibility, it’s available in a variety of finishes.\n\t\t","products":[{"id":"ProductModel_cabfd","name":"cabfd","displayName":"Classic Aluminum Folding Door","description":"Smooth operation meets clean design.","features":["Low-E dual pane argon-filled glass for energy efficiency","Narrow shardwood for additional glass and light","Stainless steel ball bearing rollers for smooth operation","Concealed multi-point lock for additional protection","Contemporary hardware for a sleek aesthetic","Optional single swinging access door for everyday use"],"illustrationAnimated":null,"illustrationStatic":null,"images":[{"id":"ProductImageModel_OptionColorModel_cabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-autumn-night-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-autumn-night-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdan","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdan","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bison-beige-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bison-beige-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdbb","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdbb","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-briar-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-briar-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdbriar","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdbriar","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bronze-anodized-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdba","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdba","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-cinnamon-toast-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdct","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdct","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-hillside-bronze-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-hillside-bronze-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdhb","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-hillside-bronze-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdhb","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-navajo-white-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-navajo-white-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdnw","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-navajo-white-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdnw","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-satin-anodized-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-satin-anodized-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdsa","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-satin-anodized-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdsa","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-stonish-beige-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-stonish-beige-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdsb","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-stonish-beige-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdsb","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-warmtone-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-warmtone-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdwarmtone","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-warmtone-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdwarmtone","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-white-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-white-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdwhite","handle":"OptionModel_cabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_cabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-white-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_cabfdwhite","handle":"OptionModel_cabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"}],"inheritedFeatures":"","inheritedFeaturesLong":"","isActive":false,"selectionGroups":[{"id":"SelectionGroupModel_colorcabfd","name":"color","displayName":"Door Colors","displayNameSingular":"Door Color","description":"","optionGroups":[{"id":"OptionGroupModel_cabfdcolor","name":"color","displayName":"Color","description":"","options":[{"id":"OptionColorModel_cabfdba","name":"ba","displayName":"Bronze Anodized","description":"","finish":"","selected":true,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"424143"},{"id":"OptionColorModel_cabfdsa","name":"sa","displayName":"Satin Anodized","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"D0D0CF"},{"id":"OptionColorModel_cabfdwarmtone","name":"warmtone","displayName":"Warmtone","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"978C7B"},{"id":"OptionColorModel_cabfdwhite","name":"white","displayName":"White","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"fff"},{"id":"OptionColorModel_cabfdan","name":"an","displayName":"Autumn Night","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"9C674F"},{"id":"OptionColorModel_cabfdbb","name":"bb","displayName":"Bison Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"8D806F"},{"id":"OptionColorModel_cabfdbriar","name":"briar","displayName":"Briar","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"6B4C38"},{"id":"OptionColorModel_cabfdct","name":"ct","displayName":"Cinnamon Toast","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"7B2022"},{"id":"OptionColorModel_cabfdhb","name":"hb","displayName":"Hillside Bronze","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"3C2B13"},{"id":"OptionColorModel_cabfdnw","name":"nw","displayName":"Navajo White","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"F5EDE0"},{"id":"OptionColorModel_cabfdsb","name":"sb","displayName":"Stonish Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"B5A48B"}],"useTooltip":true}]},{"id":"SelectionGroupModel_floor-sillscabfd","name":"floor-sills","displayName":"Floor Sills","displayNameSingular":"Floor Sill","description":"","optionGroups":[{"id":"OptionGroupModel_cabfdfloor-sills","name":"floor-sills","displayName":"Floor Sills","description":"","options":[{"id":"OptionModel_cabfdwbs","name":"wbs","displayName":"Water Barrier Sill","description":"Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_cabfdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Water-Barrier.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_cabfdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Water-Barrier.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_cabfdfs","name":"fs","displayName":"Flush Sill","description":"When ease of entry is more important than performance against the elements. Lines up with most interior flooring.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_cabfdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Flush.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_cabfdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Flush.jpg","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_handlescabfd","name":"handles","displayName":"Handles","displayNameSingular":"Handle","description":"","optionGroups":[{"id":"OptionGroupModel_cabfdhandles","name":"handles","displayName":"Handles","description":"","options":[{"id":"OptionModel_cabfdfmbn","name":"fmbn","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_cabfdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_cabfdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_cabfdfmb","name":"fmb","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_cabfdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_cabfdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-B.png","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_environmentcabfd","name":"environment","displayName":"Environment","displayNameSingular":"","description":"","optionGroups":[{"id":"OptionGroupModel_cabfdview","name":"view","displayName":"View","description":"","options":[{"id":"OptionEnvironmentModel_cabfdcityscape-wide","name":"cityscape-wide","displayName":"Cityscape","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdcityscape-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Cityscape.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdcityscape-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Cityscape.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfddesert-wide","name":"desert-wide","displayName":"Desert","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfddesert-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Desert.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfddesert-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Desert.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdmv-wide","name":"mv-wide","displayName":"Mountain View","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdmv-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Mountain-View.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdmv-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Mountain-View.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdoceanside-wide","name":"oceanside-wide","displayName":"Oceanside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdoceanside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Oceanside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdoceanside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Oceanside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdpoolside-wide","name":"poolside-wide","displayName":"Poolside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdpoolside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Poolside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdpoolside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Poolside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdwt-wide","name":"wt-wide","displayName":"Wild Thing","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdwt-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Wild-Thing.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdwt-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Wild-Thing.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true},{"id":"OptionGroupModel_cabfdwall","name":"wall","displayName":"Wall Color","description":"","options":[{"id":"OptionEnvironmentModel_cabfdconch","name":"conch","displayName":"Conch","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdconch","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"Wall-Color-Horizon.jpg","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"F5EEE9"},{"id":"OptionEnvironmentModel_cabfdpistachio","name":"pistachio","displayName":"Pistachio","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdpistachio","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E6EBE4"},{"id":"OptionEnvironmentModel_cabfdiceberg","name":"iceberg","displayName":"Iceberg","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdiceberg","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E0E7E9"},{"id":"OptionEnvironmentModel_cabfdpebble","name":"pebble","displayName":"Pebble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdpebble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"CFC4AA"},{"id":"OptionEnvironmentModel_cabfdmeadow","name":"meadow","displayName":"Meadow","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdmeadow","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"BFC5B1"},{"id":"OptionEnvironmentModel_cabfdhorizon","name":"horizon","displayName":"Horizon","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdhorizon","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1C3C8"},{"id":"OptionEnvironmentModel_cabfdsmoke","name":"smoke","displayName":"Smoke","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdsmoke","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1B9B7"},{"id":"OptionEnvironmentModel_cabfdjute","name":"jute","displayName":"Jute","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdjute","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E3D9D1"}],"useTooltip":true},{"id":"OptionGroupModel_cabfdfloor","name":"floor","displayName":"Floor","description":"","options":[{"id":"OptionEnvironmentModel_cabfdnatural","name":"natural","displayName":"Natural","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Natural.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Natural.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdjacobean","name":"jacobean","displayName":"Jacobean","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Jacobean.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Jacobean.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdsw","name":"sw","displayName":"Simply White","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Simply-White.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Simply-White.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdwo","name":"wo","displayName":"White Oak","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-White-Oak.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-White-Oak.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdtile","name":"tile","displayName":"Tile","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Tile.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Tile.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_cabfdmarble","name":"marble","displayName":"Marble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_cabfdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Marble.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_cabfdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Marble.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true}]}]},{"id":"ProductModel_pabfd","name":"pabfd","displayName":"Performance Aluminum Folding Door","description":"Energy efficiency and strength","features":["Available in bigger and taller sizes","Design pressure (DP) rating of 50 for durability","Compliant with California’s rigorous Title 24 requirements"],"illustrationAnimated":null,"illustrationStatic":null,"images":[{"id":"ProductImageModel_OptionColorModel_pabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-autumn-night-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-autumn-night-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdan","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-autumn-night-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdan","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bison-beige-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bison-beige-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdbb","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bison-beige-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdbb","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-briar-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-briar-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdbriar","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-briar-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdbriar","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bronze-anodized-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bronze-anodized-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdba","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-bronze-anodized-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdba","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-cinnamon-toast-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-cinnamon-toast-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdct","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdct","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-hillside-bronze-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-hillside-bronze-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdhb","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-hillside-bronze-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdhb","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-navajo-white-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-navajo-white-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdnw","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-navajo-white-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdnw","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-satin-anodized-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-satin-anodized-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdsa","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-satin-anodized-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdsa","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-stonish-beige-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-stonish-beige-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdsb","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-stonish-beige-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdsb","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-warmtone-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-warmtone-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdwarmtone","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-warmtone-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdwarmtone","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-white-no-handle-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-white-flush-mounted-black-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdwhite","handle":"OptionModel_pabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_pabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/classic-performance","fileName":"7950-aluminum-white-flush-mounted-brushed-nickel-classic-performance.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_pabfdwhite","handle":"OptionModel_pabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"}],"inheritedFeatures":"Everything in Classic","inheritedFeaturesLong":"Including everything from our CLASSIC models and more.","isActive":false,"selectionGroups":[{"id":"SelectionGroupModel_colorpabfd","name":"color","displayName":"Door Colors","displayNameSingular":"Door Color","description":"","optionGroups":[{"id":"OptionGroupModel_pabfdcolor","name":"color","displayName":"Color","description":"","options":[{"id":"OptionColorModel_pabfdba","name":"ba","displayName":"Bronze Anodized","description":"","finish":"","selected":true,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"424143"},{"id":"OptionColorModel_pabfdsa","name":"sa","displayName":"Satin Anodized","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"D0D0CF"},{"id":"OptionColorModel_pabfdwarmtone","name":"warmtone","displayName":"Warmtone","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"978C7B"},{"id":"OptionColorModel_pabfdwhite","name":"white","displayName":"White","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"fff"},{"id":"OptionColorModel_pabfdan","name":"an","displayName":"Autumn Night","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"9C674F"},{"id":"OptionColorModel_pabfdbb","name":"bb","displayName":"Bison Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"8D806F"},{"id":"OptionColorModel_pabfdbriar","name":"briar","displayName":"Briar","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"6B4C38"},{"id":"OptionColorModel_pabfdct","name":"ct","displayName":"Cinnamon Toast","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"7B2022"},{"id":"OptionColorModel_pabfdhb","name":"hb","displayName":"Hillside Bronze","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"3C2B13"},{"id":"OptionColorModel_pabfdnw","name":"nw","displayName":"Navajo White","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"F5EDE0"},{"id":"OptionColorModel_pabfdsb","name":"sb","displayName":"Stonish Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"B5A48B"}],"useTooltip":true}]},{"id":"SelectionGroupModel_floor-sillspabfd","name":"floor-sills","displayName":"Floor Sills","displayNameSingular":"Floor Sill","description":"","optionGroups":[{"id":"OptionGroupModel_pabfdfloor-sills","name":"floor-sills","displayName":"Floor Sills","description":"","options":[{"id":"OptionModel_pabfdwbs","name":"wbs","displayName":"Water Barrier Sill","description":"Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pabfdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Water-Barrier.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pabfdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Water-Barrier.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_pabfdfs","name":"fs","displayName":"Flush Sill","description":"When ease of entry is more important than performance against the elements. Lines up with most interior flooring.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pabfdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Flush.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pabfdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Flush.jpg","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_handlespabfd","name":"handles","displayName":"Handles","displayNameSingular":"Handle","description":"","optionGroups":[{"id":"OptionGroupModel_pabfdhandles","name":"handles","displayName":"Handles","description":"","options":[{"id":"OptionModel_pabfdfmbn","name":"fmbn","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pabfdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pabfdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_pabfdfmb","name":"fmb","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_pabfdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_pabfdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-B.png","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_environmentpabfd","name":"environment","displayName":"Environment","displayNameSingular":"","description":"","optionGroups":[{"id":"OptionGroupModel_pabfdview","name":"view","displayName":"View","description":"","options":[{"id":"OptionEnvironmentModel_pabfdcityscape-wide","name":"cityscape-wide","displayName":"Cityscape","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdcityscape-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Cityscape.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdcityscape-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Cityscape.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfddesert-wide","name":"desert-wide","displayName":"Desert","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfddesert-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Desert.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfddesert-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Desert.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdmv-wide","name":"mv-wide","displayName":"Mountain View","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdmv-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Mountain-View.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdmv-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Mountain-View.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdoceanside-wide","name":"oceanside-wide","displayName":"Oceanside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdoceanside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Oceanside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdoceanside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Oceanside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdpoolside-wide","name":"poolside-wide","displayName":"Poolside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdpoolside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Poolside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdpoolside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Poolside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdwt-wide","name":"wt-wide","displayName":"Wild Thing","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdwt-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Wild-Thing.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdwt-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Wild-Thing.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true},{"id":"OptionGroupModel_pabfdwall","name":"wall","displayName":"Wall Color","description":"","options":[{"id":"OptionEnvironmentModel_pabfdconch","name":"conch","displayName":"Conch","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdconch","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"Wall-Color-Horizon.jpg","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"F5EEE9"},{"id":"OptionEnvironmentModel_pabfdpistachio","name":"pistachio","displayName":"Pistachio","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdpistachio","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E6EBE4"},{"id":"OptionEnvironmentModel_pabfdiceberg","name":"iceberg","displayName":"Iceberg","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdiceberg","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E0E7E9"},{"id":"OptionEnvironmentModel_pabfdpebble","name":"pebble","displayName":"Pebble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdpebble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"CFC4AA"},{"id":"OptionEnvironmentModel_pabfdmeadow","name":"meadow","displayName":"Meadow","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdmeadow","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"BFC5B1"},{"id":"OptionEnvironmentModel_pabfdhorizon","name":"horizon","displayName":"Horizon","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdhorizon","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1C3C8"},{"id":"OptionEnvironmentModel_pabfdsmoke","name":"smoke","displayName":"Smoke","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdsmoke","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1B9B7"},{"id":"OptionEnvironmentModel_pabfdjute","name":"jute","displayName":"Jute","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdjute","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E3D9D1"}],"useTooltip":true},{"id":"OptionGroupModel_pabfdfloor","name":"floor","displayName":"Floor","description":"","options":[{"id":"OptionEnvironmentModel_pabfdnatural","name":"natural","displayName":"Natural","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Natural.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Natural.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdjacobean","name":"jacobean","displayName":"Jacobean","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Jacobean.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Jacobean.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdsw","name":"sw","displayName":"Simply White","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Simply-White.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Simply-White.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdwo","name":"wo","displayName":"White Oak","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-White-Oak.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-White-Oak.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdtile","name":"tile","displayName":"Tile","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Tile.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Tile.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_pabfdmarble","name":"marble","displayName":"Marble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_pabfdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Marble.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_pabfdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Marble.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true}]}]},{"id":"ProductModel_ssabfd","name":"ssabfd","displayName":"Simulated Steel Aluminum Folding Door","description":"The look of steel but more affordable.","features":["Beveled glass stops","Simulated divided lights to emulate a putty glaze"],"illustrationAnimated":{"id":"ImageModel_ssabfd","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"ss-folding-door.gif","width":350,"useCdn":false,"aspectRatio":1.24955009},"illustrationStatic":{"id":"ImageModel_ss-folding-door.png","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"ss-folding-door.png","width":350,"useCdn":false,"aspectRatio":1.24955009},"images":[{"id":"ProductImageModel_OptionColorModel_ssabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-autumn-night-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdan","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-autumn-night-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdan","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdan","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-autumn-night-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdan","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-bison-beige-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdbb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-bison-beige-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdbb","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdbb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-bison-beige-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdbb","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-briar-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdbriar","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-briar-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdbriar","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdbriar","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-briar-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdbriar","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-bronze-anodized-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdba","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-bronze-anodized-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdba","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdba","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-bronze-anodized-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdba","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-cinnamon-toast-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdct","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-cinnamon-toast-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdct","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdct","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-cinnamon-toast-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdct","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-hillside-bronze-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdhb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-hillside-bronze-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdhb","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdhb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-hillside-bronze-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdhb","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-navajo-white-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdnw","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-navajo-white-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdnw","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdnw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-navajo-white-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdnw","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-satin-anodized-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdsa","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-satin-anodized-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdsa","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdsa","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-satin-anodized-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdsa","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-stonish-beige-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdsb","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-stonish-beige-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdsb","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdsb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-stonish-beige-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdsb","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-warmtone-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdwarmtone","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-warmtone-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdwarmtone","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdwarmtone","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-warmtone-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdwarmtone","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-white-no-handle-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdwhite","handle":null,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-white-flush-mounted-black-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdwhite","handle":"OptionModel_ssabfdfmb","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},{"id":"ProductImageModel_OptionColorModel_ssabfdwhite","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product/folding/aluminum/simulated-steel","fileName":"7950-aluminum-white-flush-mounted-brushed-nickel-simulated-steel.png","width":1230,"useCdn":false,"aspectRatio":1,"color":"OptionColorModel_ssabfdwhite","handle":"OptionModel_ssabfdfmbn","sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"}],"inheritedFeatures":"Everything in Performance","inheritedFeaturesLong":"Including everything from our PERFORMANCE models and more.","isActive":false,"selectionGroups":[{"id":"SelectionGroupModel_colorssabfd","name":"color","displayName":"Door Colors","displayNameSingular":"Door Color","description":"","optionGroups":[{"id":"OptionGroupModel_ssabfdcolor","name":"color","displayName":"Color","description":"","options":[{"id":"OptionColorModel_ssabfdba","name":"ba","displayName":"Bronze Anodized","description":"","finish":"","selected":true,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"424143"},{"id":"OptionColorModel_ssabfdsa","name":"sa","displayName":"Satin Anodized","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"D0D0CF"},{"id":"OptionColorModel_ssabfdwarmtone","name":"warmtone","displayName":"Warmtone","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"978C7B"},{"id":"OptionColorModel_ssabfdwhite","name":"white","displayName":"White","description":"","finish":"","selected":false,"displayOptionGroupName":"standard","thumb":null,"detailImage":null,"hex":"fff"},{"id":"OptionColorModel_ssabfdan","name":"an","displayName":"Autumn Night","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"9C674F"},{"id":"OptionColorModel_ssabfdbb","name":"bb","displayName":"Bison Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"8D806F"},{"id":"OptionColorModel_ssabfdbriar","name":"briar","displayName":"Briar","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"6B4C38"},{"id":"OptionColorModel_ssabfdct","name":"ct","displayName":"Cinnamon Toast","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"7B2022"},{"id":"OptionColorModel_ssabfdhb","name":"hb","displayName":"Hillside Bronze","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"3C2B13"},{"id":"OptionColorModel_ssabfdnw","name":"nw","displayName":"Navajo White","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"F5EDE0"},{"id":"OptionColorModel_ssabfdsb","name":"sb","displayName":"Stonish Beige","description":"","finish":"","selected":false,"displayOptionGroupName":"designer","thumb":null,"detailImage":null,"hex":"B5A48B"}],"useTooltip":true}]},{"id":"SelectionGroupModel_floor-sillsssabfd","name":"floor-sills","displayName":"Floor Sills","displayNameSingular":"Floor Sill","description":"","optionGroups":[{"id":"OptionGroupModel_ssabfdfloor-sills","name":"floor-sills","displayName":"Floor Sills","description":"","options":[{"id":"OptionModel_ssabfdwbs","name":"wbs","displayName":"Water Barrier Sill","description":"Designed for effectiveness in most climates, a built-in self-drainage weep system helps to safeguard against water intrusion.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssabfdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Water-Barrier.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssabfdwbs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Water-Barrier.jpg","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_ssabfdfs","name":"fs","displayName":"Flush Sill","description":"When ease of entry is more important than performance against the elements. Lines up with most interior flooring.","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssabfdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/thumb","fileName":"Sill-Flush.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssabfdfs","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/sill/detail","fileName":"Sill-Flush.jpg","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_handlesssabfd","name":"handles","displayName":"Handles","displayNameSingular":"Handle","description":"","optionGroups":[{"id":"OptionGroupModel_ssabfdhandles","name":"handles","displayName":"Handles","description":"","options":[{"id":"OptionModel_ssabfdfmbn","name":"fmbn","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Brushed Nickel","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssabfdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-N.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssabfdfmbn","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-N.png","width":400,"useCdn":false,"aspectRatio":1}},{"id":"OptionModel_ssabfdfmb","name":"fmb","displayName":"Flush-Mounted","description":"Clean narrow design allows panels to easily slide past each other. Available in brushed nickel or black.","finish":"Black","selected":false,"displayOptionGroupName":"","thumb":{"id":"ImageModel_ssabfdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/thumb","fileName":"Handle-7600-Flush-Mount-B.png","width":150,"useCdn":false,"aspectRatio":1},"detailImage":{"id":"ImageModel_ssabfdfmb","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/handle/detail","fileName":"Handle-7600-Flush-Mount-B.png","width":400,"useCdn":false,"aspectRatio":1}}],"useTooltip":false}]},{"id":"SelectionGroupModel_environmentssabfd","name":"environment","displayName":"Environment","displayNameSingular":"","description":"","optionGroups":[{"id":"OptionGroupModel_ssabfdview","name":"view","displayName":"View","description":"","options":[{"id":"OptionEnvironmentModel_ssabfdcityscape-wide","name":"cityscape-wide","displayName":"Cityscape","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdcityscape-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Cityscape.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdcityscape-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Cityscape.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfddesert-wide","name":"desert-wide","displayName":"Desert","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfddesert-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Desert.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfddesert-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Desert.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdmv-wide","name":"mv-wide","displayName":"Mountain View","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdmv-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Mountain-View.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdmv-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Mountain-View.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdoceanside-wide","name":"oceanside-wide","displayName":"Oceanside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdoceanside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Oceanside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdoceanside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Oceanside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdpoolside-wide","name":"poolside-wide","displayName":"Poolside","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdpoolside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Poolside.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdpoolside-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Poolside.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdwt-wide","name":"wt-wide","displayName":"Wild Thing","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdwt-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Wild-Thing.png","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdwt-wide","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/background","fileName":"View-Folding-Wild-Thing.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true},{"id":"OptionGroupModel_ssabfdwall","name":"wall","displayName":"Wall Color","description":"","options":[{"id":"OptionEnvironmentModel_ssabfdconch","name":"conch","displayName":"Conch","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdconch","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"Wall-Color-Horizon.jpg","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"F5EEE9"},{"id":"OptionEnvironmentModel_ssabfdpistachio","name":"pistachio","displayName":"Pistachio","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdpistachio","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E6EBE4"},{"id":"OptionEnvironmentModel_ssabfdiceberg","name":"iceberg","displayName":"Iceberg","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdiceberg","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E0E7E9"},{"id":"OptionEnvironmentModel_ssabfdpebble","name":"pebble","displayName":"Pebble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdpebble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"CFC4AA"},{"id":"OptionEnvironmentModel_ssabfdmeadow","name":"meadow","displayName":"Meadow","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdmeadow","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"BFC5B1"},{"id":"OptionEnvironmentModel_ssabfdhorizon","name":"horizon","displayName":"Horizon","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdhorizon","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1C3C8"},{"id":"OptionEnvironmentModel_ssabfdsmoke","name":"smoke","displayName":"Smoke","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdsmoke","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"B1B9B7"},{"id":"OptionEnvironmentModel_ssabfdjute","name":"jute","displayName":"Jute","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":null,"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdjute","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/wall","fileName":"wall-2.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":"E3D9D1"}],"useTooltip":true},{"id":"OptionGroupModel_ssabfdfloor","name":"floor","displayName":"Floor","description":"","options":[{"id":"OptionEnvironmentModel_ssabfdnatural","name":"natural","displayName":"Natural","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Natural.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdnatural","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Natural.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdjacobean","name":"jacobean","displayName":"Jacobean","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Jacobean.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdjacobean","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Jacobean.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdsw","name":"sw","displayName":"Simply White","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Simply-White.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdsw","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Simply-White.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdwo","name":"wo","displayName":"White Oak","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-White-Oak.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdwo","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-White-Oak.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdtile","name":"tile","displayName":"Tile","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Tile.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdtile","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Tile.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""},{"id":"OptionEnvironmentModel_ssabfdmarble","name":"marble","displayName":"Marble","description":"","finish":"","selected":false,"displayOptionGroupName":"","thumb":{"id":"EnvironmentImageModel_ssabfdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor/thumb","fileName":"Floor-Marble.jpg","width":150,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"detailImage":null,"image":{"id":"EnvironmentImageModel_ssabfdmarble","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/environment/floor","fileName":"Floor-Marble.png","width":1230,"useCdn":false,"aspectRatio":1,"sizes":"(min-width: 1040px) calc(68.52vw - 195px), calc(36.67vw - 40px)"},"hex":""}],"useTooltip":true}]}]}],"image":{"id":"ImageModel_folding-door.png","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"folding-door.png","width":350,"useCdn":false,"aspectRatio":1.24955009},"animatedImage":{"id":"ImageModel_folding-door.gif","cdnPath":"https://buildstaging.skyewallsbywws.com/cdn-cgi/image/fit=contain,dpr=1,f=auto,width=","basePath":"/images/product-illustrations","fileName":"folding-door.gif","width":350,"useCdn":false,"aspectRatio":1.24955009}}],"products":[]}],"modals":{"modal-primary":{"id":"modal-primary","name":"reviewModal","isOpen":true,"isClosing":false,"type":"PANEL","title":"","closeOnBackdropClick":false,"showCloseBtn":false,"showCloseBtnText":false,"showBackdrop":false},"modal-secondary":{"id":"modal-secondary","name":"","isOpen":false,"isClosing":false,"type":"MODAL","title":"","closeOnBackdropClick":false,"showCloseBtn":true,"showCloseBtnText":false,"showBackdrop":true},"modal-menu":{"id":"modal-menu","name":"","isOpen":false,"isClosing":false,"type":"MODAL","title":"","closeOnBackdropClick":false,"showCloseBtn":true,"showCloseBtnText":false,"showBackdrop":true}},"page":{"id":"ConfigPageModel_main","product":"ProductModel_camsd","currentOptionGroup":"OptionGroupModel_camsdcolor","currentSelectionGroup":"SelectionGroupModel_colorcamsd","className":"Page--config"},"isMediaQueryXl":true,"env":"STAGING"
	};
	/* eslint-enable */
	let snapshot = null;

	appStore.setConfigPage(context.query.product);
	if (context.req.method === 'POST') {
		const body = await getRawBody(context.req);

		snapshot = body.toString('utf-8');
	}

	return {
		props: {
			snapshot: snapshot || JSON.stringify(getSnapshot(appStore)),
		},
	};
};

export default ConfigProduct;
