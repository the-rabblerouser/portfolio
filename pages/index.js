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
									class="bi bi-arrow-down"
									viewBox="0 0 16 16">
									<path
										fill-rule="evenodd"
										d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
									/>
								</svg>
							</button>
						</a>
					</div>
				</div>
				<div className={styles.container} id="about">
					<h1>About me</h1>
				</div>
			</div>
		</>
	);
}
