$(document).on("scroll", function(){
    if
      ($(document).scrollTop() > 86){
      $("#header").addClass("shrink");
    }
    else
    {
      $("#header").removeClass("shrink");
    }
  });

jQuery("#carousel").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  dots:false, 
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});

jQuery(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 4500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 2
		              }
		            }
		        });
        	});
			
			
			
			
$(document).ready(function(){
  $('.bf-testimonial-slick').slick({
		pauseOnHover: true,
		autoplay: false,
		autoplayspeed: 2000,
		speed: 1000,
		centerMode: true,
		centerPadding: '20%',
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		draggable:true,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
			}
		}]
    
  });
});