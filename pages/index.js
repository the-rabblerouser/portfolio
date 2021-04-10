import ReactRotatingText from 'react-rotating-text';
import LinkIcons from '../components/LinkIcons';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<div data-bs-spy="scroll" data-bs-target="#about">
				<div className={styles.container}>
					<h1 className={styles.home}>Hi, I'm Joe...</h1>
					<p className={styles.slidingText}>
						i'm your new{' '}
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
								{/* <div>About me</div> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className="bi bi-arrow-down"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
									/>
								</svg>
							</button>
						</a>
					</div>
				</div>
				<div className={styles.aboutMe}>
					<h1 className={styles.aboutTitle} id="about">
						About me
					</h1>
					<div className={styles.aboutDesc}>
						<div className={styles.aboutDesc1}>
							<img
								className={styles.img}
								src="./F6835DBC-1D6F-45E3-A9DA-14B29B32CDB9_1_105_c.jpeg"
								alt="Joe"
							/>
						</div>
						<div className={styles.aboutDesc2}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
								ipsam possimus nostrum error sit magni sequi. Officiis ratione
								rerum vero quos excepturi repellendus quibusdam commodi et ipsa
								deleniti recusandae provident perferendis eius sint quis,
								voluptatem iure eos aperiam nihil, culpa veritatis officia nobis
								vel. Delectus ipsum ea sint optio non.
							</p>
							<div className={styles.aboutDesc}>
								<div>
									<h5>Skills</h5>
									<ul className={styles.skills}>
										<li>react.js</li>
										<li>next.js</li>
										<li>node.js</li>
										<li>typescript</li>
									</ul>
								</div>
								<div className="contact-me">
									<h4>Lets build something together!</h4>
									<a href="mailto:tojmccann@gmail.com">
										<div className="email">tojmccann@gmail.com</div>
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
