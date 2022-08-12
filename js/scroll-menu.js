const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(item =>{
   item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element) {
   const id = element.getAttribute('href');
   return document.querySelector(id).offsetTop
}

function scrollToPosition(to){
   window.scroll({
      top: to,
      behavior: 'smooth'
   });
}

function scrollToIdOnClick(event){
   event.preventDefault();
   const to = getScrollTopByHref(event.target);
   scrollToPosition(to);
}

