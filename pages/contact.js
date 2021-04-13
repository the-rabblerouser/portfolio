import React from 'react';

import Navbar from '../components/Navbar';

import styles from '../styles/Contact.module.css';

const aboutLink = 'http://localhost:3000/#about';

const contact = () => {
	return (
		<>
			<Navbar aboutLink={aboutLink} />
			<div className={styles.container}>
				<h5 className={styles.contact}>lets build something together</h5>
				<a href="mailto:tojmccann@gmail.com">
					<div className={styles.contactName}>tojmccann@gmail.com</div>
				</a>
			</div>
		</>
	);
};

export default contact;
