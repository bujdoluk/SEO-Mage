$(document).ready(function () {

    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
            $('#nav_bar').addClass('nav_bar');
        }
        if ($(window).scrollTop() < 281) {
            $('#nav_bar').removeClass('nav_bar');
        }
    });
});