import React, { useState } from 'react';

import styles from '../styles/Home.module.css';
import { Arrow } from '../components/Icons';

import { useSpring, animated } from 'react-spring';

const items = [2];
const interp = (i) => (r) =>
	`translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const testpage = () => {
	const { radians } = useSpring({
		to: async (next) => {
			while (1) await next({ radians: 2 * Math.PI });
		},
		from: { radians: 0 },
		config: { duration: 3500 },
		reset: true,
	});

	return (
		<div className={styles.container}>
			{items.map((i) => (
				<animated.div key={i} style={{ transform: radians.to(interp(i)) }}>
					<Arrow />
				</animated.div>
			))}
		</div>
	);
};

export default testpage;
