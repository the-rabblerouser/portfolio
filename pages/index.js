import ReactRotatingText from 'react-rotating-text';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<div className="home-page-hero">
				<div className={styles.container}>
					<h1 className="hero-text ">Hi, I'm Joe</h1>
					<div className="sliding-text">
						<p>
							and i'm your next{' '}
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
					</div>
					<div className="links">{/* <LinkIcons /> */}</div>
				</div>
			</div>

			<style jsx>
				{`
					.hero-text {
						font-size: 80px;
						font-weight: 600;
						margin: 0;
						color: var(--font-color);
					}
					.sliding-text p {
						font-size: 33px;
						font-family: 'Inconsolata', monospace;
						font-weight: 200;
						color: var(--font-color);
					}
					.react-rotating-text-cursor {
						animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99)
							0s infinite;
					}
					.links {
						display: flex;
						justify-content: flex-end;
						margin-top: 2em;
						margin-right: 2em;
					}
					//  ***** Media Queries *****

					@media (max-width: 768px) {
						.hero-text {
							font-size: 60px;
						}
						.sliding-text p {
							font-size: 15px;
							font-weight: 300;
						}
					}
					@media (max-width: 812px) {
					}
				`}
			</style>
		</>
	);
}
