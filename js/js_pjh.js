window.addEventListener('load', function () {

    const mainSwiper = new Swiper('#mainSwiper .swiper', {

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
            el: '#mainSwiper .swiper-pagination',

            // clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '#mainSwiper .swiper-button-next',
            prevEl: '#mainSwiper .swiper-button-prev',
        },

    });

    const businessPartnersSwiper = new Swiper('#businessPartners .swiper', {

        loop: true,

        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 5000,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pasueOnMouseEnter: false,
        },

    });


})
