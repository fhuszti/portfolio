import React, {useEffect, useRef, useState} from 'react';
import styles from '../../../scss/sub/bar_chart/Bar.module.scss';

const Bar = ({ css }) => {
	const [show, doShow] = useState(false);
	
	const barRef = useRef(null);
	
	useEffect(() => {
		const barPos = barRef.current.getBoundingClientRect().top;
		
		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;
			if (barPos < scrollPos)
				doShow(true);
		};
		
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return <div className={styles.bar} style={{ backgroundColor: css.backgroundColor, width: show ? css.width : '0' }} ref={barRef}/>;
};

export default Bar;