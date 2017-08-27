$('.owl-carousel').owlCarousel({
    loop:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1300,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})

$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})


$('.owl-carousel2').owlCarousel({
    loop:true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1300,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

// Menu mobile
$(document).ready(function() {
    var removeClass = true;
    $menuLeft = $('.menu_mobile_pushmenu_left');
    $nav_list = $('.menu_mobile_button');

    $nav_list.click(function(e) {
        $(this).toggleClass('active');
        $menuLeft.toggleClass('pushmenu-open');
        removeClass = false;
    });

    $('html').click(function () {
          if (removeClass) {
              $('.menu_mobile_pushmenu_left').removeClass('pushmenu-open');
               $('.menu_mobile_button').removeClass('active');
          }
          removeClass = true;
    });

    $('.menu_mobile_list_inner .parent').find('.menu_mobile_list_submenu').hide();

    // Accordion
    $('.menu_mobile_list_inner .parent').find('.fa-icon-action').click(function () {
      var next = $(this).next();
      next.slideToggle('fast');
      $('.menu_mobile_list_submenu').not(next).slideUp('fast');
      removeClass = false;
    });
    $('.menu_mobile_list_inner li .fa-icon-action').on('click', function(){
      $('.menu_mobile_list_inner li .fa-icon-action.active').removeClass('active');
      $(this).addClass('active');
      removeClass = false;
    });
});
// End Menu mobile