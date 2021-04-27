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
					Projects
				</animated.h1>
				<div className={styles.projectP}>
					I like to stay busy and always have a project in the works. Take a
					look at some of the projects I've spent my time building.
				</div>
				<ProjectsList />
			</div>
			<Footer />
		</>
	);
};

export default projects;
