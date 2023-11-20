$(document).ready(function () {

    showPopup();

    const swiper = new Swiper('#reviewBanner .swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 4000
        },

        /*      pagination: {
                 el: '#reviewBanner .swiper-pagination',
                 type: 'fraction'
             }, */

        navigation: {
            nextEl: '#reviewBanner .swiper-button-next',
            prevEl: '#reviewBanner .swiper-button-prev',
        },

    });


})

//     팝업 광고
function showPopup() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.background').style.display = 'block';
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.background').style.display = 'none';
}



