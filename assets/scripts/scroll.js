import $ from 'jquery';

$(document).ready(function () {
    $(window).on("scroll", function () {
        var header = $('#header_main');
        var logo1 = $('#logo1');
        var logo2 = $('#logo2');
        var main = $('main');
        var icons = $('.header-svg');
        var nav_menu = $('.header-menu');
        var header_submenu = $('.header-submenu');
        var minOffset = 50;
        // let is_active = el.classList.contains('active');
        if (minOffset < document.documentElement.scrollTop) {
            if (!header.hasClass('is_scrolled')) {
                header.addClass('is_scrolled');
                logo1.addClass('inactive');
                logo2.removeClass('inactive');
                header_submenu.addClass('white');
                // el.addClass('black');
                main.addClass('main-scroll');
                icons.each(function () {
                    if (true) {
                        icons.addClass('black');
                        nav_menu.addClass('black')
                    }
                });
            }
        } else {
            header.removeClass('is_scrolled');
            logo1.removeClass('inactive');
            logo2.addClass('inactive');
            header_submenu.removeClass('white');
            // el.removeClass('black');
            main.removeClass('main-scroll');
            icons.each(function () {
                if (true) {
                    icons.removeClass('black');
                    nav_menu.removeClass('black');
                }
            });
        }
    });
});