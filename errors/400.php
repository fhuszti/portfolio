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
        <?php include_once("../php-config/analyticstracking.php") ?>
        <?php require("../header.php"); ?>

        <div id="wrapper" class="container" role="main">
            <header class="row">
                <span class="glyphicon glyphicon-ban-circle"></span>
                <h1><?php echo $lang['ERROR_400_TITLE']; ?></h1>
            </header>

            <hr />

            <div class="row">
                <p>
                    <?php echo $lang['ERROR_400_DESC']; ?>
                </p>
            </div>

            <div class="row">
                <p>
                    <?php echo $lang['ERROR_REDIRECT_BEFORE'] . ' <a href="' . $origin_url . '" title="' . $lang['ERROR_REDIRECT_LINK_TITLE'] . '">' . $lang['ERROR_REDIRECT_LINK'] . '</a> ' . $lang['ERROR_REDIRECT_AFTER']; ?>
                </p>
            </div>

            <img src='assets/img/travolta.gif' alt='Travolta' id="travolta" />
        </div>

        <!-- Loading jQuery -->
        <script src="../assets/js/jquery-3.1.1.min.js"></script>

        <!-- Loading BootStrap JavaScript -->
        <script src="../bootstrap/js/bootstrap.min.js"></script>

        <script src="assets/js/errorPages.js"></script>
    </body>
</html>
