import React from 'react';
import '../scss/index.scss';

const CustomApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
};

export default CustomApp;