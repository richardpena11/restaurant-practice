$(document).ready(function () {
    
    // Efecto Menu
    $('.menu a').each(function (index, element) {
        $(this).css({
            top: '-200px'
        })

        $(this).animate({
            top: '0'
        }, 1500 + (index * 500));
    });

    // Efecto Header

    if( $(window).width() > 800 ){
        $('header .texts').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .texts').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1000);

    }

    //Scroll Elementos Menu
        var about = $('#about').offset().top,
            menu = $('#menu-title').offset().top,
            gallery = $('#gallery').offset().top,
            location = $('#location').offset().top;

        $('#btn-about').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: about - 100
            }, 500);
        });

        $('#btn-menu').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: menu
            }, 500);
        });

        $('#btn-gallery').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: gallery
            }, 500);
        });

        $('#btn-location').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: location
            }, 500);
        });

});