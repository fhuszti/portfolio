import React, {useEffect} from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlobalStyles from "../styles/global/GlobalStyles";

const CustomApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// kick off the polyfill!
		smoothscroll.polyfill();
		// starts AnimateOnScroll
		AOS.init();
	}, []);
	
	return (
		<React.Fragment>
			<GlobalStyles/>
			<Component {...pageProps} />
		</React.Fragment>
	);
};

export default CustomApp;