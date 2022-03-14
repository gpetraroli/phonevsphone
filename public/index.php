<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PhoneVsPhone</title>

    <script defer type="module" src="../src/js/script.js"></script>

    <link rel="stylesheet" href="../src/css/general.css">
    <link rel="stylesheet" href="../src/css/style.css">
</head>
<body>

<header class="header">
    <h1>PhoneVsPhone</h1>
    <p>compare smartphones easily</p>
</header>

<section class="search">
    <div class="search--item">
        <label for="search-a">Search a phone</label>
        <input type="text" id="search-a" name="search-a">
    </div>
    <div class="search--item">
        <label for="select-a">Select the phone</label>
        <select name="select-a" id="select-a"></select>
    </div>
    <div class="search--item last">

        <button id="search--action">
            add
        </button>
    </div>
</section>

<section class="selection grid grid-col--1">
    <div class="selection--item preview preview__first">
        <h2></h2>
        <img src="" alt="">
    </div>
    <div class="selection--item preview preview__second">
        <h2></h2>
        <img src="" alt="">
    </div>
</section>

</body>
</html>
