import React from 'react';
import useSwr from 'swr';

import styles from '../styles/Projects.module.css';

const ProjectsList = ({ posts }) => {
	const fetcher = (url) => fetch(url).then((res) => res.json());

	const { data, error } = useSwr('/api/projects', fetcher, {
		initialData: posts,
	});

	if (error) return <div>failed to load</div>;
	if (!data) return <div></div>;
	return (
		<>
			{data.map(
				({ _id, title, repository, description, tools, site, image }) => {
					return (
						<div key={_id} className={styles.projectContainer}>
							<div className={styles.imageSpacing}>
								<div>
									<a href={site}>
										<img
											src={image}
											alt="Image Comming Soon!"
											className={styles.image}
										/>
									</a>
								</div>
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
						</div>
					);
				}
			)}
		</>
	);
};

export async function getStaticProps() {
	// `getStaticProps` is invoked on the server-side,
	// so this `fetcher` function will be executed on the server-side.
	const posts = await fetcher('/api/projects');
	return { props: posts };
}

export default ProjectsList;
