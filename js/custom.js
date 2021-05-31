// Sliders
$(document).ready(function() {
    var one = $("#one");
    var two = $("#two");

    one.owlCarousel({
        loop: true,
        pagination: false,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    two.owlCarousel({
        loop: true,
        pagination: false,
        dots: true,
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1023: {
                items: 4
            }
        }
    });
});

// Contact Us

$(document).ready(function() {
    $(".flip").click(function(e) {
        e.stopPropagation();
        $(this).next().slideToggle();
        $(this).toggleClass('open-tabs');
    });
});

$(document).on("click", function(event) {
    var $trigger = $(".flip");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".panel").slideUp();
    }
});

jQuery('.panel li').on('click', function() {
    $(this).closest('.group-form').find('.flip').removeClass('.open-tabs').html($(this).text());
    $(this).closest('.panel').hide();
    $(this).addClass('active-item').siblings().removeClass('active-item');
});

// Header Toggle

$(document).ready(function() {
    $(".mobile-menu").click(function() {
        $(".header-btm").slideToggle();
    });
});

$('.mobile-menu').on('click', function() {
    $(this).toggleClass('change');
});

// Blogs Match-Height

if (window.matchMedia('(min-width: 768px)').matches) {
    var matchHeight = function() {

        function init() {
            eventListeners();
            matchHeight();
        }

        function eventListeners() {
            $(window).on('resize', function() {
                matchHeight();
            });
        }

        function matchHeight() {
            var groupName = $('[data-match-height]');
            var groupHeights = [];

            groupName.css('min-height', 'auto');

            groupName.each(function() {
                groupHeights.push($(this).outerHeight());
            });

            var maxHeight = Math.max.apply(null, groupHeights);
            groupName.css('min-height', maxHeight);
        }

        return {
            init: init
        };

    }();
}

$(document).ready(function() {
    matchHeight.init();
});

if (window.matchMedia('(min-width: 768px)').matches) {
    $('document').ready(function() {
        // add class of ie_edge for edge
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            $('body').addClass('ie_edge');
        }
        //run the select code for all selects
        generate_select('select');
        document.activeElement.blur();
        $(document).on('gform_post_render', function() {
            generate_select('select');
        });
        var myScroll = new IScroll('.header-btm', {
            scrollbars: 'custom',
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            probeType: 3,
            shrinkScrollbars: 'scale',
            fadeScrollbars: true,
            click: true,
            disablePointer: true, // important to disable the pointer events that causes the issues
            disableTouch: false, // false if you want the slider to be usable with touch devices
            disableMouse: false, // false if you want the slider to be usable with a mouse (desktop)
            interactiveScrollbars: true,
        });

    });
}
$(".remove-text").click(function() {
    $(this).closest('form').find("input[type=text]").val("");
});