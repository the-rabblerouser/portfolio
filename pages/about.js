import React from 'react';

import styles from '../styles/about.module.css';

const About = () => (
	<>
		<div id="about" className="about-me">
			<div className="container">
				<h2>About</h2>
				<div className="inner-about-me">
					<div className="img-par">
						<img
							src="./F6835DBC-1D6F-45E3-A9DA-14B29B32CDB9_1_105_c.jpeg"
							alt="Joe"
						/>
						<div>
							<p>
								Hi! My name is <span>Joe McCann</span>. I am a junior Full Stack
								Web Developer who specializes in React, Node and Next.js.
							</p>
							<p>
								I love spending time building javascript projects and learning
								about new technologies.
							</p>
							<p>
								I am currently looking for work. Send me a message, I would love
								to work with you in the near future!
							</p>
						</div>
					</div>

					<div className="contact-me">
						<h4>Lets build something together!</h4>
						<p>I'd love to be apart of your next project.</p>
						<a href="mailto:tojmccann@gmail.com">
							<div className="email">tojmccann@gmail.com</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		<style jsx>
			{`
				.about-me {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: var(--font-color);
					background: var(--projects-color);
				}
				.about-me h2 {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					font-weight: 500;
					font-size: 2.5rem;
					margin-bottom: 0.5em;
					color: var(--font-color);
				}
				.inner-about-me {
					padding: 1em 1em;
				}
				.inner-about-me img {
					height: 7em;
					width: 7em;
				}
				.img-par {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.img-par img {
					height: 15rem;
					width: 15rem;
					border-radius: 100%;
				}
				.img-par p {
					font-weight: 300;
					margin-left: 1.5em;
					font-size: 20px;
					line-height: 1.8;
				}
				.img-par p span {
					color: var(--accent-color);
				}
				.contact-me {
					display: flex;
					flex-direction: column;
				}
				.contact-me h4 {
					font-weight: 500;
					font-size: 2rem;
					margin-bottom: 0;
				}
				.contact-me p {
					font-size: 15px;
					font-weight: 300;
					margin-top: 0;
				}
				.email {
					color: var(--font-color);
					font-size: 18px;
					width: 9.8em;
					margin-top: 1em;
					padding-bottom: 5px;
					border-bottom: 2px solid var(--accent-color);
				}
				//  ***** Media Queries *****

				@media (max-width: 768px) {
					.about-me {
						height: 100vh;
					}
					.img-par {
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						justify-content: flex-start;
					}
					.container {
						margin-bottom: 7em;
					}
					.img-par img {
						height: 13em;
						width: 13em;
					}
					.img-par p {
						font-size: 15px;
						margin-left: 0;
						line-height: 1.3;
					}
					.contact-me h4 {
						font-weight: 500;
						font-size: 1.5rem;
						margin-bottom: 0;
					}
				}
			`}
		</style>
	</>
);

export default About;
