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

        <div class="jumbotron">
            <p class="container-fluid">
                <?php echo $lang['INTRO']; ?>
            </p>
        </div>

        <div id="wrapper" class="container-fluid" role="main">

            <!-- Tabs display on tablet+desktop -->
            <div class="hidden-xs">
                <div class="row">
                    <ul class="nav nav-pills nav-justified">
                        <li><a href="#project1" data-toggle="tab"><?php echo $lang['PROJECT1']; ?></a></li>
                        <li><a href="#project2" data-toggle="tab"><?php echo $lang['PROJECT2']; ?></a></li>
                        <li class="disabled"><a><?php echo $lang['SOON']; ?></a></li>
                    </ul>
                </div>
                <section class="row tab-content">
                    <div class="col-xs-12 tab-pane fade active in">
                        <h2 id="centeredTitle"><?php echo $lang['FAKETAB']; ?></h2>
                    </div>
                    <div class="col-xs-12 tab-pane fade" id="project1">
                        <div class="row">
                            <h2><?php echo $lang['PROJECT1_TITLE']; ?></h2>
                            <h4><a href="http://tours.fhuszti.com" title="<?php echo $lang['PROJECT_LINK_TITLE']; ?>"><?php echo $lang['PROJECT_LINK']; ?></a> <span class="label label-success"><?php echo $lang['PROJECT_LINK_LABEL_COMPLETED']; ?></span></h4>
                            <hr />
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="panel panel-success">
                                    <div class="panel-heading">
                                        <h3 class="panel-title"><?php echo $lang['SKILLS_VALIDATED']; ?></h3>
                                    </div>
                                    <div class="list-group">
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT1_LIST_1_1']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT1_LIST_1_2']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT1_LIST_1_3']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT1_LIST_1_4']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <h3 class="panel-title"><?php echo $lang['TECHNICALS_VALIDATED']; ?></h3>
                                    </div>
                                    <div class="list-group">
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT1_LIST_2_1']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT1_LIST_2_2']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT1_LIST_2_3']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 tab-pane fade" id="project2">
                        <div class="row">
                            <h2><?php echo $lang['PROJECT2_TITLE']; ?></h2>
                            <h4><a href="#" title="<?php echo $lang['PROJECT_LINK_TITLE']; ?>"><?php echo $lang['PROJECT_LINK']; ?></a> <span class="label label-info"><?php echo $lang['PROJECT_LINK_LABEL_PROGRESS']; ?></span></h4>
                            <hr />
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div class="panel panel-success">
                                    <div class="panel-heading">
                                        <h3 class="panel-title"><?php echo $lang['SKILLS_TO_VALIDATE']; ?></h3>
                                    </div>
                                    <div class="list-group">
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT2_LIST_1_1']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT2_LIST_1_2']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <h3 class="panel-title"><?php echo $lang['TECHNICALS_TO_VALIDATE']; ?></h3>
                                    </div>
                                    <div class="list-group">
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT2_LIST_2_1']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT2_LIST_2_2']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT2_LIST_2_3']; ?>
                                        </p>
                                        <p class="list-group-item">
                                            <?php echo $lang['PROJECT2_LIST_2_4']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <!-- Accordeon display on mobile -->
            <div class="visible-xs-block">
                <div class="panel panel-default row">
                    <a href="#item1" data-toggle="collapse">
                        <div class="panel-heading">
                            <?php echo $lang['PROJECT1']; ?>
                        </div>
                    </a>
                    <div id="item1" class="panel-collapse collapse">
                        <h2><?php echo $lang['PROJECT1_TITLE']; ?></h2>
                        <h4><a href="http://tours.fhuszti.com" title="<?php echo $lang['PROJECT_LINK_TITLE']; ?>"><?php echo $lang['PROJECT_LINK']; ?></a> <span class="label label-success"><?php echo $lang['PROJECT_LINK_LABEL_COMPLETED']; ?></span></h4>
                        <hr />

                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <h3 class="panel-title"><?php echo $lang['SKILLS_VALIDATED']; ?></h3>
                            </div>
                            <div class="list-group">
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT1_LIST_1_1']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT1_LIST_1_2']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT1_LIST_1_3']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT1_LIST_1_4']; ?>
                                </p>
                            </div>
                        </div>
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h3 class="panel-title"><?php echo $lang['TECHNICALS_VALIDATED']; ?></h3>
                            </div>
                            <div class="list-group">
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT1_LIST_2_1']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT1_LIST_2_2']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT1_LIST_2_3']; ?>
                                </p>
                            </div>
                        </div>

                        <hr />
                    </div>

                    <a href="#item2" data-toggle="collapse">
                        <div class="panel-heading">
                            <?php echo $lang['PROJECT2']; ?>
                        </div>
                    </a>
                    <div id="item2" class="panel-collapse collapse">
                        <h2><?php echo $lang['PROJECT2_TITLE']; ?></h2>
                        <h4><a href="#" title="<?php echo $lang['PROJECT_LINK_TITLE']; ?>"><?php echo $lang['PROJECT_LINK']; ?></a> <span class="label label-info"><?php echo $lang['PROJECT_LINK_LABEL_PROGRESS']; ?></span></h4>
                        <hr />

                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <h3 class="panel-title"><?php echo $lang['SKILLS_TO_VALIDATE']; ?></h3>
                            </div>
                            <div class="list-group">
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT2_LIST_1_1']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT2_LIST_1_2']; ?>
                                </p>
                            </div>
                        </div>
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h3 class="panel-title"><?php echo $lang['TECHNICALS_TO_VALIDATE']; ?></h3>
                            </div>
                            <div class="list-group">
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT2_LIST_2_1']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT2_LIST_2_2']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT2_LIST_2_3']; ?>
                                </p>
                                <p class="list-group-item">
                                    <?php echo $lang['PROJECT2_LIST_2_4']; ?>
                                </p>
                            </div>
                        </div>

                        <hr />
                    </div>

                    <a class="disabled">
                        <div class="panel-heading">
                            <?php echo $lang['SOON']; ?>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Loading jQuery -->
        <script src="../assets/js/jquery-3.1.1.min.js"></script>

        <!-- Loading BootStrap JavaScript -->
        <script src="../bootstrap/js/bootstrap.min.js"></script>
    </body>
</html>
