/* jQuery Functions */
$(document).ready(function() {
  /* Add menu toggle on narrow widths
    @ < 450px
      - add toggle button and hide menu
    @ >= 450px
      - hide toggle button and show menu (add class of is-showing)  */
// On initial load
if ($(window).width() < 450) {
  $('.logo').append('<span class="fa fa-navicon menu-toggle"></span>');
  $('.menu-toggle').click(function() {
    $('ul.main-nav').toggleClass('is-showing').toggleClass('is-hidden');
  });
}
else {
  $('ul.main-nav').addClass('is-showing').removeClass('is-hidden');
}
// On resize of window
$(window).resize(function() {
  var spans = $('.logo span').length;
  if ($(window).width() < 450) {
    if (spans < 1) {
        $('.logo').append('<span class="fa fa-navicon menu-toggle"></span>');
        $('ul.main-nav').removeClass('is-showing');
        $('ul.main-nav').addClass('is-hiding');
    }
      $('.menu-toggle').click(function() {
        $('ul.main-nav').toggleClass('is-showing');
      });

  }
  else {
    if (spans >= 1) {
      $('.logo').remove('span.fa');
    }
    $('ul.main-nav').addClass('is-showing');
  }
});
});
