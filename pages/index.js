import ReactRotatingText from 'react-rotating-text';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-scroll';

import { Arrow, Check } from '../components/Icons';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.css';

const Home = () => {
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
		config: (config.wobbly, { duration: 1100 }),
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
				<div className={styles.checkMeOut}>check me out</div>
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
						<img className={styles.img} src="./IMG_0409.jpeg" alt="Joe" />
					</div>
					<div>
						<p className={styles.aboutP}>
							Hi! My name is{' '}
							<span className={styles.contactName}>Joe McCann</span>. I am a
							junior Full Stack Web Developer who specializes in React, Node and
							Next.js. I love spending time building projects and learning about
							new technologies. I am currently looking for work. Send me a
							message, I would love to work with you!
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
											<Check /> node
										</li>
									</animated.ul>
								</div>
								<div>
									<h5 className={styles.skillsSubTitle}>dev tools</h5>
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
			<Footer />
		</>
	);
};

export default Home;
