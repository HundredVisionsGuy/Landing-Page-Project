/* jQuery Functions */
$(document).ready(function() {
  /* Add menu toggle on narrow widths
    @ < 450px
      - add toggle button and hide menu
    @ >= 450px
      - hide toggle button and show menu (add class of is-showing)  */
// On initial load
if ($(window).width() < 1450) {
  $('.logo').append('<span class="fa fa-navicon menu-toggle"></span>');
}
else {
}
// On resize of window
$(window).resize(function() {
  if ($(window).width() < 450) {
  }
  else {
  }
});
/* Add toggle click method
      - toggle class of is-showing
  */
  $('.menu-toggle').click(function() {
    $('ul.main-nav').toggleClass('is-showing');
  });
});
