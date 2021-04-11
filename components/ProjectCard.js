import { useState } from 'react';

import { useSpring, animated as a } from 'react-spring';

import styles from '../styles/Projects.module.css';

const ProjectCard = () => {
	const [flipped, set] = useState(false);
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 100 },
	});

	return (
		<>
			<div>
				<div onClick={() => set((state) => !state)}>
					<a.div
						className={styles.c}
						style={{ opacity: opacity.to((o) => 1 - o), transform }}>
						Front
					</a.div>
					<a.div
						className={styles.c}
						style={{
							opacity,
							transform: transform.to((t) => `${t} rotateX(180deg)`),
						}}>
						Back
					</a.div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
