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

