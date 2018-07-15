$(function() {

  $(".nav-button").click(function() {
    $(".mobile-nav").toggle();
  });

  $('div.slider').click(function () {
    $('.hidden').slideUp();
      if($(this).next('.hidden').is(':hidden')) {
        $(this).next('.hidden').slideDown();
        return true;
      }

      if($(this).next('.hidden').is(':visible')) {
        $(this).next('.hidden').slideUp();
        return false;
      }

  });

});
