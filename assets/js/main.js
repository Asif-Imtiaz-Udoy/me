/*-----------------------------------------------------------------------------------

  Template Name: Bloger HTML5 Template.
  Template URI: #
  Description: Bloger is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.
  Author: A. M. Asif Imtiaz Udoy
  Version: 1.0

-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. Sticky Menu
  02. AnimatedModal Js
  03. Typed Js
  04. Isotope Js
  05. Venobox Js
  06. Portfolio Item Activate
  07. ScrollReveal Js Init
  08. Fixed Footer bottom script ( Newsletter )
  09. Search Bar
  10. Toogle Menu
  11. Shopping Cart Area
  12. Filter Area
  13. User Menu
  14. Overlay Close
  15. Home Slider 
  16. Popular Product Wrap
  17. Testimonial Wrap
  18. Magnific Popup  
  19. Price Slider Active
  20.  Plus Minus Button
  21. jQuery scroll Nav

  

/*--------------------------------
[ End table content ]
-----------------------------------*/

(function ($) {
  "use strict";
  
  /*-------------------------------------------
    01. Sticky Menu
  --------------------------------------------- */
  var win = $(window);
  var menu = $("#menu");
  win.on('scroll',function() {    
    var scroll = win.scrollTop();
    if (scroll < 92) {
      menu.removeClass("sticky");
    }else{
      menu.addClass("sticky");
    }
  });


  /*-------------------------------------------
    02. AnimatedModal Js
  --------------------------------------------- */
  $("#about").animatedModal({
    animatedIn:'zoomIn',
    animatedOut:'zoomOut',
    color:'#101010'
  });

  $("#resume").animatedModal({
    animatedIn:'zoomIn',
    animatedOut:'zoomOut',
    color:'#101010'
  });

  $("#portfolio").animatedModal({
    animatedIn:'zoomIn',
    animatedOut:'zoomOut',
    color:'#101010'
  });

  $("#contact").animatedModal({
    animatedIn:'zoomIn',
    animatedOut:'zoomOut',
    color:'#101010'
  });

  /*-------------------------------------------
    03. Typed Js
  --------------------------------------------- */
  var typed = new Typed('.typed', {
    strings: [
      'Web Designer',
      'Web Developer',
      'Freelancer'
    ],
    smartBackspace: false,
    backDelay: 2000,
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });

  /*-------------------------------------------
    04. Isotope Js
  --------------------------------------------- */

  $('.portfolio-filter').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.item-list').isotope({ filter: filterValue });
  });

  /*-------------------------------------------
    05. Venobox Js
  --------------------------------------------- */

  new VenoBox({
    spinner: "swing",
    bgcolor: "#101010"
  });

  /*-------------------------------------------
    06. Portfolio Item Activate
  --------------------------------------------- */
  $(".filter-item").click(function () {
    if(!$(this).hasClass('active'))
    {
      $(".filter-item.active").removeClass("active");
      $(this).addClass("active");        
    }
  });


})(jQuery);