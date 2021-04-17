import React from 'react';
import useSwr from 'swr';

import styles from '../styles/Projects.module.css';

const ProjectsList = () => {
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSwr('/api/projects', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	return (
		<>
			{data.map(({ _id, title, repository, description, tools, site }) => {
				return (
					<div key={_id} className={styles.projectContainer}>
						<div>
							<div className={styles.projectHeader}>
								<a className={styles.links} href={site}>
									<h4>{title}</h4>
								</a>
								<div className={styles.code}>
									<span>-</span>
									<a className={styles.links} href={repository}>
										{' '}
										code
									</a>
								</div>
							</div>
							<div>
								<div className={styles.tools}>{tools}</div>
								<div>{description}</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ProjectsList;
