import { useState } from 'react';

import ProjectCard from '../components/ProjectCard';

import styles from '../styles/Projects.module.css';

const projects = () => {
	return (
		<>
			<div className={styles.container}>
				<div>
					<h1>Projects</h1>
				</div>
				<div className={styles.cardDiv}>
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</>
	);
};

export default projects;
