import React from 'react';

import { Github, LinkedIn } from './Icons';

const Footer = () => {
	const year = new Date().getFullYear().toString();

	return (
		<>
			<footer className="container">
				<div className="footerContent">
					<p>joe mccann {year}</p>
					<div className="link">
						<div className="icons">
							<a href="https://github.com/the-rabblerouser">
								<Github />
							</a>
							<a href="https://www.linkedin.com/in/joseph-mccann-77402a88/">
								<LinkedIn />
							</a>
						</div>
					</div>
				</div>
			</footer>
			<style jsx>
				{`
					.container {
						max-width: 800px;
					}

					.footerContent {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-family: var(--title-font);
						font-size: 14px;
						margin-bottom: 0.2rem;
					}

					footer p {
						color: var(--font-color);
					}

					.icons {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						width: 4.5rem;
						margin-bottom: 1rem;
						color: var(--font-color);
					}

					.icons a:hover {
						transition: color 0.2s ease;
						color: var(--accent-color);
					}
				`}
			</style>
		</>
	);
};
export default Footer;
