/* global $ */

$(function() {
  smoothScroll(300);
  $('#spl-h3').css('visibility','visible').hide().delay(5000).fadeIn(3500);
  $('body').css('visibility','visible').hide().delay(100).fadeIn(800);
});

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function(event) {
      
      var target = $( $(this).attr('href') );
      
      if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, duration);
      }
  });
}

