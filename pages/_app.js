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
				<title>Joe McCann</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Component {...pageProps} />

			<style jsx global>{`
				:root {
					--bg-color: ${!darkMode ? '#fff' : '#202020'};
					--font-color: ${!darkMode ? '#202020' : '#fff'};
					--accent-color: #82adc9;
					--button-color: ${!darkMode ? '#fff' : '#82adc9'};
				}
			`}</style>
		</>
	);
}

export default MyApp;
