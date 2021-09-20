jQuery(document).ready(function ($) {
  // Responsive menu with hamburger.
  $("#hamburger").on("click", function () {
    $(this).toggleClass("hamburger__open");
    $("nav").toggleClass("showMenu");
    $("html").toggleClass("fixed");
  }); // #Responsive menu with hamburger.

  $("nav ul li > .submenu")
    .parent()
    .click(function () {
      var submenu = $(this).children(".submenu");
      $(submenu).toggleClass("open");
    });
});
