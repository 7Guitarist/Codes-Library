var sectionSlick = ".properties-slick";
$(sectionSlick).slick({
    slidesToShow: 3,
    slideToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
    arrows: true,
    prevArrow: ".hp-properties .prev",
    nextArrow: ".hp-properties .next",
    rows: 2,
    responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
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
jQuery(".properties-image img").click(function (e) {
    if (isSliding) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
        return;
    }
});