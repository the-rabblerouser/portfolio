import React, { useState } from 'react';

import styles from '../styles/Home.module.css';

import { useSpring, animated } from 'react-spring';

const testpage = () => {
	const [toggle, setToggle] = useState(false);
	const props = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: 100,
		onRest: () => {
			opacity: 0;
		},
	});

	return (
		<div className={styles.container}>
			{/* <button onClick={() => setToggle(!toggle)}>Click</button> */}
			<animated.div style={props}>i will fade</animated.div>
		</div>
	);
};

export default testpage;
