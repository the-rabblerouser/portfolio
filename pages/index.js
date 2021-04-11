import ReactRotatingText from 'react-rotating-text';

import { Arrow } from '../components/Icons';
import LinkIcons from '../components/LinkIcons';
import styles from '../styles/Home.module.css';

import {
	Node,
	React,
	Typescript,
	Javascript,
	Mongodb,
	Next,
} from '../components/Icons';

export default function Home() {
	return (
		<>
			<div data-bs-spy="scroll" data-bs-target="#about">
				<div className={styles.container}>
					<h1 className={styles.home}>Hi, I'm Joe...</h1>
					<p className={styles.slidingText}>
						your new{' '}
						<span>
							<ReactRotatingText
								typingInterval={140}
								deletingInterval={140}
								pause={2000}
								color="#82ADC9"
								items={['react', 'next', 'node']}
							/>
						</span>
						.js developer
					</p>
					<div className={styles.links}>
						<LinkIcons />
					</div>
					<div>
						<a href="#about">
							<button className="btn mt-4">
								<Arrow />
							</button>
						</a>
					</div>
				</div>
				<div className={styles.aboutMe}>
					<h1 className={styles.aboutTitle} id="about">
						about me
					</h1>
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
								junior Full Stack Web Developer who specializes in React, Node
								and Next.js. I love spending time building projects in
								javascript and learning about new technologies. I am currently
								looking for work. Send me a message, I would love to work with
								you in the near future!
							</p>
							<div>
								<div style={styles.skillSection}>
									<h4 className={styles.skillsTitle}>look at what i can do</h4>
									<div className={styles.skills}>
										<ul className={styles.skillsList}>
											<li>
												<Javascript /> javascript
											</li>
											<li>
												<React /> react.js
											</li>
											<li>
												<Javascript /> next.js
											</li>
										</ul>
										<ul className={styles.skillsList}>
											<li>
												<Node /> node.js
											</li>
											<li>
												<Typescript /> typescript
											</li>
											<li>
												<Mongodb /> mongo
											</li>
										</ul>
									</div>
								</div>
								<div>
									<h5 className={styles.contact}>
										lets build something together
									</h5>
									<a href="mailto:tojmccann@gmail.com">
										<div className={styles.contactName}>
											tojmccann@gmail.com
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
