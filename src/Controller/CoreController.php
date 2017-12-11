<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Service\Mailer\MailerNotificator;
use App\Form\Type\ContactType;
use App\Entity\Email;

class CoreController extends Controller
{
    /**
     * @Route("/", name="core_home")
     * @Method("GET")
     */
    public function index()
    {
        $email = new Email();

        $form = $this->createForm(ContactType::class, $email);

        return $this->render('core/index.html.twig', array(
            'emailForm' => $form->createView()
        ));
    }

    /**
     * @Route("/", name="core_mailer")
     * @Method("POST")
     */
    public function mailer(Request $request, MailerNotificator $mailer)
    {
        //allow use of this action for AJAX only
        if (!$request->isXmlHttpRequest()) {
            return new JsonResponse(array('message' => 'You can only access this using Ajax!'), 400);
        }

        $email = new Email();

        $form = $this->createForm(ContactType::class, $email);

        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $mailer->sendEmail($email);

            return new JsonResponse(array(), 200);
        }
        else {
            return new JsonResponse(array(), 400);
        }
    }







    /**
     * @Route("/cv", name="core_resume")
     * @Route("cv", name="core_resume")
     * @Route("/cv/", name="core_resume")
     * @Route("cv/", name="core_resume")
     * @Method("GET")
     */
    public function resume()
    {
        return $this->render('core/resume.html.twig');
    }







    /**
     * @Route("/cv/interactive", name="core_interactive")
     * @Route("/cv/interactive/", name="core_interactive")
     * @Method("GET")
     */
    public function interactive()
    {
        return $this->render('core/interactive.html.twig');
    }

    /**
     * @Route("/cv/interactive/start", name="core_start")
     * @Method("GET")
     */
    public function startGame()
    {
        $response = new Response($this->renderView('core/interactive_external/interactive.js.twig'));
        
        $response->headers->set('Content-Type','text/javascript');
        
        return $response;
    }

    /**
     * @Route("/cv/interactive/lang_fr", name="core_interactive_fr")
     * @Method("GET")
     */
    public function langFr()
    {
        $response = new Response($this->renderView('core/interactive_external/text.fr.json.twig'));
        
        $response->headers->set('Content-Type','application/json');
        
        return $response;
    }

    /**
     * @Route("/cv/interactive/lang_en", name="core_interactive_en")
     * @Method("GET")
     */
    public function langEn()
    {
        $response = new Response($this->renderView('core/interactive_external/text.en.json.twig'));
        
        $response->headers->set('Content-Type','application/json');
        
        return $response;
    }







    /**
     * @Route("/projects", name="core_projects")
     * @Route("/projects/", name="core_projects")
     * @Method("GET")
     */
    public function projects()
    {
        return $this->render('core/projects.html.twig');
    }
}
