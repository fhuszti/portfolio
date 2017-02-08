<?php
session_start();

$redirectStatus = [400, 401, 403, 404, 500, 502];

//To fix a bug where clicking the flags wouldn't do anything on error pages (as they follow a redirection before displaying anything)
//REDIRECT_STATUS is the code so we can check it for errors
//REDIRECT_QUERY_STRING contains the eventual get arguments in the url before redirection
if (in_array($_SERVER['REDIRECT_STATUS'], $redirectStatus) && isset($_SERVER['REDIRECT_QUERY_STRING'])) {
    switch ($_SERVER['REDIRECT_QUERY_STRING']) {
        case 'lang=en':
            $lang = 'en';
            break;

        case 'lang=fr':
            $lang = 'fr';
            break;

        default:
            $lang = 'en';
    }

    // register the session and set the cookie for 30 days
    $_SESSION['lang'] = $lang;
    setcookie('lang', $lang, time() + (3600 * 24 * 30));
}
//For all pages except error pages
//if the lang is set as a parameter
elseif (isset($_GET['lang'])) {
    $lang = $_GET['lang'];

    // register the session and set the cookie for 30 days
    $_SESSION['lang'] = $lang;
    setcookie('lang', $lang, time() + (3600 * 24 * 30));
}
//if the lang is set in the current session
elseif (isset($_SESSION['lang'])) {
    $lang = $_SESSION['lang'];
}
//if the lang is set in a cookie
elseif (isset($_COOKIE['lang'])) {
    $lang = $_COOKIE['lang'];
}
//we default to either the browser language or english
else {
    $lang = 'en';

    //put all languages allowed by the visitor's browser to see if french is in it
    $browserLanguages = explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']);
    foreach($browserLanguages as $browserLang) {
        if($browserLang == 'fr') {
            $lang = 'fr';
        }
    }
}

switch ($lang) {
    case 'en':
    $lang_file = 'lang.en.php';
    break;

    case 'fr':
    $lang_file = 'lang.fr.php';
    break;

    default:
    $lang_file = 'lang.en.php';
}

include_once 'languages/'.$lang_file;
