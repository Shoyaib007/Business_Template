$(document).ready(function () {
   
    var tp = $(".top");
    var hb = $(".header-bg");
     var $dis = $(".header-bg").offset().top;
    
    
    tp.click(function () {
        $("html,body").animate({
            scrollTop: 0
        });
    });
    $(window).scroll(function () {
        var $scroll = $(this).scrollTop();
        if ($scroll >= 100) {
            tp.fadeIn();
        } else {
            tp.fadeOut();
        }
    });
    //    back to top
    
   

    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling > $dis) {
            hb.addClass("stricky");
        } else {
            hb.removeClass("stricky");
        }
    });
    //    stricky menu
    var mixer = mixitup('.filter-work');
    //    mixitop plagin



    new WOW().init();
    //    wow plagin


    $('.banner_slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoPlaySpeed: true,
        autoPlaySpeed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fas left-icon fa-angle-left"></i>',
        nextArrow: '<i class="fas right-icon fa-angle-right"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //    banner slick


    $('.tst_slick1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoPlaySpeed: true,
        autoPlaySpeed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.tst_slick2',
    
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //    testimonials slick1

    $('.tst_slick2').slick({
        dots: true,
        infinite: true,
        speed: 100,
        autoPlaySpeed: true,
        autoPlaySpeed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor:'.tst_slick1',
    
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //    testimonial slick2
});
