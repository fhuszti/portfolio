<?php

namespace AppBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name', TextType::class, array(
                    'label' => 'email.name.label',
                    'label_attr' => array(
                        'class' => 'col-xs-12 control-label'
                    ),
                    'attr' => array(
                        'class' => 'form-control input-lg',
                        'placeholder' => 'email.name.placeholder',
                        'minlength' => 2,
                        'maxlength' => 100,
                        'aria-required' => true,
                        'autocomplete' => 'off'
                    ),
                    'translation_domain' => 'validators'
                ))
                ->add('email', EmailType::class, array(
                    'label' => 'email.email.label',
                    'label_attr' => array(
                        'class' => 'col-xs-12 control-label'
                    ),
                    'attr' => array(
                        'class' => 'form-control input-lg',
                        'placeholder' => 'email.email.placeholder',
                        'aria-required' => true,
                        'autocomplete' => 'off'
                    ),
                    'translation_domain' => 'validators'
                ))
                ->add('content', TextareaType::class, array(
                    'label' => 'email.content.label',
                    'label_attr' => array(
                        'class' => 'col-xs-12 control-label'
                    ),
                    'attr' => array(
                        'class' => 'form-control input-lg',
                        'placeholder' => 'email.content.placeholder',
                        'minlength' => 1,
                        'aria-required' => true,
                        'autocomplete' => 'off'
                    ),
                    'translation_domain' => 'validators'
                ));
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Email'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_email';
    }
}
