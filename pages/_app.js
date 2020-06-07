import React, {useEffect} from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import '../scss/index.scss';

const CustomApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// kick off the polyfill!
		smoothscroll.polyfill();
		// starts AnimateOnScroll
		AOS.init();
	}, []);
	
	return <Component {...pageProps} />;
};

export default CustomApp;