<!doctype html>
<html lang="en">
<body>

<?php
require 'components.php';

echo getHtmlHead();
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

<section class="section section--newsletter">
<h2>Keep yourself up to date by subscribing to our monthly <strong>newsletter</strong>!</h2>
<p>Select the brands you are intrested to and we will send you only targeted content</p>

<form class='form' action="" method="post">

    <div class="pseudo-container">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
    </div>

    <div class="email-container">
        <label for="email">Email</label>
        <input type="text" id="email" name="email">
    </div>


    <div>
    <p>I'm intrested in:</p>
        <div class="checkboxes">
        <div>
            <input type="checkbox" id="scales" name="scales" checked>
            <label for="scales">All</label>
        </div>

        <div>
            <input type="checkbox" id="scales" name="scales">
            <label for="scales">Apple</label>
        </div>

        <div>
            <input type="checkbox" id="scales" name="scales" >
            <label for="scales">LG</label>
        </div>

        <div>
            <input type="checkbox" id="scales" name="scales" >
            <label for="scales">Huawei</label>
        </div>

        <div>
            <input type="checkbox" id="scales" name="scales" >
            <label for="scales">Google</label>
        </div>

        <div>
            <input type="checkbox" id="scales" name="scales" >
            <label for="scales">Samsung</label>
        </div>

        <div>
            <input type="checkbox" id="scales" name="scales" >
            <label for="scales">Lenovo</label>
        </div>

        <div>
            <input type="checkbox" id="scales" name="scales" >
            <label for="scales">Asus</label>
        </div>
        </div>


    </div>

    <input type="submit" value="subscribe">
</form>
</section>

</body>

</html>
