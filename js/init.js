$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
});

$('.gallery-img').click(function() {
  $(this).children('.gallery-mon').toggle();
});

