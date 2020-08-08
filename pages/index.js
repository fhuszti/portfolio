import React from 'react';
import Head from 'next/head'
import 'aos/dist/aos.js';
import Hero from "../components/pages/home/Hero";
import Contact from "../components/pages/home/Contact";
import Skills from "../components/pages/home/Skills";
import Projects from "../components/pages/home/Projects";

const Home = () => {
	return (
		<React.Fragment>
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="description"
					  content="Site portfolio de François Huszti, développeur web. Les différentes versions de mon C.V. et mes projets sont tous ici."/>
				<link rel="icon" href="favicon.ico"/>
				
				<meta property="og:title" content="Portfolio - François Huszti, développeur web"/>
				<meta property="og:description"
					  content="Site portfolio de François Huszti, développeur web. Les différentes versions de mon C.V. et mes projets sont tous ici."/>
				<meta property="og:url" content={process.env.NEXT_PUBLIC_URL}/>
				<meta property="og:site_name" content="François Huszti - Portfolio"/>
				<meta property="og:type" content="website"/>
				<meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/big-logo-fr.png`}/>
				
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:title" content="Portfolio - François Huszti, développeur web"/>
				<meta name="twitter:description"
					  content="Site portfolio de François Huszti, développeur web. Les différentes versions de mon C.V. et mes projets sont tous ici."/>
				<meta name="twitter:site" content="François Huszti - Portfolio"/>
				<meta name="twitter:creator" content="François Huszti"/>
				<meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/big-logo-fr.png`}/>
				
				<title>Portfolio - François Huszti, développeur web</title>
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
