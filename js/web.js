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
        

      pagination: {
        el: ".swiper-pagination",
      },

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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

      $('.inner__menu>a').click(function(){
        $('.inner__menu').toggleClass('dong');
        
        let count = 0;

        count++;
        $('.inner__menu>a>span').html('OPEN');

        if(count == 1) {
          count = 0;
          $('.inner__menu>a>span').html();
        }
         
      });

      var swiper2 = new Swiper('.swiper#review__swiper', {

        loop: true,
            
    
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
          
          });

      let import__contents = "";
      for(x in review__table[0].info) {
        import__contents += `
                    <div class="swiper-slide">
                      <button>${review__table[0].point}</button>
                      <div>${review__table[0].info[x].opinion}</div>
                      <div>${review__table[0].info[x].user}</div>
                    </div>
        `;
      }
        

      $('#review__swiper .swiper-wrapper').html(import__contents);

});