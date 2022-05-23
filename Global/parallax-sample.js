function trigger() {
    jQuery('.heading-clip-bg').each(function () {
        var this_position = window.pageYOffset - jQuery(this).offset().top;
        jQuery(this).css({ backgroundPosition: "0 " + (this_position * 0.3) + "px" })
    });
}
trigger();

jQuery(window).on('load scroll orientationchange', function () {
    trigger();
});