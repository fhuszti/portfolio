<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\Type\ContactType;
use AppBundle\Entity\Email;

class CoreController extends Controller
{
    /**
     * @Route("/", name="core_home")
     * @Method("GET")
     */
    public function indexAction()
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
    public function mailerAction(Request $request)
    {
        //allow use of this action for AJAX only
        if (!$request->isXmlHttpRequest()) {
            return new JsonResponse(array('message' => 'You can only access this using Ajax!'), 400);
        }

        $email = new Email();

        $form = $this->createForm(ContactType::class, $email);

        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $mailer = $this->get('core.mailer');
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
    public function resumeAction()
    {
        return $this->render('core/resume.html.twig');
    }







    /**
     * @Route("/cv/interactive", name="core_interactive")
     * @Route("/cv/interactive/", name="core_interactive")
     * @Method("GET")
     */
    public function interactiveAction()
    {
        return $this->render('core/interactive.html.twig');
    }

    /**
     * @Route("/cv/start", name="core_start")
     * @Method("GET")
     */
    public function startGameAction()
    {
        $response = new Response($this->renderView('core/interactive_external/interactive.js.twig'));
        
        $response->headers->set('Content-Type','text/javascript');
        
        return $response;
    }

    /**
     * @Route("/cv/lang_fr", name="core_interactive_fr")
     * @Method("GET")
     */
    public function langFrAction()
    {
        $response = new Response($this->renderView('core/interactive_external/text.fr.json.twig'));
        
        $response->headers->set('Content-Type','application/json');
        
        return $response;
    }

    /**
     * @Route("/cv/lang_en", name="core_interactive_en")
     * @Method("GET")
     */
    public function langEnAction()
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
    public function projectsAction()
    {
        return $this->render('core/projects.html.twig');
    }
}
