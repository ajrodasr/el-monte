const element = document.getElementById('res-menu');
const menuItems = document.getElementById('res-menu-items');

element.addEventListener('click', (event) => {
  if (menuItems.classList.contains('hidden')) {
    menuItems.classList.remove('hidden');
    console.log('Mostrando...');
  } else {
    menuItems.classList.add('hidden');
    console.log('Ocultando...');
  }
});
