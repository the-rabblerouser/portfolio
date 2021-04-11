import { useState } from 'react';

import { Github } from '../components/Icons';

import styles from '../styles/Projects.module.css';

const ProjectCard = () => {
	return (
		<>
			<div className={styles.projectContainer}>
				<div>
					<a>
						<h4>Project</h4>
					</a>
					<div>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
							totam ipsum asperiores at? Ratione a quisquam, consequatur sed
							dolor debitis!{' '}
						</div>
						<div>React | Next</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
