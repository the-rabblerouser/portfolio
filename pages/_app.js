import { useState } from 'react';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const [darkMode, setDarkMode] = useState();
	return (
		<>
			<Head>
				<title>Joe McCann</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
			<style jsx global>{`
				:root {
					--bg-color: ${!darkMode ? '#fff' : '#202020'};
					--font-color: ${!darkMode ? '#202020' : '#fff'};
					--accent-color: #82adc9;
					--projects-title-color: ${!darkMode ? '#82adc9' : '#1c1c1c'};
					--projects-color: ${!darkMode ? '#fff' : '#1c1c1c'};
					--card-color: ${!darkMode ? '#fff' : '#1c1c1c'};
					--card-description-color: ${!darkMode ? '#1c1c1c' : '#fff'};
				}
			`}</style>
		</>
	);
}

export default MyApp;
