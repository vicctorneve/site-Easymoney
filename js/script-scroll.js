//jquery scroll-animate

$('#btntoplanos').click(function(e){
   e.preventDefault();
   var id = $(this).attr('href');
       targetOffSet = $(id).offset().top;
   $('html, body').animate({
      scrollTop: targetOffSet
   },500);
});
