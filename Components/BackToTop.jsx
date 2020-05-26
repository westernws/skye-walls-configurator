import React from 'react';
import classNames from 'classnames';

import styles from '~/styles/BackToTop.module.css';

export const BackToTop = ({ isIconVisible }) => {
	return (
		<button
			className={classNames(styles.BackToTop, 'space-x-1', {
				[styles['is-icon-visible']]: isIconVisible,
			})}
			type="button"
		>
			<img className={styles['BackToTop-icon']} src="/images/arrow-alt-circle-up-regular.svg" alt="" aria-hidden />
			<strong>All Models</strong>
		</button>
	);
};
