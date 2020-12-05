import React from 'react';
import { observer } from 'mobx-react-lite';

import { ReviewConfig } from '~/Components/ReviewConfig';
import { useMst } from '~/Stores/App.store';

export const SelectorCta = observer(() => {
	const { page, modals } = useMst();
	const primaryModal = modals.get('modal-primary');

	return (
		<>
			{
				Boolean(page.nextSelectionGroup) &&
				<button
					type="button"
					className="Button w-full xl:w-auto xl:px-12"
					onClick={() => {
						page.setCurrentSelectionGroup(page.nextSelectionGroup.id);
					}}
				>
					Next: {page.nextSelectionGroup.displayName}
				</button>
			}
			{
				!page.nextSelectionGroup &&
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
			}
		</>
	);
});
