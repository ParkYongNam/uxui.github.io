$('document').ready(function(){
    $('.lang').click(function(){
        $('.l-menu').toggleClass('on');
    });

    $('.l-menu>li>a').mouseover(function(){
        $(this).addClass('checked').parent().siblings().find('a').removeClass('checked');
    });

    $('#gnb>li').mouseover(function(){
        $('.back').addClass('cover');
        $('.s-menu').addClass('son');
    });

    $('#gnb>li').mouseleave(function() {
        $('.back').removeClass('cover');
        $('.s-menu').removeClass('son');
    });

    var swiper = new Swiper('.swiper#new_swi', {

        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        /* autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }, */

      slidesPerView: 3,
      spaceBetween: 180,
      centeredSlides: true,
      allowSlidePrev: true,
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
      },
      
      });

    $('.city>li').click(function(){
        $(this).toggleClass('sign').siblings().removeClass('sign');
    });

    $('.subcity>li').click(function(){
        $(this).toggleClass('gra').siblings().removeClass('gra');
    });

    var swiper2 = new Swiper('.swiper#size_sli', {

        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

      $('.ham_btn').click(function(){
        $('.wrap').addClass('bgon');
        $('.mobile__header').addClass('trs');
        $('.close').click(function(){
          $('.wrap').removeClass('bgon');
        $('.mobile__header').removeClass('trs');
        });
      });

      $('.btn__after').click(function(){
        $('.sub__menu').toggleClass('recover');
      });
});