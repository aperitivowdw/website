// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);


// Classy Nav - Navigation for mobile
!function(e){e.fn.classyNav=function(n){var s=e(".classy-nav-container"),a=e(".classynav ul"),o=e(".classynav > ul > li"),l=e(".classy-navbar-toggler"),i=e(".classycloseIcon"),t=e(".navbarToggler"),d=e(".classy-menu"),r=e(window),c=e.extend({theme:"light",breakpoint:991,openCloseSpeed:350,megaopenCloseSpeed:700,alwaysHidden:!1,openMobileMenu:"left",dropdownRtl:!1,stickyNav:!1,stickyFooterNav:!1},n);return this.each(function(){function n(){window.innerWidth<=c.breakpoint?s.removeClass("breakpoint-off").addClass("breakpoint-on"):s.removeClass("breakpoint-on").addClass("breakpoint-off")}"light"!==c.theme&&"dark"!==c.theme||s.addClass(c.theme),"left"!==c.openMobileMenu&&"right"!==c.openMobileMenu||s.addClass(c.openMobileMenu),!0===c.dropdownRtl&&s.addClass("dropdown-rtl"),l.on("click",function(){t.toggleClass("active"),d.toggleClass("menu-on")}),i.on("click",function(){d.removeClass("menu-on"),t.removeClass("active")}),o.has(".dropdown").addClass("cn-dropdown-item"),o.has(".megamenu").addClass("megamenu-item"),a.find("li a").each(function(){e(this).next().length>0&&e(this).parent("li").addClass("has-down").append('<span class="dd-trigger"></span>')}),a.find("li .dd-trigger").on("click",function(n){n.preventDefault(),e(this).parent("li").children("ul").stop(!0,!0).slideToggle(c.openCloseSpeed),e(this).parent("li").toggleClass("active")}),e(".megamenu-item").removeClass("has-down"),a.find("li .dd-trigger").on("click",function(n){n.preventDefault(),e(this).parent("li").children(".megamenu").slideToggle(c.megaopenCloseSpeed)}),n(),r.on("resize",function(){n()}),!0===c.alwaysHidden&&s.addClass("breakpoint-on").removeClass("breakpoint-off"),!0===c.stickyNav&&r.on("scroll",function(){r.scrollTop()>0?s.addClass("classy-sticky"):s.removeClass("classy-sticky")}),!0===c.stickyFooterNav&&s.addClass("classy-sticky-footer")})}}(jQuery);
