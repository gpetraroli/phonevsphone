<?php

function getHtmlHead($scriptsURLs=[]): string {

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

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

            <link rel="stylesheet" href="assets/css/menu.css">
            <link rel="stylesheet" href="assets/css/form.css">
            <link rel="stylesheet" href="assets/css/general.css">
            <link rel="stylesheet" href="assets/css/style.css">
        </head>';

}

function getHtmlHeader(): string {

    return '<a href="index.php"><header class="header">
                <h1>PhoneVsPhone</h1>
                <p>compare smartphones easily</p>
            </header></a>';
}
