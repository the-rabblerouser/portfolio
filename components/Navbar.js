import React from 'react';
import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.container}>
					<div className={styles.navbarAlignment}>
						<Link href="/">
							<a className={styles.title}>joemccann.tech</a>
						</Link>
						<div className={styles.sectionNavs}>
							<Link href="/#about">
								<a className={styles.links}>about</a>
							</Link>
							<Link href="/projects">
								<a className={styles.links}>projects</a>
							</Link>
							<Link href="/contact">
								<a className={styles.links}>contact</a>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
