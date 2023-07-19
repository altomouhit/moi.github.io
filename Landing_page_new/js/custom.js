// preloader
$(window).on('load', function() {
    $('#ct-loadding').fadeOut('slow'); // fade out the loading animation
    $('.ct-page-loading-bg').delay(350).fadeOut('slow'); // fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'hide'
    });
});
