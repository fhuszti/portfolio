<?php require("../../php-config/langSelect.php"); ?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $lang['META_TITLE']; ?></title>

        <meta name="Description" content="<?php echo $lang['META_DESC']; ?>" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">

        <!-- thumbnail picture to share on social medias -->
        <meta property="og:title" content="<?php echo $lang['META_TITLE']; ?>" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.fhuszti.com/cv/interactive/" />
        <meta property="og:image" content="http://www.fhuszti.com/cv/interactive/assets/img/thumbnailInteractiveResume.png" />
        <link rel="image_src" href="assets/img/thumbnailInteractiveResume.png" />

        <link href="../../bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="../../assets/css/style.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="../../assets/css/header.css">
        <link rel="stylesheet" href="assets/css/small-header.css">

        <!-- fonts-->
        <link href='http://fonts.googleapis.com/css?family=Berkshire+Swash' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=VT323' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Cabin+Sketch' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Cagliostro' rel='stylesheet' type='text/css'>

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

        <script type="text/javascript" src="assets/js/game/phaser.min.js"></script>
        <script type="text/javascript" src="assets/js/game/Boot.js"></script>
        <script type="text/javascript" src="assets/js/game/Preload.js"></script>
        <script type="text/javascript" src="assets/js/game/Languages.js"></script>
        <script type="text/javascript" src="assets/js/game/Frameworks.js"></script>
        <script type="text/javascript" src="assets/js/game/Others.js"></script>
        <script type="text/javascript" src="assets/js/game/Formation.js"></script>
        <script type="text/javascript" src="assets/js/game/Contact.js"></script>
        <script type="text/javascript" src="assets/js/game/Experience.js"></script>

        <!-- Webfont loader, so we can safely use it later in the app -->
        <script>
        	(function(d) {
          	    var wf = d.createElement('script'), s = d.scripts[0];

          	    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
          	    s.parentNode.insertBefore(wf, s);
        	})(document);
        </script>
    </head>

    <body role="document">
        <?php require("../../header.php"); ?>

        <div id="wrapper" class="container" role="main">
            <div class="row">
                <h3><?php echo $lang['INTRO']; ?></h3>
            </div>

            <div class="row hidden-md hidden-lg" id="handleTurn">
                <img src="assets/img/turnPhone.png" alt="<?php echo $lang['HANDLED_TURN_IMG_ALT']; ?>" />
                <p>
                    <?php echo $lang['HANDLED_TURN']; ?>
                </p>
            </div>

            <hr />

            <div class="row" id="title">
                <h1><i class="name">François HUSZTI</i></h1>

                <h2><?php echo $lang['GAMETITLE_DESC_DESKTOP']; ?></h2>
            </div>

            <hr />

            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <aside class="panel panel-success">
                        <div class="panel-heading">
                            <h3><?php echo $lang['CONTROLS_TITLE']; ?></h3>
                        </div>
                        <div class="list-group">
                            <p class="list-group-item hidden-xs hidden-sm right-align">
                                <button type="button" class="btn btn-default pull-left">
                                    <span class="glyphicon glyphicon-arrow-left"></span>
                                </button>
                                <button type="button" class="btn btn-default pull-left">
                                    <span class="glyphicon glyphicon-arrow-right"></span>
                                </button>
                                <?php echo $lang['CONTROLS_LRARROW']; ?>
                            </p>
                            <p class="list-group-item hidden-xs hidden-sm right-align">
                                <button type="button" class="btn btn-default pull-left">
                                    <span class="glyphicon glyphicon-arrow-up"></span>
                                </button>
                                <?php echo $lang['CONTROLS_UARROW']; ?>
                            </p>
                            <p class="list-group-item visible-xs-block visible-sm-block">
                                <?php echo $lang['CONTROLS_HANDLED1']; ?>
                            </p>
                            <p class="list-group-item visible-xs-block visible-sm-block">
                                <?php echo $lang['CONTROLS_HANDLED2']; ?>
                            </p>
                            <p class="list-group-item right-align">
                                <?php echo $lang['CONTROLS_LASTCONTROLSPARAGRAPH']; ?>
                            </p>
                        </div>
                    </aside>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <aside class="panel panel-info">
                        <div class="panel-heading">
                            <h3><?php echo $lang['MORE_TITLE']; ?></h3>
                        </div>
                        <div class="panel-body">
                            <p>
                                <?php echo $lang['MORE_DESC_BEFORE']; ?> <a href="" title="<?php echo $lang['MORE_DESC_LINK1_TITLE']; ?>"><?php echo $lang['MORE_DESC_LINK1_TEXT']; ?></a>).
                            </p>
                            <p>
                                <?php echo $lang['MORE_DESC_BETWEEN']; ?> <a href="" title="<?php echo $lang['MORE_DESC_LINK2_TITLE']; ?>"><?php echo $lang['MORE_DESC_LINK2_TEXT']; ?></a>).
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

        <!-- Loading jQuery -->
        <script src="../../assets/js/jquery-3.1.1.min.js"></script>

        <!-- Loading BootStrap JavaScript -->
        <script src="../../bootstrap/js/bootstrap.min.js"></script>

        <script src='assets/js/homepage.js'></script>

        <script type="text/javascript" src="assets/js/game/Game.js"></script>
        <script type="text/javascript" src="assets/js/game/general.js"></script>
        <script type="text/javascript" src="assets/js/game/skillsGeneral.js"></script>
    </body>
</html>
