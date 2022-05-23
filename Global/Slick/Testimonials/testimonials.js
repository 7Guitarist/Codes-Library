//code here
var sectionSlick = '.testimonials-slick';
$(".testimonials-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1500,
    asNavFor: ".testimonials-slick-img",
    infinite: true,
    arrows: true,
    prevArrow: ".hp-testimonials .prev",
    nextArrow: ".hp-testimonials .next",
});
$(".testimonials-slick-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 7000,
    speed: 1500,
    asNavFor: ".testimonials-slick",
    arrows: false,
});
var isSliding = false;
jQuery(sectionSlick).on("beforeChange", function () {
    isSliding = true;
});
jQuery(sectionSlick).on("afterChange", function () {
    isSliding = false;
});
jQuery(".testimonials-image img").click(function (e) {
    if (isSliding) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
        return;
    }
});