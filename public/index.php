<!doctype html>
<html lang="en">
<body>

<?php
require 'components.php';

echo getHtmlHead(['assets/js/script.js']);
echo getHtmlHeader();
?>

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
        <button id="search__control--compare" class="search__control" disabled>
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
            <div class="lds-dual-ring lds-dual-ring--a"></div>
            <img class='preview__img' src="" alt="">
            <p></p>
        </div>
    </div>
    <div class="separator-h"></div>
    <div class="section--preview__item preview--second">
        <h2></h2>
        <div class="preview__content">
            <div class="lds-dual-ring lds-dual-ring--b"></div>
            <p></p>
            <img class='preview__img' src="" alt="">
        </div>
    </div>
</section>

</body>
</html>
