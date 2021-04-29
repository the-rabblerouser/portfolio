import ReactRotatingText from 'react-rotating-text';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-scroll';

import { Arrow, Check, Github, LinkedIn } from '../components/Icons';

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
			<div>
				<div className={styles.homeIcons}>
					<div className={styles.line}></div>
					<div>
						<div className={styles.icons}>
							<a
								className={styles.icon}
								href="https://github.com/the-rabblerouser">
								<Github />
							</a>
							<a
								className={styles.icon}
								href="https://www.linkedin.com/in/joseph-mccann-77402a88/">
								<LinkedIn />
							</a>
						</div>
					</div>
				</div>
				<animated.div style={aboutAnimation} className={styles.home}>
					<div>Hi I'm Joe.</div>
					<div>and I'm your next</div>
					<div>
						<ReactRotatingText
							typingInterval={140}
							deletingInterval={140}
							pause={2000}
							color="#82ADC9"
							items={['frontend', 'backend', 'fullstack']}
						/>
					</div>
					<div>developer.</div>
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
				<div className={styles.homeImageContainer}>
					<img src="/IMG_1090.jpeg" alt="Joe" className={styles.homeImage} />
				</div>
			</div>

			<animated.div
				style={aboutAnimation}
				className={styles.aboutDesc}
				id="about">
				<div className={styles.aboutStory}>
					<div>
						<p className={styles.aboutP}>
							I am a 29 year old Full Stack Web Developer who specializes in
							React, Node and Next.js. I love spending time building projects
							and learning about new technologies.
							<br /> <br /> I am a 29 year old Full Stack Web Developer who
							specializes in React, Node and Next.js. I love spending time
							building projects and learning about new technologies.
						</p>
					</div>
					<div>
						<p className={styles.aboutP}>
							I am a 29 year old Full Stack Web Developer who specializes in
							React, Node and Next.js. I love spending time building projects
							and learning about new technologies.
						</p>
					</div>
				</div>
				<div className={styles.skillSection}>
					<h1 className={styles.skillsTitle}>Skills</h1>
					<div className={styles.skills}>
						<animated.ul style={homeAnimation} className={styles.skillsList}>
							<div>
								<li className={styles.item}>
									<div>
										<Check />
									</div>
									<div>Javascript</div>
								</li>
								<li className={styles.item}>
									<Check /> Typescript
								</li>
							</div>
							<div>
								<li className={styles.item}>
									<Check /> Node
								</li>

								<li className={styles.item}>
									<Check /> React
								</li>
							</div>
							<div>
								<li className={styles.item}>
									<Check /> Next.js
								</li>
								<li className={styles.item}>
									<Check /> Express
								</li>
							</div>
							<div>
								<li className={styles.item}>
									<Check /> Git
								</li>
								<li className={styles.item}>
									<Check /> MongoDB
								</li>
							</div>
						</animated.ul>
						{/* </div> */}
					</div>
				</div>
			</animated.div>
			<Footer />
		</>
	);
};

export default Home;
