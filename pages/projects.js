import { useSpring, animated, config } from 'react-spring';
import useSwr from 'swr';

import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

import styles from '../styles/Projects.module.css';

const projects = () => {
	const titleAnimation = useSpring({
		from: { transform: 'translate3d(30px, 0, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 150,
		config: config.slow,
	});

	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSwr('/api/projects', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<>
			<div className={styles.container}>
				<animated.h1 className={styles.projectTitle} style={titleAnimation}>
					projects
				</animated.h1>
				<ProjectCard data={data} />
			</div>
			<Footer />
		</>
	);
};

export default projects;
