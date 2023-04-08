
$(function () {

    $('.slider__wrapper').slick({

        prevArrow: '<div class="slider__buttons-first"><button type="button" class="slider__btn slider__btn-right"><div ></button></div>',
        nextArrow: '<div class="slider__buttons-last "><button type="button" class="slider__btn slider__btn-left"><div  ></button></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.franchise__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    var header = $("#header"),
            introH = $("#screen").innerHeight(),
            serviceH = $("#service").offset().top,
            adresH = $("#adres").offset().top,
            aboutH = $("#about").offset().top,
            franchiseH = $("#franchise").offset().top,
            contactsH = $("#contacts").offset().top,
            scrollOffset = $(window).scrollTop();

            serviceH = serviceH - 150;
            adresH = adresH - 150;
            aboutH = aboutH - 150;
            franchiseH = franchiseH - 150;
            contactsH =  contactsH - 150;

    //     /* Fixed Header*/
        check(scrollOffset);
        $(window).on("scroll", function () {
            scrollOffset = $(this).scrollTop();
            check(scrollOffset);
        });

    function addClass(x){
        for(let m=1; m<7; m++){
            if(x==m){
                $(".header__link." + m).addClass("active");
            } else{
                $(".header__link." + m).removeClass("active");
            }
        }
    }
    function check(scrollOffset) {
        if (scrollOffset >= serviceH && scrollOffset <= adresH ) {
             addClass(2);
        } else if (scrollOffset > adresH  && scrollOffset <=  aboutH){
             addClass(3);
        } else if (scrollOffset >  aboutH && scrollOffset <  franchiseH){
             addClass(4);
        } else if (scrollOffset >   franchiseH && scrollOffset <  contactsH){
             addClass(5);
        }  else if (scrollOffset >= contactsH ){
             addClass(6);
        }else if (scrollOffset = introH ){
             addClass(1);

        }


    }

    /* Smooth scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockoffset = $(blockId).offset().top;
        $(".header__link").removeClass("active");
        $this.addClass("active");
        $("html,body").animate({
            scrollTop: blockoffset
        }, 500);
    });

    $("#nav__burger").on("click", function (event) {
        event.preventDefault();
        $('.header__bg--shadow').toggleClass("active");
        $('.nav__burger').toggleClass("active");
        $('body').toggleClass("lock");
        $("#header__nav").toggleClass("active");

    });
    $(".header__bg--shadow").on("click", function (event) {
        event.preventDefault();
        $('.header__bg--shadow').toggleClass("active");
        $('.nav__burger').toggleClass("active");
        $('body').toggleClass("lock");
        $("#header__nav").toggleClass("active");

    });


});

$("#service__btn").on("click", function (event) {
    event.preventDefault();
    if ($(".table ").hasClass("active")) {
        $('.service__stock').toggleClass("active");
        $('.service__price').toggleClass("active");
        $('.service__close').toggleClass("active");
        $('.table').toggleClass("active");
    } else {
        $('.service__stock').toggleClass("active");
        $('.service__price').toggleClass("active");
        $('.service__close').toggleClass("active");
        function timeS() {
            $('.table').toggleClass("active");
        }

        setTimeout(timeS, 2000);
    }

});
$(".service__close").on("click", function (event) {
    event.preventDefault();
    $('.service__price').toggleClass("active");
    $('.table').toggleClass("active");
    $('.service__close').toggleClass("active");
    $('.service__stock').toggleClass("active");

});

$(".slider__wrapper").on("init", function (event, slick) {
    $(".span").text(parseInt(slick.currentSlide + 1));

});

$(".slider__wrapper").on("afterChange", function (event, slick, currentSlide) {
    $(".span").text(parseInt(slick.currentSlide + 1));
});

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [51.51050, -0.136108],
        zoom: 16
    });
    myMap.controls
        .remove('rulerControl')
        .remove('fullscreenControl')
        .remove('typeSelector')
        .remove('trafficControl')
        .remove('searchControl')
        .remove('geolocationControl');

    var myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageSize: [40, 42],
        iconImageOffset: [-18, -10]
    });
    var placemark = new ymaps.Placemark([51.509859, -0.134261], {
        balloonContentHeader: 'BarberShop',
        balloonContentBody: " Piccadilly Circus underground",
        hintContent: " Piccadilly Circus underground "
    });
    myCollection.add(placemark);
    myMap.geoObjects.add(myCollection);
}


$('.contacts__btn').prop('disabled', true);
$('#Name').on('keyup', function () {
    if ($.trim($('.contacts__input').val()).length > 0) {
        $('.contacts__btn').prop('disabled', false);
    }
    else {
        $('.contacts__btn').prop('disabled', true);
    }
});