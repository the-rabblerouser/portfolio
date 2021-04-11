import { useState } from 'react';

import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

import styles from '../styles/Projects.module.css';

const projects = () => {
	const aboutLink = 'http://localhost:3000/#about';
	return (
		<>
			<Navbar aboutLink={aboutLink} />
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
