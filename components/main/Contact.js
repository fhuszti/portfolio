import React, { useEffect, useState } from 'react';
import { Container, Figure, HiddenInput } from "../../styles/components/Contact";
import Tooltip from "../Tooltip";
import { SmallText, Text } from "../../styles/global";
import colors from "../../styles/helpers/colors";

const Contact = () => {
	const [isTooltipVisible, setTooltipVisible] = useState(false);
	const [tooltipLinkCoords, setTooltipLinkCoords] = useState({});
	
	useEffect(() => {
		let timeout;
		//si la tooltip vient d'être affichée, on met un timeout de 5sec avant qu'elle disparaisse
		if (isTooltipVisible)
			timeout = setTimeout(() => setTooltipVisible(false), 5000);
		
		return () => clearTimeout(timeout);
	}, [isTooltipVisible]);
	
	const copyEmailToClipboard = tooltipLink => {
		const hiddenInput = document.querySelector("#emailHiddenInput");
		//Sélectionne le contenu de l'input
		hiddenInput.select();
		hiddenInput.setSelectionRange(0, 99); //pour certains mobiles
		//Copie le texte dans le clipboard
		document.execCommand("copy");
		//et on affiche la tooltip pour confirmer
		updateTooltipCoords(tooltipLink);
		setTooltipVisible(!isTooltipVisible);
	};
	
	const updateTooltipCoords = tooltipLink => {
		const rect = tooltipLink.getBoundingClientRect();
		setTooltipLinkCoords({ left: rect.x + rect.width / 2, top: rect.y + window.scrollY });
	};
	
	return (
		<Container>
			<a href="https://github.com/fhuszti" title="Mon profil GitHub" target="_blank" className="footerChild">
				<Figure>
					<img src="images/github.png" alt="GitHub"/>
				</Figure>
			</a>
			
			<section className="footerChild">
				<Text className="uppercase" color={colors.white} onClick={e => copyEmailToClipboard(e.target)}>contactez-moi</Text>
				<HiddenInput id="emailHiddenInput" value="f.huszti@gmail.com" readOnly aria-hidden="true" tabIndex='-1'/>
				{isTooltipVisible &&
				<Tooltip coords={tooltipLinkCoords}>
					<SmallText color={colors.white}>
						Mon adresse email <span className="italic">f.huszti@gmail.com</span> a été copiée avec succès
					</SmallText>
					<div className="tooltipArrow"/>
				</Tooltip>
				}
			</section>
			
			<a href="https://www.linkedin.com/in/francoishuszti/" title="Mon profil LinkedIn" target="_blank" className="footerChild">
				<Figure>
					<img src="images/linkedin.png" alt="LinkedIn"/>
				</Figure>
			</a>
		</Container>
	);
};

export default Contact;