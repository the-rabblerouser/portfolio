import React from 'react';

import { useSpring, animated, config } from 'react-spring';
import { useForm } from 'react-hook-form';

import styles from '../styles/Contact.module.css';

const contact = () => {
	const titleAnimation = useSpring({
		from: { transform: 'translate3d(30px, 0, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 150,
		config: config.slow,
	});

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<>
			<div className={styles.container}>
				<animated.h5 style={titleAnimation} className={styles.contactTitle}>
					lets build something together
				</animated.h5>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.formGroup}>
						<label className={styles.label} htmlFor="name">
							Name
						</label>
						<input
							className={styles.input}
							{...register('name', { required: true })}
							type="text"
							id="name"
						/>
					</div>
					<div className={styles.formGroup}>
						<label className={styles.label} htmlFor="email">
							Email
						</label>
						<input
							className={styles.input}
							{...register('email', { required: true })}
							type="text"
							id="email"
						/>
					</div>
					<div className={styles.formGroup}>
						<label className={styles.label} htmlFor="message">
							Message
						</label>
						<textarea
							className={styles.textArea}
							{...register('message', { required: true })}
							id="message"
							rows="3"></textarea>
					</div>
					<button className={styles.submitButton} type="submit">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default contact;
