$(document).ready(function () {


    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-area').addClass('nav-area-header');
        } else {
            $('.nav-area').removeClass('nav-area-header');
        }
    });

    $('.gallery-item').isotope({

        itemSelector: '.item',
        cellsByRow: {
         columnWidth: 10,
        rowHeight: 10
        }
        
    });

    $('.gallery-menu').on('click', 'li', function () {
        $('.gallery-menu li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.gallery-item').isotope({
            filter: selector
        });
        return false;
    });
    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        center: true,
        items:2,
        margin: 10,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 3
            },

            1024: {
                items: 4
            },

            1366: {
                items: 4
            }
        }   
        
    });
});


