/***************** Waypoints ******************/

$(document).ready(function() {

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    },
    {
        offset: '75%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    },
    {
        offset: '75%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInDown');
    },
    {
        offset: '55%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    },
    {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeInUp');
    },
    {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInDown');
    },
    {
        offset: '75%'
    });

});

/***************** Smooth Scrolling ******************/
$(function() {
 	$('a[href*=#]:not([href=#])').click(function() {
 		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
 			var target = $(this.hash);
 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
 			if (target.length) {
				// Debugger - print the result in #dashboard_text 
				// var h1 = target;
 				$('html,body').animate({
 					scrollTop: target.offset().top
 				}, 1000);
				target.addClass("current").siblings().removeClass("current");				//增加删除新样式
				// $('#dashboard_text').text(h1);
 				/* return false; */
 			}
 		}
 	});
 });
 
/***************** Click to change color ******************/
 $(function () {
	 
	$("#nav li").click(function () {
		$(this).addClass("current").siblings().removeClass("current");
	});
	
    $(" #nav li").hover(function () {
        $(this).find('ul:first').css({ visibility: "visible", display: "none" }).show(400);	//鼠标移动到上面设置其显示样式
    }, function () {
        $(this).find('ul:first').css({ visibility: "hidden" });								//离开隐藏样式
       });
});
 
/***************** Adjust Navi Opacity ******************/
$(window).on('scroll',
function() {
    var h = $('#nav').height();
    var y = $(window).scrollTop();
    var header = $('header');
    if ((y > h + 700) && ($(window).outerWidth() > 768)) {
        header.addClass('opaque');
    } else {
        if (y < h + 700) {
            header.removeClass('opaque');
        } else {
            header.addClass('opaque');
        }
    }
});

/***************** Click #show_time ******************/
 $(function () {
	$("#back_home").click(function () {
		$("#nav li").each(function(){$(this).removeClass("current")});
		$("#nav li").first().addClass("current")
	});
});

/***************** Click #back_home ******************/
 $(function () {
	$("#show_time").click(function () {
		$("#nav li").each(function(){$(this).removeClass("current")});
		$("#nav li").first().next().addClass("current")
	});
});

/***************** Click #wechat ******************/
 $(function () {
    $("#wechat-btn").click(function () {
        $("#wechat-content").toggle();
    });
});


/***************** Debugger Method ******************/
// $(document).ready(function() {
//    $(window).on('scroll', function() {
// 		var h1 = $('#nav').height();
// 		var y1 = $(window).scrollTop();
// 		$('#dashboard_text').text(y1);
//		alert("haha");
// 	});
// });

/***************** Highlight the current section in the navigation bar ******************/
/*  var anchors = $("anchor"),
 navigation_links = $("#nav a");
 anchors.waypoint({
     handler: function(event, direction) {
         var active_anchor;
         active_anchor = $(this);
        if (direction === "up") active_anchor = active_anchor.prev();

        var active_link = $('#nav a[href="#' + active_anchor.attr("id") + '"]');

        $('#dashboard_text').text(active_link.toString());

         navigation_links.parent().removeClass("current");
         active_link.parent().addClass("current");
     },
     offset: '0%'
 }); */


/***************** Overlays ******************/
$(document).ready(function() {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function() {
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function() {
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/
$(window).load(function() {

    $('#portfolioSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: false,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

    $('#servicesSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

    $('#teamSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

});