import React from 'react';
import Head from 'next/head'
import Hero from "../components/main/Hero";
import Contact from "../components/main/Contact";
import Skills from "../components/main/Skills";
import Projects from "../components/main/Projects";

const Home = () => {
	return (
		<React.Fragment>
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="description"
					  content="Site portfolio de François Huszti, développeur web. Les différentes versions de mon C.V. et mes projets sont tous ici."/>
				<link rel="icon" href="favicon.ico"/>
				
				<meta property="og:title" content="Portfolio en ligne - François Huszti, développeur web"/>
				<meta property="og:description"
					  content="Site portfolio de François Huszti, développeur web. Les différentes versions de mon C.V. et mes projets sont tous ici."/>
				<meta property="og:url" content="%PUBLIC_URL%"/>
				<meta property="og:site_name" content="François Huszti - Portfolio"/>
				<meta property="og:type" content="website"/>
				<meta property="og:image" content="%PUBLIC_URL%/big-logo-fr.png"/>
				
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:title" content="Portfolio en ligne - François Huszti, développeur web"/>
				<meta name="twitter:description"
					  content="Site portfolio de François Huszti, développeur web. Les différentes versions de mon C.V. et mes projets sont tous ici."/>
				<meta name="twitter:site" content="François Huszti - Portfolio"/>
				<meta name="twitter:creator" content="François Huszti"/>
				<meta name="twitter:image" content="%PUBLIC_URL%/big-logo-fr.png"/>
				
				<title>Portfolio en ligne - François Huszti, développeur web</title>
			</Head>
			
			<main className="main-wrapper">
				<Hero/>
				<Skills/>
				<Projects/>
				<Contact/>
			</main>
		</React.Fragment>
	);
};

export default Home;
