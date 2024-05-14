jQuery(document).ready(function ($) {
  //   Add scroll class to nav and body when scrolling down
  $(window).scroll(function () {
    if (this.scrollY > 100) {
      $("nav").addClass("scroll");
      $("body").addClass("scroll");
    } else {
      $("nav").removeClass("scroll");
      $("body").removeClass("scroll");
    }
  });

  $(".menu").click(function () {
    $("app-about").toggleClass("sl-menuOpen");
    $("app-contact").toggleClass("sl-menuOpen");
    $("app-home").toggleClass("sl-menuOpen");
    $("app-testimonials").toggleClass("sl-menuOpen");
    if ($("app-contact").hasClass("sl-menuOpen")) {
      $("app-footer").toggleClass("sl-menuOpen");
    }
  });
});
