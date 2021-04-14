import React from 'react';

import styles from '../styles/Contact.module.css';

const contact = () => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className={styles.container}>
				<h5 className={styles.contactTitle}>lets build something together</h5>
				<form className={styles.form} onSubmit={onSubmit}>
					<div className={styles.formGroup}>
						<label className={styles.label} htmlFor="name">
							Name
						</label>
						<input className={styles.input} type="text" id="name" />
					</div>
					<div className={styles.formGroup}>
						<label className={styles.label} htmlFor="email">
							Email
						</label>
						<input className={styles.input} type="text" id="name" />
					</div>
					<div className={styles.formGroup}>
						<label className={styles.label} htmlFor="message">
							Message
						</label>
						<textarea
							className={styles.textArea}
							id="message"
							rows="3"></textarea>
					</div>
					<button className={styles.submitButton} type="submit">
						Submit
					</button>
				</form>
			</div>
			<style jsx>{`
				@media (max-width: 768px) {
				}
			`}</style>
			{/* <a href="mailto:tojmccann@gmail.com">
					<div className={styles.contactName}>tojmccann@gmail.com</div>
				</a> 
            */}
		</>
	);
};

export default contact;
