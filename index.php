<?php require("php-config/langSelect.php"); ?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $lang['META_TITLE']; ?></title>

        <meta name="Description" content="<?php echo $lang['META_DESC']; ?>" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/header.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body role="document">
        <?php require("header.php"); ?>

        <div id="wrapper" class="container-fluid" role="main">
            <section class="row">
                <div class="col-sm-6 col-md-4 hiddenOverflow">
                    <div id="ctaPart1" class="col-xs-12 ctaPart">
                        <h2 class="ctaPartTitle"><?php echo $lang['CV_SIMPLE']; ?></h2>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 hiddenOverflow">
                    <div id="ctaPart2" class="col-xs-12 ctaPart">
                        <h2 class="ctaPartTitle"><?php echo $lang['CV_INTERACTIVE']; ?></h2>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 hiddenOverflow">
                    <div id="ctaPart3" class="col-xs-12 ctaPart">
                        <h2 class="ctaPartTitle"><?php echo $lang['HOMEWORK']; ?></h2>
                    </div>
                </div>
            </section>

            <section class="row" id="skillsRow">
                <h3><?php echo $lang['SKILLS']; ?></h3>

                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5" title="HTML5"><img src="assets/img/html5.png" alt="HTML5" /></a>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://developer.mozilla.org/en/docs/Web/CSS/CSS3" title="CSS3"><img src="assets/img/css3.png" alt="CSS3" /></a>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://www.javascript.com/" title="JavaScript"><img src="assets/img/javascript.png" alt="JavaScript" /></a>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://jquery.com/" title="jQuery"><img src="assets/img/jquery.png" alt="jQuery" /></a>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://secure.php.net/" title="PHP"><img src="assets/img/php.png" alt="PHP" /></a>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://www.mysql.com/" title="MySQL"><img src="assets/img/mysql.png" alt="MySQL" /></a>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://wordpress.org/" title="WordPress"><img src="assets/img/wordpress.png" alt="WordPress" /></a>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://getbootstrap.com/" title="BootStrap"><img src="assets/img/bootstrap.png" alt="BootStrap" /></a>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-2">
                    <a href="https://phaser.io/" title="Phaser"><img src="assets/img/phaser.png" alt="Phaser" /></a>
                </div>
                <div class="col-xs-12 col-sm-9 col-md-6">
                    <p><?php echo $lang['SKILLS_LEARNING']; ?></p>
                </div>
            </section>

            <section class="row">
                <div class="col-xs-12">
                    <!-- no action attr as the form is managed via AJAX -->
                    <form method="post" id="contactForm" role="form" class="well">
                        <fieldset>
                            <legend><?php echo $lang['CONTACT']; ?></legend>

                            <div class="row" id="externalLinks">
                                <p class="col-sm-6">
                                    <a class="btn btn-default btn-block" href="https://github.com/fhuszti" title="<?php echo $lang['CONTACT_GITHUB']; ?>"><?php echo $lang['CONTACT_GITHUB']; ?></a>
                                </p>
                                <p class="col-sm-6">
                                    <a class="btn btn-default btn-block" href="https://www.linkedin.com/in/francoishuszti" title="<?php echo $lang['CONTACT_LINKEDIN']; ?>"><?php echo $lang['CONTACT_LINKEDIN']; ?></a>
                                </p>
                            </div>

                            <div class="alert alert-danger col-xs-12" id="formError">
                                <p><?php echo $lang['FORM_ERROR']; ?></p>
                            </div>
                            <div class="alert alert-danger col-xs-12" id="sendingError">
                                <p><?php echo $lang['FORM_SENDING_ERROR']; ?></p>
                            </div>

                            <p><?php echo $lang['FORM_INFOS']; ?></p>

                            <div class="form-group col-sm-6">
                                <label for="name"><?php echo $lang['FORM_NAME']; ?></label>
                                <input type="text" placeholder="<?php echo $lang['FORM_NAME_PLACEHOLDER']; ?>" name="name" id="name" maxlength="50" autocomplete="off" required aria-required="true" class="form-control input-lg" />
                                <p class="centerHelp">
                                    <span class="help-block" id="nameHelp"><?php echo $lang['FORM_NAME_HELPER']; ?></span>
                                </p>
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="email"><?php echo $lang['FORM_EMAIL']; ?></label>
                                <input type="email" placeholder="<?php echo $lang['FORM_EMAIL_PLACEHOLDER']; ?>" name="email" id="email" maxlength="50" autocomplete="off" required aria-required="true" class="form-control input-lg" />
                                <p class="centerHelp">
                                    <span class="help-block" id="emailHelp"><?php echo $lang['FORM_EMAIL_HELPER']; ?></span>
                                </p>
                            </div>
                        	<div class="form-group col-xs-12">
                                <label for="message"><?php echo $lang['FORM_MESSAGE']; ?></label>
                                <textarea placeholder="<?php echo $lang['FORM_MESSAGE_PLACEHOLDER']; ?>" name="message" id="message" autocomplete="off" required aria-required="true" class="form-control input-lg"></textarea>
                                <p class="centerHelp">
                                    <span class="help-block" id="messageHelp"><?php echo $lang['FORM_MESSAGE_HELPER']; ?></span>
                                </p>
                        	</div>

                            <button type="submit" class="btn btn-primary btn-block" id="submitButton"><?php echo $lang['FORM_SUBMIT']; ?></button>

                            <div class="alert alert-success col-xs-12" id="formThanks">
                                <p><?php echo $lang['FORM_THANKS']; ?></p>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        </div>

        <!-- Loading jQuery -->
        <script src="assets/js/jquery-3.1.1.min.js"></script>

        <!-- Loading BootStrap JavaScript -->
        <script src="bootstrap/js/bootstrap.min.js"></script>

        <script src="assets/js/formHandler.js"></script>
    </body>
</html>
