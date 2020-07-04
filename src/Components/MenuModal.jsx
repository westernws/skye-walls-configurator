import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { TableSolid } from '~/Components/svg/TableSolid.svg';
import { PlusSolid } from '~/Components/svg/PlusSolid.svg';
import { FlagSolid } from '~/Components/svg/FlagSolid.svg';
import { ChevronSolid } from '~/Components/svg/ChevronSolid.svg';

export const MenuModal = () => {
	const [isFinishedDesigningOpen, setIsFinishedDesigningOpen] = useState(false);

	return (
		<ul className="Menu-items divide-y-2 divide-gray-lighter">
			<li className="Menu-item">
				<button
					type="button"
					className="Menu-heading"
				>
					<div className="Menu-leftCol">
						<div className="Menu-labelIcon"><TableSolid /></div>
						<div className="Menu-label">Categories</div>
					</div>
					<div className="Menu-rightCol">
						<div className="w-4"><PlusSolid /></div>
					</div>
				</button>
			</li>
			<li className={cn('Menu-item', {
				'is-open': isFinishedDesigningOpen,
			})}
			>
				<button
					type="button"
					className="Menu-heading"
					onClick={() => {
						if (isFinishedDesigningOpen) {
							setIsFinishedDesigningOpen(false);
						} else {
							setIsFinishedDesigningOpen(true);
						}
					}}
				>
					<div className="Menu-leftCol">
						<div className="Menu-labelIcon"><FlagSolid /></div>
						<div className="Menu-label">Finished Designing?</div>
					</div>
					<div className="Menu-rightCol">
						<div className={cn('Menu-control', {
							'opacity-0': isFinishedDesigningOpen,
							'opacity-100': !isFinishedDesigningOpen,
						})}
						>
							<PlusSolid />
						</div>
						<div className={cn('Menu-control', {
							'opacity-0': !isFinishedDesigningOpen,
							'opacity-100': isFinishedDesigningOpen,
						})}
						>
							<ChevronSolid />
						</div>
					</div>
				</button>
				{
					isFinishedDesigningOpen &&
					<ul className="Menu-subItems divide-y divide-gray-lighter">
						<li className="Menu-subItem">
							<Link href="color" as="color">
								<a className="Menu-subHeading" href="color">
									<div className="Menu-label">Review Selections</div>
								</a>
							</Link>
						</li>
						<li className="Menu-subItem">
							<Link href="color" as="color">
								<a className="Menu-subHeading" href="color">
									<div className="Menu-label">Exit Configurator</div>
								</a>
							</Link>
						</li>
					</ul>
				}
			</li>
		</ul>
	);
};
