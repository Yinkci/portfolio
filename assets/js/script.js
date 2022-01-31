(function($) {
    'use strict';


$("html").css("background-color","#1c1c1c");
$("html").css("overflow-y","hidden");

$(window).on('load', function () {
$("body").css("visibility","visible ");
$(".spinner").css("display","none ");
$("html").css("overflow-y","visible");


});

// ON CLICK
	// $(document).on('click','.my-btn',function(){
	// 	console.log('clicked');
	// });

// SMOOTH SCROLL TO ID
$(document).ready(function() {
    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 700);
    });
});
// In case you want to smooth scroll to an element on a new page, include the following code on that page:

// $(document).ready(function() {
//     if (window.location.hash) {
//         var hash = window.location.hash;
//         $('html, body').animate({
//             scrollTop :  $(hash).offset().top
//         }, 500);
//     };
// });
// MMENU
   $(document).ready(function() {
    $("#my-menu").mmenu({
        "extensions": [
        // "fx-menu-zoom",
        // "fx-panels-zoom",
        "pagedim-black",
        "position-front"
        ],

        navbars: [{
          // content: [ "<img src='"+logo_url+"' class='logo-mobile'/>" ],
            height: 1
        }],

        offCanvas: {
            position  : "center",
            zposition : "front"
        }, navbar: {
            // title: site_name
        }

    });

    var API = $("#my-menu").data( "mmenu" );

    $( window ).resize(function() {
        API.close();
    });

   });
// FIX MENU

    $(window).scroll(function() {

    if( $(this).scrollTop() > 0){
    $(".header").addClass("small-iix");
    }
    else{
    $(".header").removeClass("small-iix");
    }

    });
})(jQuery);


