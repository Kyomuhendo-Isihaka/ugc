$(document).ready(function(){

    $('#search, .fa-search').mouseenter(function(){
        $('.logo').hide();
    });
    
    $('#search, .fa-search').mouseleave(function(){
        $('.logo').show();
    });
    
    $('.fa-bars').click(function(){
        $('.navbar').toggle();
        $(this).toggleClass('fa-times')
    });

    $('.navbar, .navbar a').click(function(){
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times');
    });

    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        autoplay:true

    });

    $('.product-slider').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        autoplay:true,
        center:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            550:{
                items:2
            },
            1000:{
                items:3
            }
        }

    });


});