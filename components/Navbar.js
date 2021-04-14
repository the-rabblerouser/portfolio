import React from 'react';
import Link from 'next/link';

import { Sun, Moon } from '../components/Icons';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ darkMode, toggleMode }) => {
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
								<a className={styles.links}>projects</a>
							</Link>
							<Link href="/#about">
								<a className={styles.links}>about</a>
							</Link>
							<Link href="/contact">
								<a className={styles.links}>contact</a>
							</Link>
							<button className={styles.button} onClick={toggleMode}>
								{darkMode ? <Sun /> : <Moon />}
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
