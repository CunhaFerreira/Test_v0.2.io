$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".home-inner img").css({
        transform: 'translate3d(0, -' + (scroll / 10) + '%, 0) scale(' + (100 + scroll / 8) / 100 + ')',
    });
});