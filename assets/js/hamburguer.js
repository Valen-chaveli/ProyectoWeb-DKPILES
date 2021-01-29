// Look for .hamburger
var hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
  // Toggle class "is-active"
  hamburger.classList.toggle('is-active');
  // Do something else, like open/close menu

  let wrapItems = document.querySelector('#wrap-items');

  if (wrapItems.classList.contains('menu-close')) {
    wrapItems.classList.remove('menu-close');
    wrapItems.classList.add('menu-open');
  } else if (wrapItems.classList.contains('menu-open')) {
    wrapItems.classList.remove('menu-open');
    wrapItems.classList.add('menu-close');
  }
});

let wrapItems = document.querySelector('#wrap-items');
let enlaces = document.querySelectorAll('#wrap-items a');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    console.log(enlaces);
    wrapItems.classList.remove('menu-open');
    wrapItems.classList.add('menu-close');
    hamburger.classList.toggle('is-active');
  });
});
