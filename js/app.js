menuElem = document.querySelector('#menu');
hamburger = document.querySelector('.hamburger');

// menu_open function
function toggleMenu() {
  console.log('Menu clicked!');
  menuElem.classList.toggle('menu_open');
}

hamburger.addEventListener('click', toggleMenu);