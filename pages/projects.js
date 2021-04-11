import { useState } from 'react';

import ProjectCard from '../components/ProjectCard';

import styles from '../styles/Projects.module.css';

const projects = () => {
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.projectTitle}>Projects</h1>

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
