<!doctype html>
<html lang="en">
<body>

<?php
require 'components.php';

echo getHtmlHead(['assets/js/newest.js']);
?>

<a href="index.php">
    <header class="header">
        <h1>PhoneVsPhone</h1>
        <p>compare smartphones easily</p>
        <?php
        require 'menu.php';
        ?>
    </header>
</a>

<section class="section section--newest">
    <h1 class="newest--title">Newest phones</h1>
</section>

<?php include 'footer.php' ?>
