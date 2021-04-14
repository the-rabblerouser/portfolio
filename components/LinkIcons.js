import React from 'react';

import { Github, LinkedIn } from './Icons';

const LinkIcons = () => {
	return (
		<>
			<div className="icons">
				<a href="https://github.com/the-rabblerouser">
					<Github />
				</a>
				<a href="https://www.linkedin.com/in/joseph-mccann-77402a88/">
					<LinkedIn />
				</a>
			</div>
			<style jsx>
				{`
					.icons {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						width: 4.5rem;
						margin-bottom: 1rem;
						color: var(--accent-color);
					}

					.icons a:hover {
						transition: color 0.2s ease;
						color: #82adc9;
					}
				`}
			</style>
		</>
	);
};

export default LinkIcons;
