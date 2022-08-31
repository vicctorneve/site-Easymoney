const btnMobile = document.querySelector('.btn-menu');
const listMenu = document.querySelectorAll('.menu li')

btnMobile.addEventListener('click', toggleMenu);
function toggleMenu(){
   const nav = document.querySelector('nav');
   nav.classList.toggle('active');
}
for (li of listMenu) {
   li.addEventListener('click', closeMenu)
   function closeMenu(){
      toggleMenu()
   }
}