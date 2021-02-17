(function ($) {
    "use strict";

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on("load", function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove();
        });
    });

    // :: 4.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#viralnewsNav').classyNav();

        // $('.classy-navbar').on('click', (e) => {
        //     $('.classy-menu').toggle('.menu-on')
        //     });

    }

    // :: 6.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 8.0 Sticky Active Code
    if ($.fn.sticky) {
        $("#stickyMenu").sticky({
            topSpacing: 0
        });
    }

    // :: 10.0 prevent default a click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);
