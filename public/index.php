<!doctype html>
<html lang="en">

<body>

    <?php
    require 'components.php';

    echo getHtmlHead(['assets/js/script.js']);
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


    <footer>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="container" style="padding: 80px 0;" align="center">
          <a href="#">
              <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
          </a>
          <a href="#">
                  <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="#">
                      <i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                  </a>
                  <a href="#">
                          <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                      </a>
                      <a href="#">
                              <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                          </a>
                          <a href="#">
                                  <i class="fa fa-pinterest fa-lg white-text"></i>
                              </a>
      </div>
      <div style="background: #004872;">
          <p style="color: #91BEC2; padding: 20px 0;" align="center"> &copy; 2022 Copyright: 
          <a href="https://www.wildcodeschool.com/fr-FR/campus/bordeaux Created By: G-JM-O>
          </p>
      </div>
  </footer>


</body>

</html>