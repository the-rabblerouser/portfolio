import { useSpring, animated, config } from 'react-spring';

import ProjectsList from '../components/ProjectsList';
import Footer from '../components/Footer';

import styles from '../styles/Projects.module.css';

const projects = () => {
	const titleAnimation = useSpring({
		from: { transform: 'translate3d(30px, 0, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 150,
		config: config.slow,
	});

	return (
		<>
			<div className={styles.container}>
				<animated.h1 className={styles.projectTitle} style={titleAnimation}>
					projects
				</animated.h1>
				<ProjectsList />
			</div>
			<Footer />
		</>
	);
};

export default projects;
