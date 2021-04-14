const element = document.getElementById('res-menu');
const menuItems = document.getElementById('res-menu-items');
const menuIcon = document.getElementById('open-menu');
const closeMenuIcon = document.getElementById('close-menu');

element.addEventListener('click', (event) => {
  if (menuItems.classList.contains('hidden')) {
    menuItems.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeMenuIcon.classList.remove('hidden');
  } else {
    menuItems.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeMenuIcon.classList.add('hidden');
  }
});
