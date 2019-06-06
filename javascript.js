$(document).ready(function() {
  var scrollTop = 0;
  $(window).scroll(function() {
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 50) {
      $(".navbar").addClass("scrolled-nav");
    } else if (scrollTop < 50) {
      $(".navbar").removeClass("scrolled-nav");
    }
  });
});
