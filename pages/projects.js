import { useSpring, animated, config } from 'react-spring';
// import Skeleton from 'react-loading-skeleton';

import ProjectCard from '../components/ProjectCard';

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

				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</>
	);
};

export default projects;
