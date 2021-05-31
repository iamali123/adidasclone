
// Sliders

$(document).ready(function() {
    var one = $("#one");
    var two = $("#two");

    one.owlCarousel({
        loop: true,
        pagination: false,
        nav: true,
		dots: true,
		smartSpeed: 400,
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
		slideBy: 'page',
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
        responsive: {
            0: {
				dotsEach: 1,
                items: 1
            },
            768: {
				dotsEach: 2,
                items: 3
            },
            1023: {
				dotsEach: 2,
				items: 4,
		
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

        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            $('body').addClass('ie_edge');
        }

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
            disablePointer: true, 
            disableTouch: false, 
            disableMouse: false, 
            interactiveScrollbars: true,
        });

    });
}

$(".remove-text").click(function() {
    $(this).closest('form').find("input[type=text]").val("");
});

$('.header-btm .main-menu li').click(function(){
    $('.header-btm .main-menu li').removeClass("nav-active");
    $(this).addClass("nav-active");
});

