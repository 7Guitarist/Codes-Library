var sectionSlick = ".press-content";
$(sectionSlick).slick({
    slidesToShow: 3,
    slideToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
    arrows: false,
    rows: 1,
    responsive: [
        { breakpoint: 992, settings: { slidesToShow: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
});
var isSliding = false;
jQuery(sectionSlick).on("beforeChange", function () {
    isSliding = true;
});
jQuery(sectionSlick).on("afterChange", function () {
    isSliding = false;
});
jQuery(".press-content img").click(function (e) {
    if (isSliding) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
        return;
    }
});