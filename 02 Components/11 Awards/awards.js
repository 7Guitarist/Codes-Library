var sectionSlick = ".awards-slick";
$(sectionSlick).slick({
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    arrows: false,
    buttons: false
});
var isSliding = false;
jQuery(sectionSlick).on("beforeChange", function () {
    isSliding = true;
});
jQuery(sectionSlick).on("afterChange", function () {
    isSliding = false;
});
jQuery(".awards-item img").click(function (e) {
    if (isSliding) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
        return;
    }
});