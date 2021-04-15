import { useState, useEffect } from 'react';
import Head from 'next/head';

import useDarkMode from 'use-dark-mode';

import Navbar from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	// const [darkMode, setDarkMode] = useState(getMode());

	// const toggleMode = () => setDarkMode((prevMode) => !prevMode);

	// function getMode() {
	// 	if (typeof window !== 'undefined') {
	// 		const saveMode = JSON.parse(localStorage.getItem('darkMode'));

	// 		return saveMode || false;
	// 	}
	// }

	// useEffect(() => {
	// 	localStorage.setItem('darkMode', JSON.stringify(darkMode));
	// }, [darkMode]);

	const darkMode = useDarkMode(false);

	return (
		<>
			<Head>
				<title>Joe McCann</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar darkMode={darkMode} />
			<Component {...pageProps} />

			<style jsx global>{`
				:root {
					--bg-color: ${!darkMode.value ? '#fff' : '#202020'};
					--font-color: ${!darkMode.value ? '#202020' : '#fff'};
					--accent-color: #82adc9;
					--button-color: ${!darkMode.value ? '#fff' : '#82adc9'};
					--projects-title-color: ${!darkMode.value ? '#82adc9' : '#1c1c1c'};
					--card-color: ${!darkMode.value ? '#fff' : '#1c1c1c'};
					--card-description-color: ${!darkMode.value ? '#1c1c1c' : '#fff'};
				}
			`}</style>
		</>
	);
}

export default MyApp;
