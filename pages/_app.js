import React, {useEffect} from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from "styled-components";
import fonts from '../styles/helpers/fonts';

const GlobalStyles = createGlobalStyle`
  	@font-face {
	  font-family: "VCR OSD Mono";
	  src: url('../../fonts/vcr_osd_mono/vcr_osd_mono.ttf');
	}
	
	html {
		font-family: ${fonts.main};
		scroll-behavior: smooth;
	}
`;

const CustomApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// kick off the polyfill!
		smoothscroll.polyfill();
		// starts AnimateOnScroll
		AOS.init();
	}, []);
	
	return (
		<React.Fragment>
			<Normalize/>
			<GlobalStyles/>
			<Component {...pageProps} />
		</React.Fragment>
	);
};

export default CustomApp;