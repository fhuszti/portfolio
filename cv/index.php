<?php require("../php-config/config-includes.php"); ?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $lang['META_TITLE']; ?></title>

        <meta name="Description" content="<?php echo $lang['META_DESC']; ?>" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="../assets/css/style.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="../assets/css/header.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body role="document">
        <?php require("../header.php"); ?>

        <div id="wrapper" class="container-fluid" role="main">
            <section class="row">
                <div class="col-sm-6 col-md-4 hiddenOverflow">
                    <a href="<?php echo $origin_url . "/cv/simple/"; ?>" title="<?php echo $lang['CV_SIMPLE_LINK_TITLE']; ?>">
                        <div id="ctaPart1" class="col-xs-12 ctaPart">
                            <h2 class="ctaPartTitle"><?php echo $lang['CV_SIMPLE']; ?></h2>
                        </div>
                    </a>
                </div>
                <div class="col-sm-6 col-md-4 hiddenOverflow">
                    <a href="<?php echo $origin_url . "/cv/interactive/"; ?>" title="<?php echo $lang['CV_INTERACTIVE_LINK_TITLE']; ?>">
                        <div id="ctaPart2" class="col-xs-12 ctaPart">
                            <h2 class="ctaPartTitle"><?php echo $lang['CV_INTERACTIVE']; ?></h2>
                        </div>
                    </a>
                </div>
                <div class="col-sm-12 col-md-4 hiddenOverflow">
                    <a href="<?php echo $origin_url; ?>" title="<?php echo $lang['HOME_LINK_TITLE']; ?>">
                        <div id="ctaPart3" class="col-xs-12 ctaPart">
                            <h2 class="ctaPartTitle"><?php echo $lang['HOME']; ?></h2>
                        </div>
                    </a>
                </div>
            </section>
        </div>

        <!-- Loading jQuery -->
        <script src="../assets/js/jquery-3.1.1.min.js"></script>

        <!-- Loading BootStrap JavaScript -->
        <script src="../bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
