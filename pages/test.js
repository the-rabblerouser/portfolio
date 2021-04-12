import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import { Arrow } from '../components/Icons';

import styles from '../styles/Home.module.css';

const test = () => {
	const arrowAnimation = useSpring({
		to: async (next) => {
			await next({ transform: 'translate3d(0, 15px, 0)' });
			await next({ transform: 'translate3d(0, 5px, 0)' });
		},
		from: { transform: 'translate3d(0, 5px, 0)' },
		config: config.wobbly,
		loop: true,
	});

	return (
		<div className={styles.container}>
			<animated.div style={arrowAnimation}>
				<Arrow />
			</animated.div>
		</div>
	);
};

export default test;
