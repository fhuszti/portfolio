<?php
namespace App\Service\Mailer;

use App\Entity\Email;
use Symfony\Component\Translation\TranslatorInterface;

class MailerNotificator {
	protected $mailer;

	protected $twig;

	protected $translator;

	public function __construct(\Swift_Mailer $mailer, \Twig_Environment $twig, TranslatorInterface $translator) {
		$this->mailer = $mailer;
		$this->twig = $twig;
		$this->translator = $translator;
	}







	/**
	 * MAIL SENDER
	 * -----------
	 */

	//render an html template
	public function renderTemplate($entity, $imgUrl) {
		return $this->twig->render(
			'email/contact.html.twig',
			array(
				'entity' => $entity,
				'imgUrl' => $imgUrl
			)
		);
	}

	//send an email to the client containing his tickets
	public function sendEmail(Email $entity) {
		$mail = new \Swift_Message();

		$imgUrl = $mail->embed(\Swift_Image::fromPath('http://assets.fhuszti.tech/logo.png'));
		$body = $this->renderTemplate($entity, $imgUrl);
		
		$mail->setSubject( '[Portfolio contact form] '.$entity->getSubject() )
			 ->setFrom('contact@fhuszti.tech')
			 ->setTo('f.huszti@gmail.com')
			 ->setBody(
				 $body,
				 'text/html'
			 );

		$this->mailer->send($mail);
	}
	
	/**
	 * -----------
	 */
}
