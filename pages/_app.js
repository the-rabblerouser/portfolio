import { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setDarkMode(true);
		}
	}, [darkMode]);

	return (
		<>
			<Head>
				<title>joemccann.tech</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald"
					rel="stylesheet"
				/>
				<link
					rel="preload"
					href="/api/projects"
					as="fetch"
					crossorigin="anonymous"
				/>
			</Head>
			<Navbar />
			<Component {...pageProps} />

			<style jsx global>{`
				:root {
					--bg-color: ${!darkMode ? '#fff' : '#202020'};
					--title-color: ${!darkMode ? '#202020' : '#fff'};
					--font-color: ${!darkMode ? 'rgb(105, 105, 105)' : '#fff'};
					--accent-color: #82adc9;
					--button-color: ${!darkMode ? '#fff' : '#82adc9'};
					--title-font: font-family: 'Oswald', sans-serif;
					--body-font:  font-family: 'Cardo', serif;
				}
			`}</style>
		</>
	);
}

export default MyApp;
