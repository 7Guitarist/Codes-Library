var sectionSlick = ".communities-slick";
$(sectionSlick).slick({
    slidesToShow: 4,
    slideToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1000,
    arrows: true,
    prevArrow: ".hp-communities .prev",
    nextArrow: ".hp-communities .next",
    rows: 1,
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
jQuery(".communities-image img").click(function (e) {
    if (isSliding) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
        return;
    }
});

jQuery(document).on(
    "click",
    ".mobile .communities-item",
    function (e) {
        e.preventDefault();
        if (jQuery(this).hasClass("clicked_once")) {
            var item_link = jQuery(this).attr("href");
            window.location.href = item_link;
        } else {
            jQuery(".mobile .communities-item").removeClass("clicked_once");
        }
        jQuery(this).addClass("clicked_once");
    }
);