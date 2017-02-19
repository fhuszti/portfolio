<?php require("../php-config/config-includes.php"); ?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $lang['META_TITLE']; ?></title>

        <meta name="description" content="<?php echo $lang['META_DESC']; ?>" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- thumbnail picture to share on social medias -->
        <meta property="og:title" content="<?php echo $lang['META_TITLE']; ?>" />
        <meta property="og:description" content="<?php echo $lang['META_DESC']; ?>" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.fhuszti.com/" />
        <meta property="og:image" content="http://assets.fhuszti.com/big-logo.png" />
        <link rel="image_src" href="http://assets.fhuszti.com/big-logo.png" />

        <link rel="shortcut icon" href="http://assets.fhuszti.com/favicon.ico" type="image/x-icon" />

        <link href="<?php echo $origin_url . '/bootstrap/css/bootstrap.min.css'; ?>" rel="stylesheet">
        <link rel="stylesheet" href="<?php echo $origin_url . '/assets/css/style.css'; ?>">
        <link rel="stylesheet" href="<?php echo $origin_url . '/errors/assets/css/style.css'; ?>">
        <link rel="stylesheet" href="<?php echo $origin_url . '/assets/css/header.css'; ?>">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body role="document">
        <?php include_once("../php-config/analyticstracking.php") ?>
        <?php require("../header.php"); ?>

        <div id="wrapper" class="container" role="main">
            <header class="row">
                <span class="glyphicon glyphicon-ban-circle"></span>
                <h1><?php echo $lang['ERROR_404_TITLE']; ?></h1>
            </header>

            <hr />

            <div class="row">
                <p>
                    <?php echo $lang['ERROR_404_DESC']; ?>
                </p>
            </div>

            <div class="row">
                <p>
                    <?php echo $lang['ERROR_REDIRECT_BEFORE'] . ' <a href="' . $origin_url . '" title="' . $lang['ERROR_REDIRECT_LINK_TITLE'] . '">' . $lang['ERROR_REDIRECT_LINK'] . '</a> ' . $lang['ERROR_REDIRECT_AFTER']; ?>
                </p>
            </div>

            <img src="http://assets.fhuszti.com/errors/travolta.gif" alt='Travolta' id="travolta" />
        </div>

        <!-- Loading jQuery -->
        <script src="<?php echo $origin_url . '/assets/js/jquery-3.1.1.min.js'; ?>"></script>

        <!-- Loading BootStrap JavaScript -->
        <script src="<?php echo $origin_url . '/bootstrap/js/bootstrap.min.js'; ?>"></script>

        <script src="<?php echo $origin_url . '/errors/assets/js/errorPages.js'; ?>"></script>
    </body>
</html>
