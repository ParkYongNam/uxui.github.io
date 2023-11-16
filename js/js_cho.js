$(document).ready(function(){
    const swiper = new Swiper('#reviewBanner .swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 4000
        },
    
        pagination: {
            el: '#reviewBanner .swiper-pagination',
            type: 'fraction'
        },
    
        navigation: {
            nextEl: '#reviewBanner .swiper-button-next',
            prevEl: '#reviewBanner .swiper-button-prev',
        },
    
    });

   
    
/*     document.querySelector(".toggle").addEventListener("click", function () {
        console.log(this, typeof this); // 버튼객체를 클릭하고 콘솔확인할것
        this.classList.toggle('stop'); // this가 태그객체임이 확인되어 그대로 클래스를 주었다가 빼았다가 함
    }) */
    
})




