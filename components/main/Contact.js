import React from 'react';
import { Container, Figure } from "../../styles/components/Contact";

const Contact = () => {
	return (
		<Container>
			<Figure>
				<a href="https://github.com/fhuszti" title="Mon profil GitHub" target="_blank">
					<img src="images/github.png" alt="GitHub"/>
				</a>
			</Figure>
			<p>f.huszti@gmail.com</p>
			<Figure>
				<a href="https://www.linkedin.com/in/francoishuszti/" title="Mon profil LinkedIn" target="_blank">
					<img src="images/linkedin.png" alt="LinkedIn"/>
				</a>
			</Figure>
		</Container>
	);
};

export default Contact;