import React from 'react';
import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.navbarAlignment}>
					<Link href="/">
						<a className={styles.title}>
							<div className={styles.logo}>J</div>
						</a>
					</Link>
					<div>
						<Link href="/projects">
							<a className={styles.links}>projects</a>
						</Link>
						<Link href="mailto:tojmccann@gmail.com">
							<a className={styles.links}>contact</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
