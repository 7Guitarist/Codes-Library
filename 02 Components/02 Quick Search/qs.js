// 1m - 1000000m ION RANGE SLIDER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var $rangeslider = jQuery(".qs-range-field #qs-range"),
    $minPrice = jQuery(".qs-range-field .selected-min-price"),
    $maxPrice = jQuery(".qs-range-field .selected-max-price");
jQuery(".qs-range-field #qs-range").ionRangeSlider({
    type: "double",
    min: 1,
    max: 10, // change for maximum value
    from: 1,
    to: 10, // change for maximum value
    hide_min_max: true,
    hide_from_to: true,
    onFinish: function () { },
});
$rangeslider.on("change", function () {
    var $this = jQuery(this),
        value = $this.prop("value").split(";");
    _minPrice = value[0] < 1 ? value[0] : value[0] + "M"; // change this last letter
    _maxPrice = value[1] < 1 ? value[1] : value[1] + "M"; // change this last letter
    $minPrice.text("$" + _minPrice); // change dollar sign
    $maxPrice.text("$" + _maxPrice); // change dollar sign
    _maxPrice = parseInt(_maxPrice) * 1000000;
    _minPrice = parseInt(_minPrice) * 1000000;
    $minPrice.val(convertPrice(_minPrice));
    $maxPrice.val(convertPrice(_maxPrice));
    jQuery("#min_price").val(_minPrice);
    jQuery("#max_price").val(_maxPrice);
});
function convertPrice(price) {
    return Math.abs(Number(price)) >= 1.0e9
        ? Math.abs(Number(price)) / 1.0e9 + "B"
        : Math.abs(Number(price)) >= 1.0e6
            ? Math.abs(Number(price)) / 1.0e6 + "M"
            : Math.abs(Number(price)) >= 1.0e3
                ? Math.abs(Number(price)) / 1.0e3 + "K"
                : Math.abs(Number(price));
}

// 0 - 150,000,000 ION RANGE SLIDER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var k = jQuery(".qs-range-field #qs-range"),
    a = jQuery(".qs-range-field .selected-min-price"),
    d = jQuery(".qs-range-field .selected-max-price");
jQuery("#min_price").val(0);
jQuery("#max_price").val(15e7);
jQuery(".qs-range-field #qs-range").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15e7, // change this number depends on the comp
    from: 0,
    to: 50e7,
    hide_min_max: !0,
    hide_from_to: !0,
    onFinish: function () { },
});
k.on("change", function () {
    var g = jQuery(this).prop("value").split(";"),
        l = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    _minPrice = g[0];
    _maxPrice = g[1];
    a.text(l.format(_minPrice));
    d.text(l.format(_maxPrice));
    _maxPrice = parseInt(_maxPrice);
    _minPrice = parseInt(_minPrice);
    a.val(_minPrice);
    d.val(_maxPrice);
    jQuery("#min_price").val(_minPrice);
    jQuery("#max_price").val(_maxPrice);
});


