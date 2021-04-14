import React from 'react';
import LinkIcons from './LinkIcons';

const Footer = ({ position }) => {
	const year = new Date().getFullYear().toString();

	return (
		<>
			<footer>
				<div className="container">
					<div className="footer-content">
						<p>joe mccann {year}</p>
						<div className="link">
							<LinkIcons />
						</div>
					</div>
				</div>
			</footer>
			<style jsx>
				{`
					.container {
						max-width: 775px;
					}
					.footer-content {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-family: 'Inconsolata', monospace;
						font-size: 14px;
						margin-bottom: 0.2rem;
					}
					footer p {
						color: var(--font-color);
					}
				`}
			</style>
		</>
	);
};
export default Footer;
