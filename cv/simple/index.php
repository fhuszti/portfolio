<?php require("../../php-config/langSelect.php"); ?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $lang['META_TITLE']; ?></title>

        <meta name="Description" content="<?php echo $lang['META_DESC']; ?>" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="../../bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="../../assets/css/style.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="../../assets/css/header.css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body role="document">
        <?php require("../../header.php"); ?>

        <div id="wrapper" class="container" role="main">
            <div class="row">
                <div class="col-xs-12 col-sm-8" id="mainContent">
                    <header class="row">
                        <div class="col-xs-12" id="title">
                            <img src="assets/img/photo_cv_mini.jpg" alt="<?php echo $lang['TITLE_IMG_ALT']; ?>" class="hidden-xs" />
                            <h1><a href="#" title="<?php echo $lang['TITLE_LINK_TITLE']; ?>" class="pull-right"><i class="name">FRAN&Ccedil;OIS HUSZTI</i></a></h1>
                            <br /><br />
                            <h3 class="pull-right">FULLSTACK DEV</h3>
                            <h3><i class="email">contact@fhuszti.com</i></h3>
                        </div>
                    </header>
                    <div class="row">
                        <div class="col-xs-12">
                            <h3><?php echo $lang['SUMMARY_TITLE']; ?></h3>

                            <p class="justified-content">
                                <?php echo $lang['SUMMARY_DESC']; ?>
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12" id="academics">
                            <h3><?php echo $lang['ACADEMICS_TITLE']; ?></h3>
                            <hr class="visible-xs-block">

                            <p>
                                2016-<?php echo $lang['ACADEMICS_PRESENT']; ?> <a href="https://openclassrooms.com/" title="<?php echo $lang['ACADEMICS_OC_LINK_TITLE']; ?>" class="pull-right"><?php echo $lang['ACADEMICS_OC_TITLE']; ?></a>
                                <span class="normalWeight"><?php echo $lang['ACADEMICS_OC_DESC']; ?></span>
                            </p>
                            <hr class="visible-xs-block">
                            <p>
                                2014-2015 <span class="pull-right"><?php echo $lang['ACADEMICS_UNI_TITLE']; ?></span>
                                <span class="normalWeight"><?php echo $lang['ACADEMICS_UNI_DESC']; ?></span>
                            </p>
                            <hr class="visible-xs-block">
                            <p>
                                2012-2013 <span class="pull-right"><?php echo $lang['ACADEMICS_PREPA_TITLE']; ?></span>
                                <span class="normalWeight"><?php echo $lang['ACADEMICS_PREPA_DESC']; ?></span>
                            </p>
                            <hr class="visible-xs-block">
                            <p>
                                2012 <span class="pull-right"><?php echo $lang['ACADEMICS_BAC_TITLE']; ?></span>
                                <span class="normalWeight"><?php echo $lang['ACADEMICS_BAC_DESC']; ?></span>
                            </p>
                        </div>
                    </div>
                    <div class="row last-row">
                        <div class="col-xs-12" id="experience">
                            <h3><?php echo $lang['EXPERIENCE_TITLE']; ?></h3>
                            <hr class="visible-xs-block">

                            <p>
                                2015-2017 <span class="pull-right"><?php echo $lang['EXPERIENCE_MCDO_TITLE']; ?></span>
                                <span class="normalWeight"><?php echo $lang['EXPERIENCE_MCDO_DESC']; ?></span>
                            </p>
                            <hr class="visible-xs-block">
                            <p>
                                2013-2014 <a href="http://www.boudinblanc.co.uk/" title="<?php echo $lang['EXPERIENCE_BB_LINK_TITLE']; ?>" class="pull-right"><?php echo $lang['EXPERIENCE_BB_TITLE']; ?></a>
                                <span class="normalWeight"><?php echo $lang['EXPERIENCE_BB_DESC']; ?></span>
                            </p>
                        </div>
                    </div>
                </div>

                <section class="col-xs-12 col-sm-4" id="quickLook">
                    <header class="row">
                        <div class="col-xs-12">
                            <h1><?php echo $lang['TLDR_TITLE']; ?></h1>
                        </div>
                    </header>
                    <div class="row">
                        <div class="col-xs-12">
                            <h3><?php echo $lang['TLDR_KNOWLEDGE_TITLE']; ?></h3>

                            <ul class="col-xs-6">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                            </ul>
                            <ul class="col-xs-6">
                                <li>WordPress</li>
                                <li>BootStrap</li>
                                <li>jQuery</li>
                                <li><?php echo $lang['TLDR_KNOWLEDGE_PHASER']; ?></li>
                                <li><?php echo $lang['TLDR_KNOWLEDGE_RDESIGN']; ?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <h3><?php echo $lang['TLDR_KEYSKILLS_TITLE']; ?></h3>

                            <ul>
                                <li><?php echo $lang['TLDR_KEYSKILLS_LI_1']; ?></li>
                                <li><?php echo $lang['TLDR_KEYSKILLS_LI_2']; ?></li>
                                <li><?php echo $lang['TLDR_KEYSKILLS_LI_3']; ?></li>
                                <li><?php echo $lang['TLDR_KEYSKILLS_LI_4']; ?></li>
                                <li><?php echo $lang['TLDR_KEYSKILLS_LI_5']; ?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <h3><?php echo $lang['TLDR_QUALITIES_TITLE']; ?></h3>

                            <ul>
                                <li><?php echo $lang['TLDR_QUALITIES_LI_1']; ?></li>
                                <li><?php echo $lang['TLDR_QUALITIES_LI_2']; ?></li>
                                <li><?php echo $lang['TLDR_QUALITIES_LI_3']; ?></li>
                                <li><?php echo $lang['TLDR_QUALITIES_LI_4']; ?></li>
                                <li><?php echo $lang['TLDR_QUALITIES_LI_5']; ?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <h3><?php echo $lang['TLDR_DETAILS_TITLE']; ?></h3>

                            <ul>
                                <li><?php echo $lang['TLDR_DETAILS_LI_1']; ?></li>
                                <li><?php echo $lang['TLDR_DETAILS_LI_2']; ?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <h3><?php echo $lang['TLDR_HOBBIES_TITLE']; ?></h3>

                            <p class="justified-content">
                                <?php echo $lang['TLDR_HOBBIES_DESC']; ?>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <!-- Loading jQuery -->
        <script src="../../assets/js/jquery-3.1.1.min.js"></script>

        <!-- Loading BootStrap JavaScript -->
        <script src="../../bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
