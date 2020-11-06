(function($) {
    'use strict';

    $('.mobile-menu').on('click', function() {
        $('.primary-menu ul').slideToggle();
    });


    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            autoplaySpeed: 1500,
            items: 2,
            loop: true,
            dots: false,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                	items: 2
                },
                992: {
                	items: 3
                }
            }
        });
    });



})(jQuery)