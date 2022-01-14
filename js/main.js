'use strict';

$(function (){
  //scroll menu//

  $(document).scroll( function(){
    if ($(window).scrollTop() > 400){
      $('.nav').addClass('nav-scroll');
      $('.nav-img').addClass('nav-scroll__img');
    }
    else{
      $('.nav').removeClass('nav-scroll');
      $('.nav-img').removeClass('nav-scroll__img');
    }
  });

  //burger-menu//

  $('.nav-burger__btn').on('click', function () {
          $('.nav-burger__content').toggleClass('nav-burger__active');
          $(this).toggleClass('nav-burger__btn-clicked');
        });


      $('.nav-link').click(function () {
        $('.nav-burger__content').removeClass('nav-burger__active');
        $('.nav-burger__btn').removeClass('nav-burger__btn-clicked');
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top
          },1000);
        return false;
      });

  

  //scroll page//

  $('.nav-link').on('click', function(e){
      $('html, body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
      e.preventDefault();
      });

  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.review-slider').slick();

  //tabs//
 
  $('.about-item').click(function() {
    const id = $(this).attr('data-tab'),
        content = $('.about-list[data-tab="'+ id +'"]');
    
    $('.about-item__active').removeClass('about-item__active');
    $(this).addClass('about-item__active');
    
    $('.about-list__active').removeClass('about-list__active');
    content.addClass('about-list__active');
 });

})



