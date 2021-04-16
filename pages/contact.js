import React from 'react';
import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { useSpring, animated, config } from 'react-spring';
import axios from 'axios';

import styles from '../styles/Contact.module.css';

const contact = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		axios({
			method: 'post',
			url: '/api/contact',
			data,
		});

		router.reload();
	};

	const titleAnimation = useSpring({
		from: { transform: 'translate3d(30px, 0, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 150,
		config: config.slow,
	});

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
						{errors.name && '*name is required'}
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
						{errors.email && '*email is required'}
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
						{errors.message && '*message is required'}
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
