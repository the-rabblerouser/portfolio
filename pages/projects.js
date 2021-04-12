import { useSpring, animated, config } from 'react-spring';

import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

import styles from '../styles/Projects.module.css';

const aboutLink = 'http://localhost:3000/#about';

const projects = () => {
	const titleAnimation = useSpring({
		from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 350,
		config: config.slow,
	});
	return (
		<>
			<Navbar aboutLink={aboutLink} />
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
