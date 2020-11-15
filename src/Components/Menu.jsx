import React from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';

import { useMst } from '~/Stores/App.store';
import { MenuList } from '~/Components/MenuList';
import { BarsSolid } from '~/Components/svg/BarsSolid.svg';
import { TimesSolid } from '~/Components/svg/TimesSolid.svg';
import { themeConfig } from '~/util/themeConfig';

export const Menu = observer(({ selectedProduct, optionGroups }) => {
	const { modals } = useMst();
	const menu = modals.get('modal-menu');

	return (
		<ul className="Menu xl:hidden">
			<li>
				<button
					type="button"
					onClick={() => {
						modals.get('modal-primary').close();
						modals.get('modal-secondary').close();
						if (menu.isOpen) {
							menu.close();
						} else {
							menu.open({
								content: (
									<MenuList
										selectionGroups={optionGroups}
										selectedProduct={selectedProduct}
									/>
								),
								type: 'MENU',
							});
						}
					}}
				>
					<div className={cn('Icon', {
						'Icon--sm': menu.isOpen,
					})}
					>
						{
							menu.isOpen &&
							<TimesSolid color={themeConfig.theme.colors.gray.default} />
						}
						{
							!menu.isOpen &&
							<BarsSolid />
						}
					</div>
					{
						menu.isOpen &&
						<span>Close</span>
					}
					{
						!menu.isOpen &&
						<span>Menu</span>
					}
				</button>
			</li>
		</ul>
	);
});
