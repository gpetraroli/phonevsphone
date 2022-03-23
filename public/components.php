<?php

function getHtmlHead($scriptsURLs): string
{

    $scriptMarkup = '';

    foreach ($scriptsURLs as $scriptURL) {
        $scriptMarkup .= '<script defer src="' . $scriptURL . '"></script>';
    }

    return '<head>
            <meta charset="UTF-8">
            <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>PhoneVsPhone</title>
            
            ' .
        $scriptMarkup
        . '

        <link rel="stylesheet" href="assets/css/menu.css">
            <link rel="stylesheet" href="assets/css/general.css">
            <link rel="stylesheet" href="assets/css/style.css">

        </head>';
}
