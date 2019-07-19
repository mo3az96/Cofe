$(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.side-nav').show();
        $('.main-side-nav').addClass('inscreen');
        $('.main-side-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");

        $('.slider').addClass('mar');

    });
    $('.side-nav').click(function () {
        $('.side-nav').fadeOut(500);
        $('.main-side-nav').addClass('outscreen');
        $('.main-side-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");

        $('.slider').removeClass('mar');
    });
    $(".main-side-nav").click(function (e) {
        e.stopPropagation();
    });
    $('.closebtn').click(function () {
        $('.side-nav').fadeOut(500);
        $('.main-side-nav').addClass('outscreen');
        $('.main-side-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");

        $('.slider').removeClass('mar');
    });

    // Mobile Search 
    $('.search-btn').click(function () {
        $('.search-pop').fadeIn(500);
        $('body').css("overflow", "hidden");

    });
    $('.search-pop').click(function () {
        $('.search-pop').fadeOut(500);
        $('body').css("overflow", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });

    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        margin: 5,
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {

                dots: false,
            },
            500: {

                dots: false,

            },
            768: {

                dots: false,
            },
            992: {
                dots: true,
            },
        }
    });
    // Product Slider
    $('.Product-slider').owlCarousel({
        items: 5,
        autoplay: false,
        margin: 15,
        stagePadding: 7,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<img src='images/right.png' alt=''>", "<img src='images/left.png' alt=''>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            500: {
                items: 2,
                nav: false,
                dots: true,

            },
            768: {
                items: 3,
                nav: false,
            },
            992: {
                items: 4,
            },
            1199: {
                items: 5
            }
        }
    });
    // Brand Slider
    $('.brand-slider').owlCarousel({
        items: 5,
        autoplay: false,
        margin: 15,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<img src='images/right.png' alt=''>", "<img src='images/left.png' alt=''>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            500: {
                items: 2,
                nav: false,
                dots: true,
            },
            768: {
                items: 3,
                nav: false,
            },
            992: {
                items: 4,
            },
            1199: {
                items: 5
            }
        }
    });


    if ($(window).width() < 992) {
        $(".linksheading").addClass("accordion");
        $(".foot-nav").addClass("panel");
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    if ($(window).width() < 992) {
        $(".user-bar").addClass("xs-icon");
    }
});