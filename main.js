// Show and Hide menu on mobiles
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', displayMenu);

function displayMenu() {
  const isActive = document.querySelector('.navbar--active');
  if (isActive) {
    menu.setAttribute('class', 'navbar')
  } else {
    menu.setAttribute('class', 'navbar navbar--active')
  }

}