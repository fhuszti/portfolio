import React, {useEffect} from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import '../scss/index.scss';

const CustomApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// kick off the polyfill!
		smoothscroll.polyfill();
	}, []);
	
	return <Component {...pageProps} />;
};

export default CustomApp;