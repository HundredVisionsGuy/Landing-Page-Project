/* jQuery Functions */
$(document).ready(function() {
  /* Add menu toggle on narrow widths
    @ < 450px
      - add toggle button and hide menu
    @ >= 450px
      - hide toggle button and show menu (add class of is-showing)  */
// On initial load
if ($(window).width() < 450) {
  $('.menu-toggle').click(function() {
    $('ul.main-nav').toggleClass('is-showing').toggleClass('is-hidden');
  });
}
else {
  $('ul.main-nav').addClass('is-showing').removeClass('is-hidden');
  $('span.menu-toggle').hide();
}
// On resize of window
$(window).resize(function() {
  var spans = $('.logo span').length;
  if ($(window).width() < 450) {
    $('span.menu-toggle').show();
    $('ul.main-nav').removeClass('is-showing');
    $('ul.main-nav').addClass('is-hidden');
    $('.menu-toggle').click(function() {
        $('ul.main-nav').toggleClass('is-showing');
    });
  }
  else {
    $('span.menu-toggle').hide();
    $('ul.main-nav').addClass('is-showing');
  }
});
});
