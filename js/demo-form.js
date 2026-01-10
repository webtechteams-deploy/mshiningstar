$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    if ($target.length) {
        $('html, body').stop().animate({
            scrollTop: $target.offset().top - 180
        }, 700);
    }
});
