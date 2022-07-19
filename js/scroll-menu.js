// const promo = document.querySelector('.promotion');
// const propriedades = promo.getBoundingClientRect();
// const heightPromo = propriedades.height;
// console.log(heightPromo)

// const header = document.querySelector('header');
// const styleHeader = header.getBoundingClientRect();
// const heightHeader = styleHeader.height;
// console.log(heightHeader);

// const menu = document.querySelector('.menu');
// menu.style.top = (heightHeader + heightHeader);

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(item =>{
   item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element) {
   const id = element.getAttribute('href');
   return document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event){
   event.preventDefault();
   const to = getScrollTopByHref(event.target);
   scrollToPosition(to);
}

function scrollToPosition(to){
   window.scroll({
      top: to,
      behavior: 'smooth'
   });
}

