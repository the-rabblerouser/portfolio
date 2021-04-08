import ReactRotatingText from 'react-rotating-text';
import LinkIcons from '../components/LinkIcons';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<div>
				<div className={styles.container}>
					<h1 className={styles.home}>Hi, I'm Joe</h1>
					<p className={styles.slidingText}>
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
					<div className={styles.links}>
						<LinkIcons />
					</div>
				</div>
			</div>
		</>
	);
}
