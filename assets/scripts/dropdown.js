// import $ from 'jquery';

// $(document).ready(function () {
//     // $('.header-menu ul .first').hover(
//     //     function () {
//     //         $(".header-submenu").css('display', 'flex');
//     //         $(".header-submenu .second").css('display', 'none');
//     //         $(".header-submenu .first").css('display', 'flex');
//     //         $('main').children('*').children('*').children('*').css('z-index','0');
//     //         $('main').css('filter','blur(10px)');
//     //         $('footer').css('filter','blur(10px)');
//     //     },
//     //     function () {
//     //     }
//     // );

//     $('.header-menu ul .second').hover(
//         function () {
//             $(".header-submenu").css('display', 'flex');
//             $(".header-submenu .first").css('display', 'none');
//             $(".header-submenu .second").css('display', 'flex');
//             $('main').children('*').children('*').children('*').css('z-index','0');
//             $('main').css('filter','blur(10px)');
//             $('footer').css('filter','blur(10px)');
//         },
//         function () {
//         }
//     );
//     $('.header-submenu').hover(
//         function() {

//         },
//         function() {
//             $(".header-submenu .first").css('display', 'none');
//             $(".header-submenu .second").css('display', 'none');
//             $(".header-submenu").css('display', 'none');
//             $('main').children('*').children('*').children('*').css('z-index','100');
//             $('main').css('filter','blur(0)');
//             $('footer').css('filter','blur(0)');
//         }
//     );
// });