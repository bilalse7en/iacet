$(document).ready(function() {
    $('.network-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    function startCount() {
        $('.counter').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).data('target')
            }, {
                duration: 3000,
                easing: 'swing',
                step: function(now) {
                    if ($(this).data('target') % 1 === 0) {
                        $(this).text(Math.floor(now));
                    } else {
                        $(this).text(now.toFixed(1));
                    }
                }
            });
        });
    }

    $(window).scroll(function() {
        var statsTop = $('.stats').offset().top - window.innerHeight;
        if ($(window).scrollTop() > statsTop) {
            startCount();
        }
    });
    $('.services-we-offer .row').slick({
        dots: true, // Show navigators
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        appendDots: $('.services-we-offer .container'), // Append dots to the container
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(document).ready(function(){
        $('.reputation-slider').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: $('.reputation-slick-prev'),
            nextArrow: $('.reputation-slick-next'),
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
});