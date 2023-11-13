window.addEventListener('load', function () {

    const mainSwiper = new Swiper('.swiper', {

        loop: true,

        spaceBetween: 30,
        centeredSlides: true,


        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pasueOnMouseEnter: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',

            // clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

})
