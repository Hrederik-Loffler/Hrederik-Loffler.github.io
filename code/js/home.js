$(document).ready(function () {
    let slider = $("#sliderWrapper");
    let sliderShop = $("#sliderShop");

    slider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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

    777777
    sliderShop.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    let navToggle = $("#navToggle");
    let nav = $("#nav");

    navToggle.on("click", function (e) {
        e.preventDefault();

        nav.toggleClass("show");
    });

    let dropMenu = $("#dropMenu");
    let dropMenuContent = $(".drop-menu__content");
    let dropLink = $(".drop-menu__link");

    dropMenu.on("click", function () {
        dropMenuContent.toggleClass("drop-menu__content__flex")
    });

    dropLink.on("click", function () {
        if (dropMenuContent.hasClass("drop-menu__content__flex")) {
            dropMenuContent.removeClass("drop-menu__content__flex");
        }
    });


});