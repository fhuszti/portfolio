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

        <script type="text/javascript" src="assets/js/ajax.js"></script>
        <script type="text/javascript" src="assets/js/phaser.min.js"></script>
        <script type="text/javascript" src="assets/js/Boot.js"></script>
        <script type="text/javascript" src="assets/js/Preload.js"></script>
        <script type="text/javascript" src="assets/js/Languages.js"></script>
        <script type="text/javascript" src="assets/js/Frameworks.js"></script>
        <script type="text/javascript" src="assets/js/Others.js"></script>
        <script type="text/javascript" src="assets/js/Formation.js"></script>
        <script type="text/javascript" src="assets/js/Contact.js"></script>
        <script type="text/javascript" src="assets/js/Experience.js"></script>

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

        </div>

        <!-- Loading jQuery -->
        <script src="../../assets/js/jquery-3.1.1.min.js"></script>

        <!-- Loading BootStrap JavaScript -->
        <script src="../../bootstrap/js/bootstrap.min.js"></script>

        <script type="text/javascript" src="assets/js/Game.js"></script>
        <script src='assets/js/homepage.js'></script>
        <script type="text/javascript" src="assets/js/general.js"></script>
        <script type="text/javascript" src="assets/js/skillsGeneral.js"></script>
    </body>
</html>
