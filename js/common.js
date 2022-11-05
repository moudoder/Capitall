$(document).ready(function () {

  $('.questions-block').on('click', function() {
      $(this).toggleClass('active');
  })
  

  $('.subscription-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipe: false,
    dots: true,
    prevArrow: $('.subscription-arrow--prev'),
    nextArrow: $('.subscription-arrow--right'),
    adaptiveHeight: true
  });
  $('.feedback-people').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.feedback-slider'
  });
  //$('.feedback-people').slick('slickGoTo', 2);
  $('.feedback-slider').slick({
    asNavFor: '.feedback-people',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipe: false,
    dots: false,
    prevArrow: $('.feedback-slider-arrow--prev'),
    nextArrow: $('.feedback-slider-arrow--next')
  });
  //$('.feedback-slider').slick('slickGoTo', 2);

  $('.reviews-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: true,
    dots: false,
    prevArrow: $('.reviews-arrow--prev'),
    nextArrow: $('.reviews-arrow--next'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            adaptiveHeight: true
          }
        }
      ]
  });


  if ($(window).width() <= 765) {
    $('.fighter-row').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      variableWidth: true
      //dots: false,
      //prevArrow: $('.reviews-arrow--prev'),
      //nextArrow: $('.reviews-arrow--next')
    });

    $('.education-top').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      swipe: true,
      arrows: true,
      prevArrow: $('.education-arrow-prev'),
      nextArrow: $('.education-arrow-next')
    });
  }
})