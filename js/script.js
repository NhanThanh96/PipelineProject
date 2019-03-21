$(document).ready(function(){

  $(".js-navbar__toogle-button").on("click", function(e) {
    e.preventDefault();
    $(".navbar > .navbar__collapse").toggleClass("show");
    $(".navbar > .navbar__collapse").slideToggle(150);
    $(".sidebar__action").toggleClass("show");
    $(".sidebar__action").slideToggle(250);
  });

  // carousel
  $(".pages > .js-carousel > div.js-carousel__item:gt(0)").hide();
  $(".components > .js-carousel:first > div.js-carousel__item:gt(0)").hide();
  $(".components > .js-carousel:last > div.js-carousel__item:gt(0)").hide();

  setInterval(function() {
  $('.pages > .js-carousel > .js-carousel__item:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.pages > .js-carousel');
  }, 2000);

  setInterval(function() {
    $('.components .js-carousel > .js-carousel__item:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.components .js-carousel');
    }, 3000);

  
$(".navbar__item > .js-dropdown").on("click", function(e){
  e.preventDefault();
  
  if($(this).next().hasClass("show")) {
      $(this).next().removeClass("show");
      $(this).next().slideUp(350);
      $(this).removeClass("show");
  }
  else {
      $(this).addClass("show");
      $(this).parent().parent().find("li.navbar__item > .js-dropdown-menu").removeClass("show"); //remove all
      $(this).parent().parent().find("li.navbar__item > .js-dropdown-menu").slideUp(350); // slide up all
      $(this).parent().parent().find("li.navbar__item > .js-dropdown").removeClass("show"); // hide all button
      $(this).addClass("show");
      $(this).next().toggleClass('show'); // show ul current  
      $(this).next().slideToggle(350);
    }
  });
  $(".js-dropdown__selection").on("click", function(e) {
    e.preventDefault();
    $(this).next().toggleClass("show");
    $(this).next().slideToggle(250);
    e.stopPropagation();
  });
  
  $(".js-btn--add-new").on("click", function(e) {
    e.preventDefault();
    $(this).next().toggleClass("show");
    $(this).next().slideToggle(250);
    e.stopPropagation();
  });

  $(".js-profile__link").on("click", function(e) {
    e.preventDefault();
    $(this).next().toggleClass("show");
    $(this).next().slideToggle(250);
    e.stopPropagation();
  });

  $(window).click(function() {
    $(".dropdown__list").css("display" , "none");
    });
});
