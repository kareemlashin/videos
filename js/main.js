$(document).ready(function() {
    let topNav = $(".top-nav").height();
    $(".notfaction-slide").css({ top: topNav + 40 + "px" });
    $("#startPage ").css({ marginTop: topNav + 40 + "px" });
    $("#startPage2").css({ marginTop: topNav });

    $(".fa-bell").click(function() {
        $(".notfaction-slide").show();
        $(".notfaction-slide").animate({ top: topNav + 20 + "px" }, 500);

    })

    $(document).mouseup(function(e) {
        const container = $('.notfaction-slide');
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            $('.notfaction-slide').hide();
            $(".notfaction-slide").css({ top: topNav + 40 + "px" });
        }
    });


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            200: {
                items: 2,
            },
            400: {
                items: 3,
            },
            600: {
                items: 4,
            },
            800: {
                items: 5,
            },
            1000: {
                items: 6,
            }

        }
    });

});