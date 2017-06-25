<?php
namespace AppBundle\Entity;

use Symfony\Component\Validator\Constraints as Assert;

class Email
{
    /**
     * @var string
     *
     * @Assert\NotBlank(
     *     message = "email.name.empty"
     * )
     * @Assert\Type("string")
     * @Assert\Length(
     *      min = 2,
     *      minMessage = "email.name.min",
     *      max = 100,
     *      maxMessage = "email.name.max"
     * )
     */
    private $name;

    /**
     * @var string
     *
     * @Assert\NotBlank(
     *     message = "email.email.empty"
     * )
     * @Assert\Type("string")
     * @Assert\Email(
     *     message = "email.email.message"
     * )
     */
    private $email;

    /**
     * @var string
     *
     * @Assert\NotBlank(
     *     message = "email.content.empty"
     * )
     * @Assert\Type("string")
     * @Assert\Length(
     *      min = 1,
     *      minMessage = "email.content.message"
     * )
     */
    private $content;


    /**
     * Set name
     *
     * @param string $name
     *
     * @return Email
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     * @return Email
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set content
     *
     * @param string $content
     *
     * @return Email
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }
}
