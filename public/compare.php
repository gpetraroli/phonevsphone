<!doctype html>
<html lang="en">
<body>


<?php
require 'components.php';

echo getHtmlHead(['assets/js/compere.js']);
echo getHtmlHeader();

?>

<section class = 'section section--compare'>

    <div class="compare__box compare__box--first grid grid-col--2">
        <img id='compare__img--a' class='compare__img' src="" alt="">
        <img id='compare__img--b' class='compare__img' src="" alt="">
        <h2 id='compare__name--a' class='compare__name'></h2>
        <h2 id='compare__name--b' class='compare__name'></h2>
        <h3 id="compare__brand--a" class="compare__brand"></h3>
        <h3 id="compare__brand--b" class="compare__brand"></h3>
    </div>

    <div id='compare__box--os' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>

    <div id='compare__box--display' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>

    <div id='compare__box--camera-main' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>

    <div id='compare__box--camera-selfie' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>

    <div id='compare__box--platform' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>

    <div id='compare__box--memory' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>

    <div id='compare__box--battery' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>

    <div id='compare__box--network' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>

    <div id='compare__box--body' class="compare__box compare__box--category grid grid-col--4">
        <h4 class="category--name"></h4>
        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>

        <p class="category__sub"></p>
        <p class="specs specs--a"></p>
        <p class="specs specs--b"></p>
    </div>
</section>
