// preloader
$(window).on('load', function() {
    $('#ct-loadding').fadeOut('slow'); // fade out the loading animation
    $('.ct-page-loading-bg').delay(350).fadeOut('slow'); // fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'hide'
    });
});

$('#categoryType').on('change', function (e) {
    if(this.value == 2){
        $("#btnSave").html("<i class='fa-light fa-search fa-lg fa-fw'></i>&nbsp;Search");
    } else {
        $("#btnSave").html("<i class='fa-light fa-save fa-lg fa-fw'></i>&nbsp;Save");
    }
});

