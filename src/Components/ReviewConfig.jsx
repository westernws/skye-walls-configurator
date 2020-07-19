import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';

import { useMst } from '~/Stores/App.store';
import { LongArrowAltLeft } from '~/Components/svg/LongArrowAltLeft.svg';
import { DummyImage } from '~/Components/DummyImage';
import { ReviewConfigOptions } from '~/Components/ReviewConfigOptions';

export const ReviewConfig = observer(() => {
	const { modals, page } = useMst();
	const modal = modals.get('modal-primary');
	const selectedProduct = page.product;

	return (
		<div className="ReviewConfigContainer">
			<div className="ReviewNav xl:hidden">
				<button
					type="button"
					className="Button Button--tertiary justify-center"
					onClick={() => {
						modal.close();
					}}
				>
					<LongArrowAltLeft />
					Back to Build
				</button>
			</div>
			<div className="ReviewConfig">
				<div className="ReviewConfig-hero">
					<DummyImage className="ReviewConfig-heroImg" width="633" height="228" />
				</div>
				<div className="ReviewConfig-body divide-y-2 divide-gray-light100">
					<div className="p-8 xl:flex m-auto justify-center items-center">
						<div className="hidden mr-20 w-3/12 leading-none xl:block space-y-3">
							<h2 className="text-5xl">{selectedProduct.displayName}</h2>
							<h3 className="text-xl text-gray-light">{selectedProduct.displayGroupName}</h3>
						</div>
						<button
							type="button"
							className="Button w-full xl:w-auto xl:px-12"
						>
							Get Quote
						</button>
					</div>
					<div className="p-8 space-y-8">
						<h2 className="text-3xl uppercase text-center font-bold">Your Configuration</h2>
						<ReviewConfigOptions product={selectedProduct} />
					</div>
				</div>
			</div>
			{/* 1800x1200 */}
			<div className="ReviewFooter">
				<div className="py-3 px-8 border-t border-gray-lighter border-solid">
					<button
						type="button"
						className="Button w-full"
					>
						Get Quote
					</button>
				</div>
			</div>
		</div>
	);
});
