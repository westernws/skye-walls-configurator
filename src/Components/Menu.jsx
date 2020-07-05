import React from 'react';
import { observer } from 'mobx-react-lite';
import 'mobx-react-lite/batchingForReactDom';
import cn from 'classnames';

import { useMst } from '~/Stores/App.store';
import { MenuList } from '~/Components/MenuList';
import { BarsSolid } from '~/Components/svg/BarsSolid.svg';
import { TimesSolid } from '~/Components/svg/TimesSolid.svg';
import { themeConfig } from '~/util/themeConfig';

export const Menu = observer(({ categories = [], selectedProduct }) => {
	const { menu } = useMst();

	return (
		<ul className="Menu xl:hidden">
			<li>
				<button
					type="button"
					onClick={() => {
						if (menu.isOpen) {
							menu.close();
						} else {
							menu.open({
								backdropOffset: {
									x: 0,
									y: 70,
								},
								content: <MenuList categories={categories} selectedProduct={selectedProduct} />,
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
