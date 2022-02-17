$(document).ready(function () {
  // nav scrolling effect;

  $(window).on("scroll", function () {
    let scrolling = $(this).scrollTop();

    if (scrolling > 200) {
      $("nav").addClass("navBarScroll");
    } else {
      $("nav").removeClass("navBarScroll");
    }

    // back to top btn scrolling effect;

    if (scrolling > 700) {
      $(".backToTop").fadeIn();
    } else {
      $(".backToTop").fadeOut();
    }
  });

  // back to top btn click effect;
  $(".backToTop").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });

  // banner slider;

  $(".banner-slider").slick({
    dots: true,
    prevArrow: '<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick-next right-arrow"></i>',
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // gallery filter effect;

  var mixer = mixitup(".galleryImage");

  // gallery menu button background color;

  $(".galleryMenu ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // venobox image popup gallery effect;

  new VenoBox({
    selector: ".popup",
    spinner: "plane",
    spinColor: "#ffc155",
    toolsColor: "#ffc155",
  });

  // water ripple js effect;
  $(".about-image").ripples({
    dropRadius: 20,
    perturbance: 0.3,
    regulation: 200,
  });

  // counterup effect;

  $(".counter").counterUp({
    delay: 10,
    time: 1500,
  });

  // animation control by wow js;

  new WOW().init();

  // animation control by aos js;
  AOS.init();

  //  feedback slider;
  $(".feedbackSlider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
