/**********NAVBAR BURGER TEST******* */
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

function toggleMenu () { 
      burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
  };

  toggleMenu();



  