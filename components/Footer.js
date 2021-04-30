import React from 'react';

import { Github, LinkedIn } from './Icons';

const Footer = () => {
	const year = new Date().getFullYear().toString();

	return (
		<>
			<footer>
				<div className="footerContent">
					<p>joemccann.tech {year}</p>
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
					.footerContent {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-family: var(--title-font);
						font-size: 14px;
						margin-bottom: 0.2rem;
					}

					footer p {
						color: var(--title-color);
					}

					.icons {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						width: 4.5rem;
						margin-bottom: 1rem;
						color: var(--title-color);
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
