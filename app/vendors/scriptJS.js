//custom the speed of carousel in the banner
$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000 // 2 seconds;
    $('.carousel').carousel({
        interval: 10000,
    });


    //sileToggle to the .navbar__menu .navbar class 
    $('#nav-icon').click(function() {
        $('#nav-icon').toggleClass('active');
        $('.navbar__menu .navbar').slideToggle();
    })

    //scroll
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        var width = $(window).width();
        if (position >= 400 && width > 576) {
            $('.navbar__menu .navbar').addClass('bg-dark').addClass('fixed-top');
        } else {
            $('.navbar__menu .navbar').removeClass('bg-dark').removeClass('fixed-top');
        }
        if (position >= 50) {
            $('.top-menu-btn').addClass('fixed-top');
        } else {
            $('.top-menu-btn').removeClass('fixed-top');
        }
    })
})