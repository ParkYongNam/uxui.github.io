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
});