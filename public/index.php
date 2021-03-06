<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PhoneVsPhone</title>

    <script defer type="module" src="/assets/js/script.js"></script>

    <link rel="stylesheet" href="/assets/css/general.css">
    <link rel="stylesheet" href="/assets/css/style.css">
</head>

<body>

<header class="header">
    <h1>PhoneVsPhone</h1>
    <p>compare smartphones easily</p>
</header>

<section class="section section--search">
    <div class="search__input">
        <label for="search__input-text">1. Search a phone</label>
        <input type="text" id="search__input-text" name="search__input-text">
    </div>
    <div class="search__input">
        <label for="search__input-select">2. Pick one</label>
        <select name="search__input-select" id="search__input-select"></select>
    </div>
    <div class="search__input search__input--btn__container">
        <button id="search__control--clear" class="search__control">
            clear
        </button>
        <button id="search__control--compare" class="search__control">
            compare
        </button>
        <button id="search__control--add" class="search__control">
            add
        </button>
    </div>
</section>

<section class="section section--preview">
    <div class="section--preview__item preview--first">
        <h2></h2>
        <div class="preview__content">
            <img class='preview__img' src="" alt="">
            <p></p>
        </div>
    </div>
    <div class="section--preview__item preview--second">
        <h2></h2>
        <div class="preview__content">
            <p></p>
            <img class='preview__img' src="" alt="">
        </div>
    </div>
</section>

</body>
</html>
