import React from 'react';

import { useSpring, animated, config } from 'react-spring';

import styles from '../styles/Contact.module.css';

const contact = () => {
	const titleAnimation = useSpring({
		from: { transform: 'translate3d(30px, 0, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 150,
		config: config.slow,
	});

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className={styles.container}>
				<animated.h5 style={titleAnimation} className={styles.contactTitle}>
					lets build something together
				</animated.h5>
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
