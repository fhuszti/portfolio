<header class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <div id="logo" class="navbar-header">
            <a href="index.php" title="<?php echo $lang['MENU_HOME_LINK_TITLE']; ?>" class="navbar-brand">
                <img src="assets/img/logo.png" alt="François Huszti, fullstack dev" />
            </a>

            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapsableNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="collapsableNavbar">
            <div id="languages" class="navbar-text">
                <a href="?lang=en" title="Go to the english version" class="navbar-link" id="langEN">EN</a>
                <a href="?lang=fr" title="Passer le site en français" class="navbar-link" id="langFR">FR</a>
            </div>
            <nav role="navigation">
                <!-- actual menu list -->
                <ul class="nav navbar-nav navbar-right">
                    <li id='homeLinkLang' class="active"><a href="" title="<?php echo $lang['MENU_HOME_LINK_TITLE']; ?>"><?php echo $lang['MENU_HOME']; ?></a></li>
                    <li><a href="#" title="<?php echo $lang['MENU_CV_SIMPLE_LINK_TITLE']; ?>"><?php echo $lang['MENU_CV_SIMPLE']; ?></a></li>
                    <li><a href="#" title="<?php echo $lang['MENU_CV_INTERACTIVE_LINK_TITLE']; ?>"><?php echo $lang['MENU_CV_INTERACTIVE']; ?></a></li>
                    <li><a href="#" title="<?php echo $lang['MENU_HOMEWORK_LINK_TITLE']; ?>"><?php echo $lang['MENU_HOMEWORK']; ?></a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
