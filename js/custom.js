$(function () {
    "use strict";

    // Close mobile menu on link click.
    $(".navbar .nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Add a solid background on scroll for readability.
    $(window).on("scroll", function () {
        var offset = $(window).scrollTop();
        if (offset > 72) {
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }
    });

    // Smooth anchor scrolling with fixed navbar offset.
    $(".navbar .nav-link, .hero-btn").on("click", function (event) {
        var targetSelector = $(this).attr("href");
        if (targetSelector && targetSelector.startsWith("#") && $(targetSelector).length) {
            event.preventDefault();
            $("html, body").stop().animate(
                { scrollTop: $(targetSelector).offset().top - 78 },
                700
            );
        }
    });
});
