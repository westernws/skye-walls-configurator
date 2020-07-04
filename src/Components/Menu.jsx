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
	const { modal } = useMst();

	return (
		<ul className="Menu 2xl:hidden">
			<li>
				<button
					type="button"
					onClick={() => {
						if (modal.isOpen) {
							modal.close();
						} else {
							modal.open({
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
						'Icon--sm': modal.isOpen,
					})}
					>
						{
							modal.isOpen &&
							<TimesSolid color={themeConfig.theme.colors.black} />
						}
						{
							!modal.isOpen &&
							<BarsSolid />
						}
					</div>
					{
						modal.isOpen &&
						<span>Close</span>
					}
					{
						!modal.isOpen &&
						<span>Menu</span>
					}
				</button>
			</li>
		</ul>
	);
});
