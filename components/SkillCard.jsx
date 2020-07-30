import React from 'react';
import { Container } from "../styles/components/SkillCard";

const SkillCard = ({ image, children }) => {
	return (
		<Container data-aos="fade-in" data-aos-once={true} data-aos-easing="ease-in" data-aos-duration="300">
			<img src={image} alt="Le logo HTML5"/>
			{children}
		</Container>
	);
};

export default SkillCard;