import React from 'react';
import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

const Navbar = ({ aboutLink }) => {
	console.log(aboutLink);
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.container}>
					<div className={styles.navbarAlignment}>
						<Link href="/">
							<a className={styles.title}>joemccann.dev</a>
						</Link>
						<div className={styles.sectionNavs}>
							<Link href="/projects">
								<a className={styles.links}>Projects</a>
							</Link>
							<Link href={aboutLink}>
								<a className={styles.links}>About</a>
							</Link>
							{/* <button className={styles.button} onClick={toggleMode}>
								{!darkMode ? <Brightness3 /> : <WbSunny />}
								<i className={styles.icons}>
									{!darkMode ? 'brightness_2' : 'brightness_high'}
								</i>
							</button> */}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
