<?php require("php-config/langSelect.php"); ?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $lang['HOME_META_TITLE']; ?></title>

        <meta name="Description" content="<?php echo $lang['HOME_META_DESC']; ?>" />
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
                        <h2 class="ctaPartTitle"><?php echo $lang['HOME_CV_SIMPLE']; ?></h2>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 hiddenOverflow">
                    <div id="ctaPart2" class="col-xs-12 ctaPart">
                        <h2 class="ctaPartTitle"><?php echo $lang['HOME_CV_INTERACTIVE']; ?></h2>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 hiddenOverflow">
                    <div id="ctaPart3" class="col-xs-12 ctaPart">
                        <h2 class="ctaPartTitle"><?php echo $lang['HOME_PROJECTS']; ?></h2>
                    </div>
                </div>
            </section>

            <section class="row">
                <div class="col-xs-12">
                    <form method="post" action="formHandler.php" role="form" class="well">
                        <fieldset>
                            <legend><?php echo $lang['HOME_CONTACT']; ?></legend>

                            <div class="row" id="externalLinks">
                                <p class="col-sm-6">
                                    <a class="btn btn-default btn-block" href="https://github.com/fhuszti" title="<?php echo $lang['HOME_CONTACT_GITHUB']; ?>"><?php echo $lang['HOME_CONTACT_GITHUB']; ?></a>
                                </p>
                                <p class="col-sm-6">
                                    <a class="btn btn-default btn-block" href="https://www.linkedin.com/in/francoishuszti" title="<?php echo $lang['HOME_CONTACT_LINKEDIN']; ?>"><?php echo $lang['HOME_CONTACT_LINKEDIN']; ?></a>
                                </p>
                            </div>

                            <p><?php echo $lang['HOME_FORM_INFOS']; ?></p>

                            <div class="form-group col-sm-6">
                                <label for="name"><?php echo $lang['HOME_FORM_NAME']; ?></label>
                                <input type="text" placeholder="<?php echo $lang['HOME_FORM_NAME_PLACEHOLDER']; ?>" name="name" id="name" maxlength="50" required aria-required="true" class="form-control input-lg" />
                                <span class="help-block"><?php echo $lang['HOME_FORM_NAME_HELPER']; ?></span>
                            </div>
                            <div class="form-group col-sm-6">
                                <label for="email"><?php echo $lang['HOME_FORM_EMAIL']; ?></label>
                                <input type="email" placeholder="<?php echo $lang['HOME_FORM_EMAIL_PLACEHOLDER']; ?>" name="email" id="email" maxlength="50" required aria-required="true" class="form-control input-lg" />
                                <span class="help-block"><?php echo $lang['HOME_FORM_EMAIL_HELPER']; ?></span>
                            </div>
                        	<div class="form-group col-xs-12">
                                <label for="message"><?php echo $lang['HOME_FORM_MESSAGE']; ?></label>
                                <textarea placeholder="<?php echo $lang['HOME_FORM_MESSAGE_PLACEHOLDER']; ?>" name="message" id="message" required aria-required="true" class="form-control input-lg"></textarea>
                                <span class="help-block"><?php echo $lang['HOME_FORM_MESSAGE_HELPER']; ?></span>

                                <button type="submit" class="btn btn-primary btn-block" disabled><?php echo $lang['HOME_FORM_SUBMIT']; ?></button>
                                <span class="help-block"><?php echo $lang['HOME_FORM_SUBMIT_HELPER']; ?></span>
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

        <script src="assets/js/main.js"></script>
    </body>
</html>
