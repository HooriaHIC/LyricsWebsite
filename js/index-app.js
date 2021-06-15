$(document).ready(function() {
    $(".menu1").click(function() {
        $('html,body').animate({
            scrollTop: $(".Home").offset().top},
            'slow');
    });
    $(".menu2").click(function() {
        $('html,body').animate({
            scrollTop: $(".Description").offset().top},
            'slow');
    });
    $(".menu3").click(function() {
        $('html,body').animate({
            scrollTop: $(".Lyrics").offset().top},
            'slow');
    });
    $(".menu4").click(function() {
        $('html,body').animate({
            scrollTop: $(".Start").offset().top},
            'slow');
    });
    $(".menu5").click(function() {
        $('html,body').animate({
            scrollTop: $(".Bio").offset().top},
            'slow');
    });
});