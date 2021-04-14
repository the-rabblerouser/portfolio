import ReactRotatingText from 'react-rotating-text';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-scroll';

import { Arrow, Check } from '../components/Icons';

import styles from '../styles/Home.module.css';

export default function Home() {
	const homeAnimation = useSpring({
		from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 150,
		config: config.slow,
	});

	const arrowAnimation = useSpring({
		to: async (next) => {
			await next({ transform: 'translate3d(0, 5px, 0)' });
			await next({ transform: 'translate3d(0, 15px, 0)' });
		},
		from: { transform: 'translate3d(0, 15px, 0)' },
		config: { duration: 1500 },
		loop: true,
	});

	const aboutAnimation = useSpring({
		from: { transform: 'translate3d(30px, 0, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 150,
		config: config.slow,
	});

	return (
		<>
			<animated.div style={homeAnimation} className={styles.container}>
				<h1 className={styles.home}>Hi, I'm Joe...</h1>
				<p className={styles.slidingText}>
					your new{' '}
					<span>
						<ReactRotatingText
							typingInterval={140}
							deletingInterval={140}
							pause={2000}
							color="#82ADC9"
							items={['frontend', 'backend', 'fullstack']}
						/>
					</span>
					developer
				</p>
				<div style={{ color: 'var(--font-color)' }}>check me out</div>
				<div className={styles.arrowButton}>
					<animated.div style={arrowAnimation}>
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							duration={1000}>
							<Arrow />
						</Link>
					</animated.div>
				</div>
			</animated.div>
			<div className={styles.aboutMe}>
				<animated.h1
					style={aboutAnimation}
					className={styles.aboutTitle}
					id="about">
					about me
				</animated.h1>
				<div className={styles.aboutDesc}>
					<div>
						<img
							className={styles.img}
							src="./F6835DBC-1D6F-45E3-A9DA-14B29B32CDB9_1_105_c.jpeg"
							alt="Joe"
						/>
					</div>
					<div>
						<p style={{ marginBottom: '1.2rem' }}>
							Hi! My name is{' '}
							<span className={styles.contactName}>Joe McCann</span>. I am a
							junior Full Stack Web Developer who specializes in React, Node and
							Next.js. I love spending time building projects in javascript and
							learning about new technologies. I am currently looking for work.
							Send me a message, I would love to work with you in the near
							future!
						</p>

						<div className={styles.skillSection}>
							<h4 className={styles.skillsTitle}>look at what i can do</h4>
							<div className={styles.skills}>
								<div>
									<h5 className={styles.skillsSubTitle}>languages</h5>
									<animated.ul
										style={homeAnimation}
										className={styles.skillsList}>
										<li>
											<Check /> javascript
										</li>
										<li>
											<Check /> typescript
										</li>
										<li>
											<Check /> node.js
										</li>
									</animated.ul>
								</div>
								<div>
									<h5 className={styles.skillsSubTitle}>technologies</h5>
									<animated.ul
										style={homeAnimation}
										className={styles.skillsList}>
										<li>
											<Check /> react.js
										</li>
										<li>
											<Check /> next.js
										</li>
										<li>
											<Check /> express
										</li>
										<li>
											<Check /> mongodb
										</li>
									</animated.ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
