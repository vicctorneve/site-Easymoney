// SCROLL BUTTON
const element = document.body;
function scrollTo(element) {
   document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}
document.querySelector("#btntoplanos").addEventListener('click', function(event){
   event.preventDefault();
   scrollTo("#planos");
})
// SCROLL SITE 
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
function animeScroll(){
   const windowTop = window.pageYOffset + ((window.innerHeight*0.75));
   target.forEach(function(element){
      if((windowTop) > element.offsetTop) {
         element.classList.add(animationClass);
      } else{
         element.classList.remove(animationClass);
      }
   })
}
animeScroll();
if(target.length){
   window.addEventListener('scroll', function() {
      animeScroll();
   })
}