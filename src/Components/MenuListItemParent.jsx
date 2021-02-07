import React from 'react';
import cn from 'classnames';

import { PlusSolid } from '~/Components/svg/PlusSolid.svg';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const MenuListItemParent = ({
	isOpen, setIsOpen, Icon = null, label, children,
}) => {
	return (
		<li className={cn('Menu-item', {
			'is-open': isOpen,
		})}
		>
			<button
				type="button"
				className="Menu-heading"
				onClick={() => {
					if (isOpen) {
						setIsOpen(false);
					} else {
						setIsOpen(true);
					}
				}}
			>
				<div className="Menu-leftCol">
					<div className="Menu-labelIcon w-4"><Icon /></div>
					<div className="Menu-label">{label}</div>
				</div>
				{
					Boolean(children.length) &&
					<div className="Menu-rightCol">
						<div className={cn('Menu-control', {
							'opacity-0': isOpen,
							'opacity-100': !isOpen,
						})}
						>
							<PlusSolid />
						</div>
						<div className={cn('Menu-control', {
							'opacity-0': !isOpen,
							'opacity-100': isOpen,
						})}
						>
							<ChevronSolid />
						</div>
					</div>
				}
			</button>
			{
				isOpen && Boolean(children.length) &&
				<ul className="Menu-subItems divide-y divide-gray-lighter">
					{children}
				</ul>
			}
		</li>
	);
};
