// scrollBottom: function () {
jQuery(".slide-arrow").on("click", function (e) {
    e.preventDefault();
    jQuery("html, body").animate(
        { scrollTop: jQuery(".hp-qs").offset().top - 92 },
        500,
        "linear"
    );
});
// },